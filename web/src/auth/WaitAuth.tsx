import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ME } from "../graphql/queries/user";
import useUser from "../hooks/store/useUser";
import { setUser } from "../store/slices/auth.slice";
import { User } from "../types/user";

const WaitAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const [meQuery] = useLazyQuery<{ me: User }>(ME);

  useEffect(() => {
    meQuery()
      .then(({ data }) => dispatch(setUser({ user: data!.me })))
      .catch(() => dispatch(setUser(null)));
  }, [dispatch, meQuery]);

  if (user === undefined) {
    return null;
  }
  return <>{children}</>;
};

export default WaitAuth;
