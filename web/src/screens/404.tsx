import { Button, Center, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Center display={"flex"} h="100vh" flexDirection="column">
      <Image w={300} h={300} src={"/not_found.svg"} />
      <Button as={NavLink} to="/">
        Go Home
      </Button>
    </Center>
  );
};

export default NotFound;
