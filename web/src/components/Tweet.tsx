import { Avatar, Box, Flex, Text, Image, useToast } from "@chakra-ui/react";
import { AnnotationIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tweet as TweetType } from "../types/tweet";
import TweetOptions from "./TweetOptions";
import Icon from "./ui/Icon";

interface TweetProps {
  tweet: TweetType;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <Flex gap={3} borderBottom="1px solid gray" pb={3}>
      <Avatar />
      <Box>
        <Flex justifyContent={"space-between"} alignItems="center">
          <Text>{tweet.user.username}</Text>
          <TweetOptions tweet={tweet} />
        </Flex>
        <Text fontSize={"sm"}>{tweet.description}</Text>
        <Image
          onClick={() => {
            navigate(`/${tweet.id}`);
          }}
          mt={2}
          w="full"
          src={tweet.url}
          alt="user-image"
          rounded={"md"}
        />
        <Flex gap={3} mt={3}>
          <Icon variant="sm" flex={1} icon={AnnotationIcon} />
          <Icon
            variant="sm"
            flex={1}
            icon={ShareIcon}
            onClick={async () => {
              await navigator.clipboard.writeText(
                `${window.location.href}${tweet.id}`
              );

              toast({
                title: "Link Copied",
                status: "info",
              });
            }}
          />
          <Icon variant="sm" flex={1} icon={HeartIcon} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Tweet;
