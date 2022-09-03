import { gql } from "@apollo/client";

export const GET_TWEETS = gql`
  query tweets {
    tweets {
      url
      id
      title
      description
      user {
        id
        username
      }
    }
  }
`;

export const GET_TRENDS = gql`
  query getTrends {
    getTweetSuggestions {
      id
      description
      title
    }
  }
`;
