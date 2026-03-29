import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCompanyArgs } from "./args/AggregateCompanyArgs";
import { CreateManyAndReturnCompanyArgs } from "./args/CreateManyAndReturnCompanyArgs";
import { CreateManyCompanyArgs } from "./args/CreateManyCompanyArgs";
import { CreateOneCompanyArgs } from "./args/CreateOneCompanyArgs";
import { DeleteManyCompanyArgs } from "./args/DeleteManyCompanyArgs";
import { DeleteOneCompanyArgs } from "./args/DeleteOneCompanyArgs";
import { FindFirstCompanyArgs } from "./args/FindFirstCompanyArgs";
import { FindFirstCompanyOrThrowArgs } from "./args/FindFirstCompanyOrThrowArgs";
import { FindManyCompanyArgs } from "./args/FindManyCompanyArgs";
import { FindUniqueCompanyArgs } from "./args/FindUniqueCompanyArgs";
import { FindUniqueCompanyOrThrowArgs } from "./args/FindUniqueCompanyOrThrowArgs";
import { GroupByCompanyArgs } from "./args/GroupByCompanyArgs";
import { UpdateManyCompanyArgs } from "./args/UpdateManyCompanyArgs";
import { UpdateOneCompanyArgs } from "./args/UpdateOneCompanyArgs";
import { UpsertOneCompanyArgs } from "./args/UpsertOneCompanyArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Company } from "../../../models/Company";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCompany } from "../../outputs/AggregateCompany";
import { CompanyGroupBy } from "../../outputs/CompanyGroupBy";
import { CreateManyAndReturnCompany } from "../../outputs/CreateManyAndReturnCompany";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCompany, {
    nullable: false
  })
  async aggregateCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => AggregateCompanyArgs) args: AggregateCompanyArgs): Promise<AggregateCompany> {
    return getPrismaFromContext(ctx).company.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyCompanyArgs) args: CreateManyCompanyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false
  })
  async createOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateOneCompanyArgs) args: CreateOneCompanyArgs): Promise<Company> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteManyCompanyArgs) args: DeleteManyCompanyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true
  })
  async deleteOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => DeleteOneCompanyArgs) args: DeleteOneCompanyArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Company, {
    nullable: true
  })
  async findFirstCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstCompanyArgs) args: FindFirstCompanyArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Company, {
    nullable: true
  })
  async findFirstCompanyOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindFirstCompanyOrThrowArgs) args: FindFirstCompanyOrThrowArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Company], {
    nullable: false
  })
  async companies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindManyCompanyArgs) args: FindManyCompanyArgs): Promise<Company[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Company, {
    nullable: true
  })
  async company(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueCompanyArgs) args: FindUniqueCompanyArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Company, {
    nullable: true
  })
  async getCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => FindUniqueCompanyOrThrowArgs) args: FindUniqueCompanyOrThrowArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CompanyGroupBy], {
    nullable: false
  })
  async groupByCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => GroupByCompanyArgs) args: GroupByCompanyArgs): Promise<CompanyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateManyCompanyArgs) args: UpdateManyCompanyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: true
  })
  async updateOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpdateOneCompanyArgs) args: UpdateOneCompanyArgs): Promise<Company | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Company, {
    nullable: false
  })
  async upsertOneCompany(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => UpsertOneCompanyArgs) args: UpsertOneCompanyArgs): Promise<Company> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).company.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
