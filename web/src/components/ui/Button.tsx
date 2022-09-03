import React from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};

export default Button;
