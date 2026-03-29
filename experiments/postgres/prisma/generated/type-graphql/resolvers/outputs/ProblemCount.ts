import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client/client";
import { DecimalJSScalar } from "../../scalars";
import { ProblemCountLikedByArgs } from "./args/ProblemCountLikedByArgs";

@TypeGraphQL.ObjectType("ProblemCount", {})
export class ProblemCount {
  likedBy!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likedBy",
    nullable: false
  })
  getLikedBy(@TypeGraphQL.Root() root: ProblemCount, @TypeGraphQL.Args(() => ProblemCountLikedByArgs) args: ProblemCountLikedByArgs): number {
    return root.likedBy;
  }
}
