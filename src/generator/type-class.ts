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
  generateTypeOnlyInputsImports,
  generateSideEffectInputsImports,
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
 * For every `inputObjectType` reference, a lazy `require()` call is used
 * instead of a direct reference to the imported binding.  This prevents
 * Temporal Dead Zone (TDZ) errors under Turbopack/ESM where the bundler
 * can evaluate circular module chains before every class binding is fully
 * initialised.  Because the thunk is only invoked during `buildSchema()`
 * — well after all modules have completed their initial evaluation — every
 * `require()` call returns the already-fully-initialised class.
 *
 * TypeGraphQL registration (the `@InputType()` side-effect) is guaranteed
 * by the companion `import "./X"` side-effect declaration generated
 * alongside `import type { X }`.  The side-effect import has no live
 * binding, so it cannot trigger TDZ in circular chains.
 *
 * @param field - The schema arg representing the field.
 * @returns The expression to use as the first argument of `@Field`.
 */
function getInputFieldTypeThunk(field: DMMF.SchemaArg): string {
  if (field.selectedInputType.location === "inputObjectTypes") {
    const typeName = field.selectedInputType.type;
    // Lazy require: safe in circular chains AND guarantees the class is
    // fully initialised when the thunk is eventually called.
    const lazyRef = `require("./${typeName}").${typeName}`;
    return field.selectedInputType.isList ? `[${lazyRef}]` : lazyRef;
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
  // For every cross-file input type dependency we emit TWO import lines:
  //
  //   import type { X } from "./X";  // keeps X in scope for TypeScript
  //   import "./X";                  // side-effect: runs @InputType(), no binding → no TDZ
  //
  // Using a normal value `import { X }` would create a live binding that
  // Turbopack accesses at module-evaluation time, which throws a TDZ
  // ReferenceError in circular module chains.  The side-effect-only import
  // has no binding, so it is safe regardless of evaluation order.
  //
  // Self-referential types (X === inputType.typeName) are defined in this
  // same file, so they need no import at all.  Their `@Field` thunks still
  // use `require()` (see `getInputFieldTypeThunk`) for the same TDZ reason.
  const crossFileDeps = inputType.fields
    .filter(field => field.selectedInputType.location === "inputObjectTypes")
    .map(field => field.selectedInputType.type)
    .filter(fieldType => fieldType !== inputType.typeName);
  generateTypeOnlyInputsImports(sourceFile, crossFileDeps);
  generateSideEffectInputsImports(sourceFile, crossFileDeps);
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
                    `_type => ${getInputFieldTypeThunk(field)}`,
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
              `_type => ${getInputFieldTypeThunk(field)}`,
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
