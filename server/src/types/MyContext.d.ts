import { Request, Response } from "express";
import { User } from "../objects/user.type";

export interface MyContext {
  res: Response;
  req: Request & { user: User };
}
