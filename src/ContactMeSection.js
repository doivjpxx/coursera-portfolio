import {
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Box,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSubmit } from "./useSubmit";

function ContactMeSection() {
  const { submit, response, isLoading } = useSubmit();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      submit(values);
      if (response.type === "success") {
        alert(`Thank you, ${values.name}!`);
        resetForm();
      }
    },
  });

  return (
    <Box
      id="contact-me"
      as="form"
      onSubmit={formik.handleSubmit}
      className="contact-me-section"
      padding="24"
    >
      <Heading as="h2" color="white" marginBottom="4">
        Contact Me
      </Heading>
      <FormControl
        marginBottom={4}
        isInvalid={formik.touched.name && formik.errors.name}
      >
        <label htmlFor="name">Name</label>
        <Input {...formik.getFieldProps("name")} placeholder="Name" />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>

      <FormControl
        marginBottom={4}
        isInvalid={formik.touched.email && formik.errors.email}
      >
        <label htmlFor="email">Email</label>
        <Input {...formik.getFieldProps("email")} placeholder="Email" />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl
        marginBottom={4}
        isInvalid={formik.touched.type && formik.errors.type}
      >
        <label htmlFor="type">Type of enquiry</label>
        <Select
          {...formik.getFieldProps("type")}
          placeholder="Select enquiry type"
        >
          <option value="Freelance">Freelance</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </Select>
        <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
      </FormControl>

      <FormControl
        marginBottom={4}
        isInvalid={formik.touched.comment && formik.errors.comment}
      >
        <label htmlFor="name">Your message</label>
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
