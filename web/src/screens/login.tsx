import { Center, Divider, Flex, Text, Link } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import useLogin from "../hooks/useLogin";
import { setUser } from "../store/slices/auth.slice";

interface LoginField {
  email: string;
  password: string;
}

const initialValues: LoginField = {
  email: "",
  password: "",
};

const Register = () => {
  const [login] = useLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onSubmit(
    input: LoginField,
    { setFieldError }: FormikHelpers<LoginField>
  ) {
    try {
      const response = await login({ variables: { input } });
      console.log(response);
      if (response) {
        dispatch(setUser({ user: response.data?.login.user! }));
        navigate("/");
      }
    } catch (error: any) {
      setFieldError("email", error.message);
    }
  }
  return (
    <Center display={"flex"} flexDir="column" h="100vh">
      <Text as="h2" fontSize={"4xl"} mb={5} fontWeight="bold">
        Login
      </Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Flex as={Form} flexDir="column" w={350}>
            <TextInput label="Email" name="email" placeholder="Email" />
            <TextInput
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
            />
            <Button type="submit" my={3}>
              Login
            </Button>
            <Flex alignItems={"center"} gap={4}>
              <Divider />
              Or
              <Divider />
            </Flex>

            <Link
              mt={3}
              as={NavLink}
              mx={4}
              textAlign={"center"}
              to="/register"
            >
              Register
            </Link>
          </Flex>
        )}
      </Formik>
    </Center>
  );
};

export default Register;
