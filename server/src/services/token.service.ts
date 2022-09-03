import jwt from "jsonwebtoken";
export const createAccessToken = async <T extends { user: string }>(
  payload: T
) => {
  return jwt.sign(payload, "123");
};
