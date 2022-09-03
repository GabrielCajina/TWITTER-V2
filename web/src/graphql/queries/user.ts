import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      id
      email
      username
    }
  }
`;

export const SUGGESTIONS = gql`
  query suggestions {
    suggestions {
      username
      id
    }
  }
`;
