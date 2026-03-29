import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCompanyArgs } from "./args/CreateManyAndReturnCompanyArgs";
import { Company } from "../../../models/Company";
import { CreateManyAndReturnCompany } from "../../outputs/CreateManyAndReturnCompany";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class CreateManyAndReturnCompanyResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCompany], {
    nullable: false
  })
  async createManyAndReturnCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnCompanyArgs) args: CreateManyAndReturnCompanyArgs): Promise<CreateManyAndReturnCompany[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
