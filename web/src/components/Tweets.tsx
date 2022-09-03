import { CircularProgress, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useTweets from "../hooks/useTweets";
import Tweet from "./Tweet";

const Tweets = () => {
  const { data, loading, error } = useTweets();

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Text>Something Went Wrong</Text>;
  }
  return (
    <Flex gap={3} flexDirection="column">
      {data!.tweets.map((tweet, idx) => (
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </Flex>
  );
};

export default Tweets;
