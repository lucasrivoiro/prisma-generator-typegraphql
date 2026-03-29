import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutSubsidiariesInput } from "../inputs/CompanyCreateOrConnectWithoutSubsidiariesInput";
import { CompanyCreateWithoutSubsidiariesInput } from "../inputs/CompanyCreateWithoutSubsidiariesInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateNestedOneWithoutSubsidiariesInput", {})
export class CompanyCreateNestedOneWithoutSubsidiariesInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutSubsidiariesInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutSubsidiariesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutSubsidiariesInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutSubsidiariesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;
}
