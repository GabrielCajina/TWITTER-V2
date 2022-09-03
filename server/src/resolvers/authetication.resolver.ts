import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { LoginInput, RegisterInput } from "../inputs/auth.input";
import { isAuth } from "../middlewares/auth.middleware";
import { Auth } from "../objects/auth.type";
import { User } from "../objects/user.type";
import { loginUser, registerUser } from "../services/auth.service";
import { MyContext } from "../types/MyContext";

@Resolver()
export class AuthenticationResolver {
  @Query(() => User)
  @UseMiddleware(isAuth)
  me(@Ctx() { req }: MyContext): User {
    return req.user;
  }

  @Mutation(() => Auth)
  async register(
    @Arg("input") input: RegisterInput,
    @Ctx() { res }: MyContext
  ): Promise<Auth> {
    const { token, user } = await registerUser(input);
    res.cookie("jid", token);
    return { user };
  }

  @Mutation(() => Auth)
  async login(
    @Arg("input") input: LoginInput,
    @Ctx() { res }: MyContext
  ): Promise<Auth> {
    const { token, user } = await loginUser(input);
    res.cookie("jid", token);
    return { user };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async logout(@Ctx() { res }: MyContext): Promise<boolean> {
    res.clearCookie("jid");
    return true;
  }
}
