import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../hooks/store/useUser";

export function withAuth<T>(Component: React.FC<T>) {
  return (props: T) => {
    return useUser().user ? <Component {...props} /> : <Navigate to="/login" />;
  };
}
