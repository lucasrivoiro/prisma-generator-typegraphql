import {
  PropertyDeclarationStructure,
  OptionalKind,
  Project,
  GetAccessorDeclarationStructure,
  SetAccessorDeclarationStructure,
  Writers,
  MethodDeclarationStructure,
} from "ts-morph";
import path from "path";

import { outputsFolderName, inputsFolderName } from "./config";
import {
  generateTypeGraphQLImport,
  generateInputsImports,
  generateTypeOnlyInputsImports,
  generateEnumsImports,
  generateArgsImports,
  generateGraphQLScalarsImport,
  generatePrismaNamespaceImport,
  generateOutputsImports,
  generateCustomScalarsImport,
  generateModelsImports,
} from "./imports";
import { DmmfDocument } from "./dmmf/dmmf-document";
import { DMMF } from "./dmmf/types";
import { GeneratorOptions } from "./options";
import { pascalCase } from "./helpers";

/**
 * Returns the type thunk expression for a `@Field` decorator argument.
 *
 * For **self-referential** input types (where a field's type is the same
 * class being defined in the current file), a lazy `require()` call is used
 * instead of a direct class reference. This prevents circular module
 * evaluation errors (e.g. Turbopack's "Cannot access X before
 * initialization") that arise because the class binding is not yet
 * established when its own property decorators are evaluated in ESM.
 *
 * For cross-file input type references that are **not** self-referential,
 * the class is imported via a normal `import` statement at the top of the
 * file so that TypeGraphQL's `@InputType()` decorator runs—and the class
 * gets registered—before `buildSchema` is ever called.
 *
 * @param field - The schema arg representing the field.
 * @param currentTypeName - The name of the input class currently being generated.
 * @returns The expression to use as the first argument of `@Field`.
 */
function getInputFieldTypeThunk(
  field: DMMF.SchemaArg,
  currentTypeName: string,
): string {
  if (field.selectedInputType.location === "inputObjectTypes") {
    const typeName = field.selectedInputType.type;
    if (typeName === currentTypeName) {
      // Self-referential: use lazy require() to avoid ESM/Turbopack TDZ.
      const lazyRef = `require("./${typeName}").${typeName}`;
      return field.selectedInputType.isList ? `[${lazyRef}]` : lazyRef;
    }
    // Cross-file dep: the class is available via a normal top-level import.
    return field.typeGraphQLType;
  }
  return field.typeGraphQLType;
}

export function generateOutputTypeClassFromType(
  project: Project,
  dirPath: string,
  type: DMMF.OutputType,
  dmmfDocument: DmmfDocument,
) {
  const fileDirPath = path.resolve(dirPath, outputsFolderName);
  const filePath = path.resolve(fileDirPath, `${type.typeName}.ts`);
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  const fieldArgsTypeNames = type.fields
    .filter(it => it.argsTypeName)
    .map(it => it.argsTypeName!);
  const outputObjectTypes = type.fields.filter(
    field => field.outputType.location === "outputObjectTypes",
  );
  const outputObjectModelTypes = outputObjectTypes.filter(field =>
    dmmfDocument.isModelTypeName(field.outputType.type),
  );

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLScalarsImport(sourceFile);
  generatePrismaNamespaceImport(sourceFile, dmmfDocument.options, 2);
  generateCustomScalarsImport(sourceFile, 2);
  generateArgsImports(sourceFile, fieldArgsTypeNames, 0);
  generateOutputsImports(
    sourceFile,
    outputObjectTypes
      .filter(field => !outputObjectModelTypes.includes(field))
      .map(field => field.outputType.type),
    1,
  );
  generateModelsImports(
    sourceFile,
    outputObjectModelTypes.map(field => field.outputType.type),
    2,
  );
  generateEnumsImports(
    sourceFile,
    type.fields
      .map(field => field.outputType)
      .filter(fieldType => fieldType.location === "enumTypes")
      .map(fieldType => fieldType.type),
    2,
  );

  sourceFile.addClass({
    name: type.typeName,
    isExported: true,
    decorators: [
      {
        name: "TypeGraphQL.ObjectType",
        arguments: [
          `"${type.typeName}"`,
          Writers.object({
            ...(dmmfDocument.options.emitIsAbstract && {
              isAbstract: "true",
            }),
            ...(dmmfDocument.options.simpleResolvers && {
              simpleResolvers: "true",
            }),
          }),
        ],
      },
    ],
    properties: [
      ...type.fields
        .filter(field => !field.argsTypeName)
        .map<OptionalKind<PropertyDeclarationStructure>>(field => ({
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: true,
          hasQuestionToken: false,
          trailingTrivia: "\r\n",
          decorators: [
            {
              name: "TypeGraphQL.Field",
              arguments: [
                `_type => ${field.typeGraphQLType}`,
                Writers.object({
                  nullable: `${!field.isRequired}`,
                }),
              ],
            },
          ],
        })),
      ...type.fields
        .filter(field => field.argsTypeName)
        .map<OptionalKind<PropertyDeclarationStructure>>(field => ({
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: true,
          hasQuestionToken: false,
        })),
    ],
    methods: type.fields
      .filter(field => field.argsTypeName)
      .map<OptionalKind<MethodDeclarationStructure>>(field => ({
        name: `get${pascalCase(field.name)}`,
        returnType: field.fieldTSType,
        trailingTrivia: "\r\n",
        decorators: [
          {
            name: "TypeGraphQL.Field",
            arguments: [
              `_type => ${field.typeGraphQLType}`,
              Writers.object({
                name: `"${field.name}"`,
                nullable: `${!field.isRequired}`,
              }),
            ],
          },
        ],
        parameters: [
          {
            name: "root",
            type: type.typeName,
            decorators: [{ name: "TypeGraphQL.Root", arguments: [] }],
          },
          {
            name: "args",
            type: field.argsTypeName,
            decorators: [
              {
                name: "TypeGraphQL.Args",
                arguments: [`() => ${field.argsTypeName}`],
              },
            ],
          },
        ],
        statements: [Writers.returnStatement(`root.${field.name}`)],
      })),
  });
}

