import {
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Box,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSubmit } from "./useSubmit";

function ContactMeSection() {
  const { submit, response, isLoading } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      submit(values);
      if (response.type === "success") {
        alert(`Thank you, ${values.firstName}!`);
        resetForm();
      }
    },
  });

  return (
    <Box as="form" onSubmit={formik.handleSubmit}>
      <FormControl
        isInvalid={formik.touched.firstName && formik.errors.firstName}
      >
        <Input
          {...formik.getFieldProps("firstName")}
          placeholder="First Name"
        />
        <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.email && formik.errors.email}>
        <Input {...formik.getFieldProps("email")} placeholder="Email" />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
        <Textarea {...formik.getFieldProps("comment")} placeholder="Comment" />
        <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
      </FormControl>

      <Button type="submit" isLoading={isLoading}>
        Submit
      </Button>
    </Box>
  );
}

export default ContactMeSection;
