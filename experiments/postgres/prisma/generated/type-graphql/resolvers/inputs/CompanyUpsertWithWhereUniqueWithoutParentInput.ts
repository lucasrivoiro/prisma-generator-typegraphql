import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutParentInput } from "../inputs/CompanyCreateWithoutParentInput";
import { CompanyUpdateWithoutParentInput } from "../inputs/CompanyUpdateWithoutParentInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpsertWithWhereUniqueWithoutParentInput", {})
export class CompanyUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutParentInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutParentInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutParentInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutParentInput;
}
