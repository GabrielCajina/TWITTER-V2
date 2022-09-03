import { IsUrl } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export abstract class TweetInput {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  @IsUrl()
  url!: string;
}
