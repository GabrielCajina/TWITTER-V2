import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/mutations/auth";
import { User } from "../types/user";

interface UseRegisterProps {
  register: {
    user: User;
  };
}
interface UseRegisterVariables {
  input: {
    email: string;
    password: string;
    username: string;
  };
}

const useRegister = () => {
  return useMutation<UseRegisterProps, UseRegisterVariables>(REGISTER);
};

export default useRegister;
