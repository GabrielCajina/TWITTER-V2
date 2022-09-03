import { useQuery } from "@apollo/client";
import React from "react";
import { GET_TWEET } from "../graphql/mutations/tweets";
import { Tweet } from "../types/tweet";

const useTweet = (id: string) => {
  return useQuery<{ tweet: Tweet }, { id: string }>(GET_TWEET, {
    variables: { id },
  });
};

export default useTweet;
