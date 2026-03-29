import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client/client";
import { DecimalJSScalar } from "../scalars";
import { CompanyCount } from "../resolvers/outputs/CompanyCount";

@TypeGraphQL.ObjectType("Company", {})
export class Company {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parent_id?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  founding_date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  featured!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  deleted!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  parent?: Company | null;

  subsidiaries?: Company[];

  @TypeGraphQL.Field(_type => CompanyCount, {
    nullable: true
  })
  _count?: CompanyCount | null;
}
