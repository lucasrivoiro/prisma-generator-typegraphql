import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Company } from "../../../models/Company";
import { CompanyParentArgs } from "./args/CompanyParentArgs";
import { CompanySubsidiariesArgs } from "./args/CompanySubsidiariesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CompanyParentArgs) args: CompanyParentArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findUniqueOrThrow({
      where: {
        id: company.id,
      },
    }).parent({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Company], {
    nullable: false
  })
  async subsidiaries(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CompanySubsidiariesArgs) args: CompanySubsidiariesArgs): Promise<Company[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findUniqueOrThrow({
      where: {
        id: company.id,
      },
    }).subsidiaries({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
