import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutSubsidiariesInput } from "../inputs/CompanyCreateWithoutSubsidiariesInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateOrConnectWithoutSubsidiariesInput", {})
export class CompanyCreateOrConnectWithoutSubsidiariesInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutSubsidiariesInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutSubsidiariesInput;
}
