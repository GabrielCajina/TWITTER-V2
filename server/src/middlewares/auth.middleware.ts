import { AuthenticationError } from "apollo-server-express";
import { JwtPayload } from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";
import jwt from "jsonwebtoken";
import { prisma } from "../database";

export type AuthPayload = JwtPayload & { user: string };

export const isAuth: MiddlewareFn<MyContext> = async (
  { context: { req }, info },
  next
) => {
  const token = req.cookies.jid;

  if (!token) {
    throw new AuthenticationError("No Token");
  }

  let payload: AuthPayload;

  try {
    payload = jwt.verify(token, "123") as AuthPayload;
  } catch (error: any) {
    throw new AuthenticationError("Invalid Token");
  }
  const user = await prisma.user.findUnique({
    where: { id: payload.user },
    select: { password: false, username: true, id: true, email: true },
  });

  if (!user) {
    throw new AuthenticationError("Invalid User");
  }
  req.user = user;

  await next();
};
