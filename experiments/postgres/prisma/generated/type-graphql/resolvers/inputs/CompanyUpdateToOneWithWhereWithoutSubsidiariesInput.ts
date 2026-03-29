import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUpdateWithoutSubsidiariesInput } from "../inputs/CompanyUpdateWithoutSubsidiariesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType("CompanyUpdateToOneWithWhereWithoutSubsidiariesInput", {})
export class CompanyUpdateToOneWithWhereWithoutSubsidiariesInput {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutSubsidiariesInput, {
    nullable: false
  })
  data!: CompanyUpdateWithoutSubsidiariesInput;
}
