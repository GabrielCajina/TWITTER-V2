import { gql, useMutation } from "@apollo/client";
import { CREATE_TWEET } from "../graphql/mutations/tweets";
import { Tweet } from "../types/tweet";

interface UseCreateTweetVariables {
  input: {
    description: string;
    title: string;
    url: string;
  };
}

const useCreateTweet = () => {
  return useMutation<{ createTweet: Tweet }, UseCreateTweetVariables>(
    CREATE_TWEET,
    {
      update: (cache, { data }) => {
        cache.modify({
          fields: {
            tweets(tweets = []) {
              const newTweetRef = cache.writeFragment({
                data: data?.createTweet,
                fragment: gql`
                  fragment NewTweet on Tweet {
                    id
                  }
                `,
              });
              return [newTweetRef, ...tweets];
            },
          },
        });
      },
    }
  );
};

export default useCreateTweet;
