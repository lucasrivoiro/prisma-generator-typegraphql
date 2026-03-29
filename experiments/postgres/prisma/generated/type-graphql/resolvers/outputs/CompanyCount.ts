import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCountSubsidiariesArgs } from "./args/CompanyCountSubsidiariesArgs";

@TypeGraphQL.ObjectType("CompanyCount", {})
export class CompanyCount {
  subsidiaries!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "subsidiaries",
    nullable: false
  })
  getSubsidiaries(@TypeGraphQL.Root() root: CompanyCount, @TypeGraphQL.Args(() => CompanyCountSubsidiariesArgs) args: CompanyCountSubsidiariesArgs): number {
    return root.subsidiaries;
  }
}
