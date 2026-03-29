import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutParentInput } from "../inputs/CompanyCreateWithoutParentInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateOrConnectWithoutParentInput", {})
export class CompanyCreateOrConnectWithoutParentInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutParentInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutParentInput;
}
