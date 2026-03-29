import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CompanyListRelationFilter } from "../inputs/CompanyListRelationFilter";
import { CompanyNullableScalarRelationFilter } from "../inputs/CompanyNullableScalarRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@TypeGraphQL.InputType("CompanyWhereInput", {})
export class CompanyWhereInput {
  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  AND?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  OR?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyWhereInput], {
    nullable: true
  })
  NOT?: CompanyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @TypeGraphQL.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  parent_id?: UuidNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  founding_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  logo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  featured?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  deleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CompanyNullableScalarRelationFilter, {
    nullable: true
  })
  parent?: CompanyNullableScalarRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CompanyListRelationFilter, {
    nullable: true
  })
  subsidiaries?: CompanyListRelationFilter | undefined;
}
