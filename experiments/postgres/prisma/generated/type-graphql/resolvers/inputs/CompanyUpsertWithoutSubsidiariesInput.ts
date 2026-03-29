import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutSubsidiariesInput } from "../inputs/CompanyCreateWithoutSubsidiariesInput";
import { CompanyUpdateWithoutSubsidiariesInput } from "../inputs/CompanyUpdateWithoutSubsidiariesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType("CompanyUpsertWithoutSubsidiariesInput", {})
export class CompanyUpsertWithoutSubsidiariesInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutSubsidiariesInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutSubsidiariesInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutSubsidiariesInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutSubsidiariesInput;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;
}