export function generateInputTypeClassFromType(
  project: Project,
  dirPath: string,
  inputType: DMMF.InputType,
  options: GeneratorOptions,
) {
  const filePath = path.resolve(
    dirPath,
    inputsFolderName,
    `${inputType.typeName}.ts`,
  );
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  });

  generateTypeGraphQLImport(sourceFile);
  generateGraphQLScalarsImport(sourceFile);
  generatePrismaNamespaceImport(sourceFile, options, 2);
  generateCustomScalarsImport(sourceFile, 2);
  // Cross-file input type dependencies: use a normal value import so that
  // their `@InputType()` decorators run before `buildSchema` collects type
  // metadata. A direct class reference is used in the `@Field` thunk.
  generateInputsImports(
    sourceFile,
    inputType.fields
      .filter(field => field.selectedInputType.location === "inputObjectTypes")
      .map(field => field.selectedInputType.type)
      .filter(fieldType => fieldType !== inputType.typeName),
  );
  // Self-referential fields reference `inputType.typeName` itself, which is
  // already in scope (defined in this same file). No import is needed.
  // The `@Field` thunk uses a lazy `require()` to avoid an ESM/Turbopack
  // TDZ error when the class binding is accessed before initialization
  // (see `getInputFieldTypeThunk`).
  generateEnumsImports(
    sourceFile,
    inputType.fields
      .map(field => field.selectedInputType)
      .filter(fieldType => fieldType.location === "enumTypes")
      .map(fieldType => fieldType.type as string),
    2,
  );

  const fieldsToEmit = inputType.fields.filter(field => !field.isOmitted);
  const mappedFields = fieldsToEmit.filter(field => field.hasMappedName);

  sourceFile.addClass({
    name: inputType.typeName,
    isExported: true,
    decorators: [
      {
        name: "TypeGraphQL.InputType",
        arguments: [
          `"${inputType.typeName}"`,
          Writers.object({
            ...(options.emitIsAbstract && {
              isAbstract: "true",
            }),
          }),
        ],
      },
    ],
    properties: fieldsToEmit.map<OptionalKind<PropertyDeclarationStructure>>(
      field => {
        return {
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: !!field.isRequired,
          hasQuestionToken: !field.isRequired,
          trailingTrivia: "\r\n",
          decorators: field.hasMappedName
            ? []
            : [
                {
                  name: "TypeGraphQL.Field",
                  arguments: [
                    `_type => ${getInputFieldTypeThunk(field, inputType.typeName)}`,
                    Writers.object({
                      nullable: `${!field.isRequired}`,
                    }),
                  ],
                },
              ],
        };
      },
    ),
    getAccessors: mappedFields.map<
      OptionalKind<GetAccessorDeclarationStructure>
    >(field => {
      return {
        name: field.typeName,
        type: field.fieldTSType,
        hasExclamationToken: field.isRequired,
        hasQuestionToken: !field.isRequired,
        trailingTrivia: "\r\n",
        statements: [`return this.${field.name};`],
        decorators: [
          {
            name: "TypeGraphQL.Field",
            arguments: [
              `_type => ${getInputFieldTypeThunk(field, inputType.typeName)}`,
              Writers.object({
                nullable: `${!field.isRequired}`,
              }),
            ],
          },
        ],
      };
    }),
    setAccessors: mappedFields.map<
      OptionalKind<SetAccessorDeclarationStructure>
    >(field => {
      return {
        name: field.typeName,
        type: field.fieldTSType,
        hasExclamationToken: field.isRequired,
        hasQuestionToken: !field.isRequired,
        trailingTrivia: "\r\n",
        parameters: [{ name: field.name, type: field.fieldTSType }],
        statements: [`this.${field.name} = ${field.name};`],
      };
    }),
  });
}
