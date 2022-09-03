import { Field, ObjectType } from "type-graphql";
import { User } from "./user.type";

@ObjectType()
export abstract class Tweet {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  url!: string;

  @Field(() => User)
  user!: User;
}
