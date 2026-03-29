import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyScalarWhereInput } from "../inputs/CompanyScalarWhereInput";
import { CompanyUpdateManyMutationInput } from "../inputs/CompanyUpdateManyMutationInput";

@TypeGraphQL.InputType("CompanyUpdateManyWithWhereWithoutParentInput", {})
export class CompanyUpdateManyWithWhereWithoutParentInput {
  @TypeGraphQL.Field(_type => CompanyScalarWhereInput, {
    nullable: false
  })
  where!: CompanyScalarWhereInput;

  @TypeGraphQL.Field(_type => CompanyUpdateManyMutationInput, {
    nullable: false
  })
  data!: CompanyUpdateManyMutationInput;
}
