import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyWhereInput } from "../inputs/CompanyWhereInput";

@TypeGraphQL.InputType("CompanyNullableScalarRelationFilter", {})
export class CompanyNullableScalarRelationFilter {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  is?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  isNot?: CompanyWhereInput | undefined;
}
