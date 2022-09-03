import { gql } from "@apollo/client";

export const CREATE_TWEET = gql`
  mutation createTweet($input: TweetInput!) {
    createTweet(input: $input) {
      description
      title
      id
      user {
        id
        username
      }
    }
  }
`;

export const DELETE_TWEET = gql`
  mutation deleteTweet($id: String!) {
    deleteTweet(id: $id)
  }
`;

export const GET_TWEET = gql`
  query getTweet($id: String!) {
    tweet(id: $id) {
      description
      id
      title
      url
      user {
        id
        username
      }
    }
  }
`;
