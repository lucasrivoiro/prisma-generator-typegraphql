import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateManyParentInputEnvelope } from "../inputs/CompanyCreateManyParentInputEnvelope";
import { CompanyCreateOrConnectWithoutParentInput } from "../inputs/CompanyCreateOrConnectWithoutParentInput";
import { CompanyCreateWithoutParentInput } from "../inputs/CompanyCreateWithoutParentInput";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyWithWhereWithoutParentInput } from "../inputs/CompanyUpdateManyWithWhereWithoutParentInput";
import { CompanyUpdateWithWhereUniqueWithoutParentInput } from "../inputs/CompanyUpdateWithWhereUniqueWithoutParentInput";
import { CompanyUpsertWithWhereUniqueWithoutParentInput } from "../inputs/CompanyUpsertWithWhereUniqueWithoutParentInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpdateManyWithoutParentNestedInput", {})
export class CompanyUpdateManyWithoutParentNestedInput {
  @TypeGraphQL.Field(_type => [CompanyCreateWithoutParentInput], {
    nullable: true
  })
  create?: CompanyCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: CompanyUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: CompanyCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  set?: CompanyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CompanyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  delete?: CompanyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereUniqueInput], {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: CompanyUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: CompanyUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CompanyScalarWhereInput[] | undefined;
}
