import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const UserCard: React.FC<{ user: any }> = ({ user }) => {
  return (
    <Flex alignItems={"center"} gap={3}>
      <Avatar />
      <Text>{user.username}</Text>
    </Flex>
  );
};

export default UserCard;
