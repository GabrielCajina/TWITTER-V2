import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      user {
        id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
