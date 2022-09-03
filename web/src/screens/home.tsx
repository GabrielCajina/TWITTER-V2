import { Box } from "@chakra-ui/react";
import { withAuth } from "../auth/withAuth";
import CreateTweetModal from "../components/CreateTweetModal";
import TweetForm from "../components/TweetForm";
import Tweets from "../components/Tweets";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <Box w="full" pb={7} px={4} borderRight="1px solid gray">
        <TweetForm />
        <Tweets />
      </Box>
      <CreateTweetModal />
    </Layout>
  );
};

export default withAuth(Home);
