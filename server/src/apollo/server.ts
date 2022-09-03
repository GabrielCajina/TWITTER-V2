import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import {
  AuthenticationResolver,
  TweetResolver,
  UserResolver,
} from "../resolvers";
import { MyContext } from "../types/MyContext";

export const createServer = async () => {
  return new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthenticationResolver, TweetResolver, UserResolver],
    }),
    context: (props: MyContext): MyContext => props,
  });
};
