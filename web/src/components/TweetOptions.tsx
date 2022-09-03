import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import {
  DotsVerticalIcon,
  ExternalLinkIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React from "react";
import useUser from "../hooks/store/useUser";
import useDeleteTweet from "../hooks/useDeleteTweet";
import { Tweet } from "../types/tweet";
import Icon from "./ui/Icon";

const TweetOptions: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
  const { user } = useUser();
  const [deleteTweet] = useDeleteTweet();

  const toast = useToast();

  if (user!.id !== tweet.user.id) {
    return null;
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        rounded="md"
        aria-label="Options"
        icon={<Icon variant="sm" icon={DotsVerticalIcon} />}
        variant="outline"
      />
      <MenuList>
        <MenuItem
          icon={<Icon variant="sm" icon={TrashIcon} />}
          onClick={async () => {
            const response = await deleteTweet({ variables: { id: tweet.id } });
            if (response.data) {
              toast({
                status: "success",
                title: "Tweet Deleted",
              });
            }
          }}
        >
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TweetOptions;
