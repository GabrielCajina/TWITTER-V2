import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UnauthorizedError,
  UseMiddleware,
} from "type-graphql";
import { prisma } from "../database";
import { TweetInput } from "../inputs/tweet.input";
import { isAuth } from "../middlewares/auth.middleware";
import { Tweet } from "../objects/tweet.object";
import { MyContext } from "../types/MyContext";

@Resolver()
export class TweetResolver {
  @Mutation(() => Tweet)
  @UseMiddleware(isAuth)
  async createTweet(
    @Arg("input", () => TweetInput) input: TweetInput,
    @Ctx() { req }: MyContext
  ): Promise<Tweet> {
    const tweet = await prisma.tweet.create({
      data: { ...input, userId: req.user.id },
      include: { user: true },
    });

    return tweet;
  }

  @Query(() => [Tweet])
  @UseMiddleware(isAuth)
  async tweets(@Ctx() { req }: MyContext) {
    const tweets = await prisma.tweet.findMany({
      include: { user: true },
    });

    return tweets;
  }

  @Query(() => [Tweet])
  @UseMiddleware(isAuth)
  async getTweetSuggestions(@Ctx() { req }: MyContext) {
    const tweets = await prisma.tweet.findMany({
      where: { userId: { not: req.user.id } },
      include: { user: true },
    });
    return tweets;
  }

  @Query(() => Tweet)
  async tweet(@Arg("id") id: string): Promise<Tweet> {
    const tweet = await prisma.tweet.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!tweet) {
      throw new Error("tweet not exist");
    }
    return tweet;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteTweet(
    @Arg("id") id: string,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    const tweet = await prisma.tweet.findFirst({
      where: { userId: req.user.id, id },
      include: { user: true },
    });

    if (!tweet) {
      throw new UnauthorizedError();
    }
    await prisma.tweet.delete({ where: { id: tweet.id } });

    return true;
  }

  @Mutation(() => Tweet)
  @UseMiddleware(isAuth)
  async updateTweet(
    @Arg("id") id: string,
    @Arg("input") input: TweetInput,
    @Ctx() { req }: MyContext
  ) {
    const tweet = await prisma.tweet.findFirst({
      where: { id, userId: req.user.id },
    });

    if (!tweet) {
      throw new Error("tweet not exist");
    }
    await prisma.tweet.update({
      where: { id },
      data: input,
      include: { user: true },
    });

    return tweet;
  }
}
