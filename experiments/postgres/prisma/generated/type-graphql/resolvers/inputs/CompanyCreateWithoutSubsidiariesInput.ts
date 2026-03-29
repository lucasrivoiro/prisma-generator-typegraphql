import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateNestedOneWithoutSubsidiariesInput } from "../inputs/CompanyCreateNestedOneWithoutSubsidiariesInput";

@TypeGraphQL.InputType("CompanyCreateWithoutSubsidiariesInput", {})
export class CompanyCreateWithoutSubsidiariesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

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
  logo?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  featured?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  deleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutSubsidiariesInput, {
    nullable: true
  })
  parent?: CompanyCreateNestedOneWithoutSubsidiariesInput | undefined;
}
