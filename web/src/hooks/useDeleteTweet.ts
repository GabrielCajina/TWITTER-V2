import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_TWEET } from "../graphql/mutations/tweets";
import { GET_TWEETS } from "../graphql/queries/tweet.query";
import { Tweet } from "../types/tweet";

const useDeleteTweet = () => {
  return useMutation<boolean, { id: string }>(DELETE_TWEET, {
    update(cache, _, { variables }) {
      const tweets: Tweet[] =
        cache.readQuery<{ tweets: Tweet[] }>({ query: GET_TWEETS })?.tweets ??
        [];
      const newTweets = tweets.filter((tweet) => tweet.id !== variables!.id);
      cache.writeQuery({
        query: GET_TWEETS,
        data: { tweets: newTweets },
      });
    },
  });
};

export default useDeleteTweet;
