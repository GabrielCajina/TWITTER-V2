import { useQuery } from "@apollo/client";
import {
  Box,
  CircularProgress,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@heroicons/react/outline";
import { GET_TRENDS } from "../graphql/queries/tweet.query";
import { SUGGESTIONS } from "../graphql/queries/user";
import { Tweet } from "../types/tweet";
import { User } from "../types/user";
import UserCard from "./UserCard";

const RightBar = () => {
  const { data, loading } = useQuery<{ suggestions: User[] }>(SUGGESTIONS);
  const { data: tweets, loading: fetching } = useQuery<{
    getTweetSuggestions: Tweet[];
  }>(GET_TRENDS);

  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      borderLeft={"1px solid gray"}
      flexDir={"column"}
      position="sticky"
      h="full"
      maxH={"100vh"}
      top={0}
      p={2}
      pl={3}
    >
      <InputGroup size="md">
        <InputLeftAddon
          children={
            <Icon>
              <SearchIcon />
            </Icon>
          }
        />
        <Input pr="4.5rem" placeholder="Search Tweet" />
      </InputGroup>

      <Box h={340} bgColor="gray.700" mt={7} rounded="md" p={2}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Trends for you
        </Text>
        {fetching ? (
          <CircularProgress />
        ) : (
          tweets!.getTweetSuggestions.map((tweet) => (
            <Box
              p={2}
              bgColor="gray.600"
              mt={3}
              rounded="md"
              key={tweet.id}
              h={55}
            >
              <Text fontSize={"md"}>#{tweet.title}</Text>
              <Text fontSize={"sm"}>{tweet.description.substring(1, 6)}</Text>
            </Box>
          ))
        )}
      </Box>

      <Flex
        h={300}
        bgColor="gray.700"
        mt={7}
        rounded="md"
        p={2}
        gap={5}
        flexDirection="column"
      >
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Who to Follow
        </Text>
        {loading ? (
          <CircularProgress />
        ) : (
          data!.suggestions.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default RightBar;
