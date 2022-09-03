import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from "@chakra-ui/react";
import React from "react";

interface IconProps extends ChakraIconProps {
  icon: any;
  variant?: "sm" | "normal";
}

const Icon: React.FC<IconProps> = ({
  icon: Icon,
  variant = "normal",
  ...props
}) => {
  return (
    <ChakraIcon
      {...props}
      w={variant === "normal" ? 9 : 6}
      h={variant === "normal" ? 9 : 6}
    >
      <Icon />
    </ChakraIcon>
  );
};

export default Icon;
