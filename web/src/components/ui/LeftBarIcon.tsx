import { Flex, Icon as ChakraIcon, Text } from "@chakra-ui/react";
import React from "react";

interface LeftBarIconProps {
  text: string;
  icon: any;
}

const LeftBarIcon: React.FC<LeftBarIconProps> = ({ icon: Icon, text }) => {
  return (
    <Flex alignItems={"center"} gap={3} cursor="pointer">
      <ChakraIcon w={9} h={9}>
        <Icon />
      </ChakraIcon>
      <Text
        as="span"
        fontSize={"xl"}
        display={{ base: "none", lg: "inline-flex" }}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default LeftBarIcon;
