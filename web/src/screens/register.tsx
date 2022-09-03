import { Center, Divider, Flex, Text, Link } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import useRegister from "../hooks/useRegister";
import { setUser } from "../store/slices/auth.slice";

interface RegisterField {
  email: string;
  username: string;
  password: string;
}

const initialValues: RegisterField = {
  email: "",
  password: "",
  username: "",
};

const Register = () => {
  const [register] = useRegister();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onSubmit(
    input: RegisterField,
    { setFieldError }: FormikHelpers<RegisterField>
  ) {
    try {
      const response = await register({ variables: { input } });
      if (response) {
        dispatch(setUser({ user: response.data?.register.user! }));
        navigate("/");
      }
    } catch (error: any) {
      setFieldError("username", error.message);
    }
  }
  return (
    <Center display={"flex"} flexDir="column" h="100vh">
      <Text as="h2" fontSize={"4xl"} mb={5} fontWeight="bold">
        Register
      </Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Flex as={Form} flexDir="column" gap={3} w={350}>
            <TextInput
              label="Username"
              name="username"
              placeholder="Username"
            />
            <TextInput label="Email" name="email" placeholder="Email" />
            <TextInput
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
            />
            <Button type="submit">Register</Button>
            <Flex alignItems={"center"} gap={4}>
              <Divider />
              Or
              <Divider />
            </Flex>

            <Link as={NavLink} mx={4} textAlign={"center"} to="/login">
              Login
            </Link>
          </Flex>
        )}
      </Formik>
    </Center>
  );
};

export default Register;
