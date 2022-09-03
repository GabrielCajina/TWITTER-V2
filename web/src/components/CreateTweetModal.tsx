import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import useModal from "../hooks/store/useModal";
import useCreateTweet from "../hooks/useCreateTweet";
import { setIsOpenModal } from "../store/slices/modal.slice";
import TextInput from "./ui/TextInput";

interface TweetField {
  title: string;
  description: string;
  url: string;
}

const initalValues: TweetField = {
  title: "",
  description: "",
  url: "",
};

const CreateTweetModal = () => {
  const { isOpen } = useModal();
  const dispatch = useDispatch();
  const [createTweet] = useCreateTweet();
  const toast = useToast();

  const onSubmit = async (values: TweetField) => {
    console.log(values);
    try {
      const response = await createTweet({ variables: { input: values } });

      if (response) {
        handleClose();
        toast({
          status: "success",
          title: "Tweet Created",
          position: "top",
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  function handleClose() {
    dispatch(setIsOpenModal({ isOpen: false }));
  }
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={4}>
          <Formik initialValues={initalValues} onSubmit={onSubmit}>
            <Flex as={Form} flexDirection="column" gap={2}>
              <TextInput name="title" placeholder="Title" label="Title" />
              <TextInput name="url" placeholder="Url" label="Url" />
              <TextInput
                resize={"none"}
                textarea
                name="description"
                placeholder="Description"
                label="Description"
              />
              <Button type="submit" mt={4} bgColor="twitter.500" ml="auto">
                Create
              </Button>
            </Flex>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateTweetModal;
