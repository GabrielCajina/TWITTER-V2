import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  LogoutIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/store/useUser";
import useLogout from "../hooks/useLogout";
import { setIsOpenModal } from "../store/slices/modal.slice";
import Icon from "./ui/Icon";
import LeftBarIcon from "./ui/LeftBarIcon";

const LeftBar = () => {
  const { user } = useUser();
  const [isMd] = useMediaQuery("(min-width:1200px)");
  const [logout] = useLogout();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Flex
      borderRight={"1px solid gray"}
      display={{ base: "none", md: "flex" }}
      p={{ base: 0, lg: 3 }}
      pt={4}
      pr={{ base: 0, lg: 2 }}
      flexDir={"column"}
      position="sticky"
      h="full"
      maxH={"100vh"}
      top={0}
    >
      <Image
        w={50}
        h={45}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
        alt="twitter-logo"
      />

      <Flex
        flexDir={"column"}
        gap={25}
        mt={35}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <LeftBarIcon text="Home" icon={HomeIcon} />
        <LeftBarIcon text="Explore" icon={HashtagIcon} />
        <LeftBarIcon text="Notifications" icon={BellIcon} />
        <LeftBarIcon text="Messages" icon={InboxIcon} />
        <LeftBarIcon text="Bookmark" icon={BookmarkIcon} />
        <LeftBarIcon text="Lists" icon={ClipboardListIcon} />
        <LeftBarIcon text="Profile" icon={UserIcon} />
        <LeftBarIcon text="More" icon={DotsHorizontalIcon} />
        {isMd ? (
          <Button
            onClick={() => dispatch(setIsOpenModal({ isOpen: true }))}
            rounded={"full"}
            bgColor="twitter.600"
            w={{ base: "min-content", lg: "full" }}
          >
            Tweet
          </Button>
        ) : (
          <Icon
            onClick={() => dispatch(setIsOpenModal({ isOpen: true }))}
            p={2}
            bgColor={"twitter.500"}
            rounded="full"
            icon={PaperAirplaneIcon}
          />
        )}
      </Flex>

      <Flex mt="auto" alignItems="center" py={3} gap={2} w="full">
        <Avatar />
        <Text display={{ base: "none", lg: "inline-flex" }} flexGrow={1}>
          {user!.username}
        </Text>
        <IconButton
          display={{ base: "none", lg: "inline-flex" }}
          rounded={"full"}
          aria-label="logout"
          icon={<Icon variant="sm" icon={LogoutIcon} />}
          onClick={async () => {
            const isLogout = await logout();
            if (isLogout) {
              navigate("/login");
            }
          }}
        />
      </Flex>
    </Flex>
  );
};

export default LeftBar;
