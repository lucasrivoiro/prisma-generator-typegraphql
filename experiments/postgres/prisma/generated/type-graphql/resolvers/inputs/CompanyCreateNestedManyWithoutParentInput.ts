import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateManyParentInputEnvelope } from "../inputs/CompanyCreateManyParentInputEnvelope";
import { CompanyCreateOrConnectWithoutParentInput } from "../inputs/CompanyCreateOrConnectWithoutParentInput";
import { CompanyCreateWithoutParentInput } from "../inputs/CompanyCreateWithoutParentInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateNestedManyWithoutParentInput", {})
export class CompanyCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutParentInput], {
    nullable: true
  })
  create?: CompanyCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: CompanyCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput[] | undefined;
}
