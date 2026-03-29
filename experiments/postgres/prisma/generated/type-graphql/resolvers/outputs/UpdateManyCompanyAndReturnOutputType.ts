import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { UpdateManyCompanyAndReturnOutputTypeParentArgs } from "./args/UpdateManyCompanyAndReturnOutputTypeParentArgs";
import { Company } from "../../models/Company";

@TypeGraphQL.ObjectType("UpdateManyCompanyAndReturnOutputType", {})
export class UpdateManyCompanyAndReturnOutputType {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parent_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

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
  logo!: string | null;

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

  parent!: Company | null;

  @TypeGraphQL.Field(_type => Company, {
    name: "parent",
    nullable: true
  })
  getParent(@TypeGraphQL.Root() root: UpdateManyCompanyAndReturnOutputType, @TypeGraphQL.Args(() => UpdateManyCompanyAndReturnOutputTypeParentArgs) args: UpdateManyCompanyAndReturnOutputTypeParentArgs): Company | null {
    return root.parent;
  }
}
