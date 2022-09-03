import { useMutation } from "@apollo/client";
import React from "react";
import { LOGOUT } from "../graphql/mutations/auth";

const useLogout = () => {
  return useMutation<boolean>(LOGOUT);
};

export default useLogout;
