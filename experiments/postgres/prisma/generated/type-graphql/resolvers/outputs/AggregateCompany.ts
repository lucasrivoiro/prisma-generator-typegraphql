import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCountAggregate } from "../outputs/CompanyCountAggregate";
import { CompanyMaxAggregate } from "../outputs/CompanyMaxAggregate";
import { CompanyMinAggregate } from "../outputs/CompanyMinAggregate";

@TypeGraphQL.ObjectType("AggregateCompany", {})
export class AggregateCompany {
  @TypeGraphQL.Field(_type => CompanyCountAggregate, {
    nullable: true
  })
  _count!: CompanyCountAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMinAggregate, {
    nullable: true
  })
  _min!: CompanyMinAggregate | null;

  @TypeGraphQL.Field(_type => CompanyMaxAggregate, {
    nullable: true
  })
  _max!: CompanyMaxAggregate | null;
}
