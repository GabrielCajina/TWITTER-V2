import { Button, Center, Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import TextInput from "../components/ui/TextInput";
import useTweet from "../hooks/useTweet";

const EditTweet = () => {
  const { id } = useParams();
  const { data, loading, error } = useTweet(id!);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }
  const {
    tweet: { description, title, url },
  } = data!;

  return (
    <Center h="100vh">
      <Formik initialValues={{ title, description, url }} onSubmit={() => {}}>
        {() => (
          <Flex as={Form} flexDirection={"column"} gap={5} w={400}>
            <TextInput placeholder="Title" label="Title" name="title" />
            <TextInput
              placeholder="Description"
              label="Description"
              name="description"
            />
            <TextInput placeholder="Url" label="Url" name="url" />
            <Button type="submit">Edit</Button>
          </Flex>
        )}
      </Formik>
    </Center>
  );
};

export default EditTweet;
