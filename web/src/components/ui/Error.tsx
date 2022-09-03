import { Flex, Image, Text } from "@chakra-ui/react";

import React from "react";

const Error = () => {
  return (
    <Flex
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
    >
      <Image w={200} h={200} src="/error.svg" />
      <Text fontSize={"2xl"} fontWeight="bold">
        Something Went Wrong...
      </Text>
    </Flex>
  );
};

export default Error;
