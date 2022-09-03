import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export abstract class User {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  username!: string;

  @Field(() => String)
  email!: string;
}
