import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export abstract class RegisterInput {
  @Field()
  username!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
export abstract class LoginInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  password!: string;
}
