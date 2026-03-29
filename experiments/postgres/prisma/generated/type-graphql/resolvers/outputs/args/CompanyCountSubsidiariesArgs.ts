import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CompanyWhereInput } from "../../inputs/CompanyWhereInput";

@TypeGraphQL.ArgsType()
export class CompanyCountSubsidiariesArgs {
  @TypeGraphQL.Field(_type => CompanyWhereInput, {
    nullable: true
  })
  where?: CompanyWhereInput | undefined;
}
