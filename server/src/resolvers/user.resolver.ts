import { Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { prisma } from "../database";
import { isAuth } from "../middlewares/auth.middleware";
import { User } from "../objects/user.type";
import { MyContext } from "../types/MyContext";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  @UseMiddleware(isAuth)
  async suggestions(@Ctx() { req }: MyContext) {
    return prisma.user.findMany({
      where: { id: { not: req.user.id } },
      take: 3,
    });
  }
}
