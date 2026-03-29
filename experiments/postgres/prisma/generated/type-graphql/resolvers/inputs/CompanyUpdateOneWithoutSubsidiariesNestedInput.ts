import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutSubsidiariesInput } from "../inputs/CompanyCreateOrConnectWithoutSubsidiariesInput";
import { CompanyCreateWithoutSubsidiariesInput } from "../inputs/CompanyCreateWithoutSubsidiariesInput";
import { CompanyUpdateToOneWithWhereWithoutSubsidiariesInput } from "../inputs/CompanyUpdateToOneWithWhereWithoutSubsidiariesInput";
import { CompanyUpsertWithoutSubsidiariesInput } from "../inputs/CompanyUpsertWithoutSubsidiariesInput";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpdateOneWithoutSubsidiariesNestedInput", {})
export class CompanyUpdateOneWithoutSubsidiariesNestedInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutSubsidiariesInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutSubsidiariesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutSubsidiariesInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutSubsidiariesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutSubsidiariesInput, {
    nullable: true
  })
  upsert?: CompanyUpsertWithoutSubsidiariesInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  disconnect?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  delete?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateToOneWithWhereWithoutSubsidiariesInput, {
    nullable: true
  })
  update?: CompanyUpdateToOneWithWhereWithoutSubsidiariesInput | undefined;
}
