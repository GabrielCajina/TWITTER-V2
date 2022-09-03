import { Avatar, Box, Button, Flex, Input } from "@chakra-ui/react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { setIsOpenModal } from "../store/slices/modal.slice";
import Icon from "./ui/Icon";

const TweetForm = () => {
  const dispatch = useDispatch();
  const handleCreateTweet = () => {
    dispatch(setIsOpenModal({ isOpen: true }));
  };
  return (
    <Flex w={"full"} py={3} mb={3} gap={4} borderBottom="1px solid gray">
      <Avatar />
      <Box w="full">
        <Input placeholder="Whats happening ?" />
        <Flex justifyContent={"space-between"} mt={3}>
          <Flex gap={4} alignItems="center">
            <Icon variant="sm" icon={PhotographIcon} />
            <Icon variant="sm" icon={EmojiHappyIcon} />
            <Icon variant="sm" icon={CalendarIcon} />
          </Flex>
          <Button
            bgColor={"twitter.500"}
            rounded="full"
            onClick={handleCreateTweet}
          >
            Tweet
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default TweetForm;
