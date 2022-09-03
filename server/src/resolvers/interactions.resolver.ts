import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { prisma } from "../database";
import { isAuth } from "../middlewares/auth.middleware";
import { Tweet } from "../objects/tweet.object";
import { MyContext } from "../types/MyContext";

@Resolver()
export class TweetInteracton {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async likeTweet(@Arg("id") id: string, @Ctx() { req }: MyContext) {
    const tweet = await prisma.tweet.findFirst({
      where: {
        id,
        user: {
          id: req.user.id,
        },
      },

      include: {
        user: true,
      },
    });

    if (!tweet) {
      throw new Error("no tweet");
    }

    return true;
  }

  @Mutation(() => Tweet)
  unlikeTweet() {}
}
