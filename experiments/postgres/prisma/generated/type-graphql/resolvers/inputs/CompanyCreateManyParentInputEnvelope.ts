import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateManyParentInput } from "../inputs/CompanyCreateManyParentInput";

@TypeGraphQL.InputType("CompanyCreateManyParentInputEnvelope", {})
export class CompanyCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [CompanyCreateManyParentInput], {
    nullable: false
  })
  data!: CompanyCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
