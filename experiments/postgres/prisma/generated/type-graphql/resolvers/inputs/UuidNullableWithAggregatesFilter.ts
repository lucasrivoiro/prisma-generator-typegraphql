import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedStringNullableFilter } from "../inputs/NestedStringNullableFilter";
import { NestedUuidNullableWithAggregatesFilter } from "../inputs/NestedUuidNullableWithAggregatesFilter";
import { QueryMode } from "../../enums/QueryMode";

@TypeGraphQL.InputType("UuidNullableWithAggregatesFilter", {})
export class UuidNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  equals?: string | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  in?: string[] | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  notIn?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lte?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gt?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  gte?: string | undefined;

  @TypeGraphQL.Field(_type => QueryMode, {
    nullable: true
  })
  mode?: "default" | "insensitive" | undefined;

  @TypeGraphQL.Field(_type => NestedUuidNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedUuidNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedStringNullableFilter, {
    nullable: true
  })
  _min?: NestedStringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedStringNullableFilter, {
    nullable: true
  })
  _max?: NestedStringNullableFilter | undefined;
}
