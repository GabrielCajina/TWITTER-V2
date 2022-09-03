import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

type TextInputProps = InputProps &
  TextareaProps & {
    label: string;
    textarea?: boolean;
  };

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  textarea = false,
  ...props
}) => {
  const Component = textarea ? Textarea : Input;
  const [field, meta] = useField({ name: name! });

  const error = meta.error && meta.touched;
  return (
    <FormControl isInvalid={!!meta.error}>
      <FormLabel>{label}</FormLabel>
      <Component {...field} {...props} />
      {error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};

export default TextInput;
