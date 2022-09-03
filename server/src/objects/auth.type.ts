import { Field, ObjectType } from "type-graphql";
import { User } from "./user.type";

@ObjectType()
export abstract class Auth {
  @Field(() => User)
  user!: User;
}
