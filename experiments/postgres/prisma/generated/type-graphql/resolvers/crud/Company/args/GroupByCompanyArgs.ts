import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyOrderByWithAggregationInput } from "../../../inputs/CompanyOrderByWithAggregationInput";
import { CompanyScalarWhereWithAggregatesInput } from "../../../inputs/CompanyScalarWhereWithAggregatesInput";
import { CompanyWhereInput } from "../../../inputs/CompanyWhereInput";
import { CompanyScalarFieldEnum } from "../../../../enums/CompanyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCompanyArgs {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CompanyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CompanyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompanyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "parent_id" | "name" | "description" | "founding_date" | "slug" | "logo" | "featured" | "deleted" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => CompanyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CompanyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
