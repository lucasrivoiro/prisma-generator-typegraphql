import * as TypeGraphQL from "type-graphql";

export enum CompanyScalarFieldEnum {
  id = "id",
  parent_id = "parent_id",
  name = "name",
  description = "description",
  founding_date = "founding_date",
  slug = "slug",
  logo = "logo",
  featured = "featured",
  deleted = "deleted",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
  name: "CompanyScalarFieldEnum",
  description: undefined,
});
