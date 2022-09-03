import { Flex, IconButton, Input } from "@chakra-ui/react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import React from "react";
import Icon from "./ui/Icon";

const CommentBox = () => {
  return (
    <Flex>
      <Input placeholder="Add Comment" />
      <IconButton
        ml={3}
        aria-label="add-comment"
        icon={<Icon variant="sm" icon={PaperAirplaneIcon} />}
      />
    </Flex>
  );
};

export default CommentBox;
