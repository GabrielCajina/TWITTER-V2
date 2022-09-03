import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations/auth";
import { User } from "../types/user";

const useLogin = () => {
  return useMutation<
    { login: { user: User } },
    { input: { email: string; password: string } }
  >(LOGIN);
};

export default useLogin;
