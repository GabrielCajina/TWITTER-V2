import { ApolloError, AuthenticationError } from "apollo-server-express";
import { prisma } from "../database";
import { LoginInput, RegisterInput } from "../inputs/auth.input";
import { User } from "../objects/user.type";
import { createAccessToken } from "./token.service";
import argon from "argon2";

export const registerUser = async (
  data: RegisterInput
): Promise<{ user: User; token: string }> => {
  try {
    const isValid = await prisma.user.findFirst({
      where: { OR: [{ email: data.email }, { username: data.username }] },
    });

    if (isValid) {
      throw new ApolloError("user alredy exist");
    }

    const user = await prisma.user.create({
      data: { ...data, password: await argon.hash(data.password) },
      select: { id: true, email: true, username: true },
    });

    return { user, token: await createAccessToken({ user: user.id }) };
  } catch (error: any) {
    throw new ApolloError(error.message);
  }
};

export const loginUser = async (
  data: LoginInput
): Promise<{ user: User; token: string }> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new AuthenticationError("user not exist");
    }

    const isValid = await argon.verify(user.password, data.password);

    if (!isValid) {
      throw new AuthenticationError("bad login");
    }

    return { user, token: await createAccessToken({ user: user.id }) };
  } catch (error: any) {
    throw new ApolloError(error.message);
  }
};
