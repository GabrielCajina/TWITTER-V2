import {
  Button,
  Center,
  CircularProgress,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import Error from "../components/ui/Error";
import useTweet from "../hooks/useTweet";

const Tweet = () => {
  const params = useParams<{ id: string }>();
  const { data, loading, error } = useTweet(params.id!);

  if (loading) {
    return (
      <Center h="100vh">
        <CircularProgress />
      </Center>
    );
  }

  if (error) {
    return (
      <Flex h="100vh">
        <Error />
      </Flex>
    );
  }
  return (
    <Flex
      h="100vh"
      maxW={"5xl"}
      margin="auto"
      flexDirection={"column"}
      py={9}
      px={4}
    >
      <Button as={NavLink} to="/" w="min-content" mb={4}>
        Home
      </Button>
      <Text fontWeight="bold" fontSize={24}>
        {data?.tweet.title}
      </Text>

      <Text fontSize={14} mt={8}>
        {data?.tweet.description}
      </Text>

      <Image
        my={6}
        src={data?.tweet.url}
        h={{ base: 400, md: 500 }}
        w={{ base: "100%", md: 800 }}
        objectFit="cover"
        rounded={"md"}
      />
      <CommentBox />
    </Flex>
  );
};

export default Tweet;
