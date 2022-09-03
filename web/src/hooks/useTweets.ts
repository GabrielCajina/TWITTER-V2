import { useQuery } from "@apollo/client";
import { GET_TWEETS } from "../graphql/queries/tweet.query";
import { Tweet } from "../types/tweet";

const useTweets = () => {
  return useQuery<{ tweets: Tweet[] }>(GET_TWEETS);
};

export default useTweets;
