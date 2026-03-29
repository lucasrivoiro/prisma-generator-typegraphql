import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUpdateWithoutParentInput } from "../inputs/CompanyUpdateWithoutParentInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpdateWithWhereUniqueWithoutParentInput", {})
export class CompanyUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutParentInput, {
    nullable: false
  })
  data!: CompanyUpdateWithoutParentInput;
}
