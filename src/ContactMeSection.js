import {
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Text,
  Box,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSubmit } from "./useSubmit";
import { useAlertContext } from "./alertContext";
import { useEffect } from "react";

function SuccessPopup({ title, msg }) {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      padding="8"
      background="green"
      borderRadius="lg"
      boxShadow="md"
      zIndex="1000"
    >
      <Heading as="h3">{title}</Heading>
      <Text>{msg}</Text>
    </Box>
  );
}

function FailPopup({ title, msg }) {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      padding="8"
      background="red"
      borderRadius="lg"
      boxShadow="md"
      zIndex="1000"
    >
      <Heading as="h3">{title}</Heading>
      <Text>{msg}</Text>
    </Box>
  );
}

function ContactMeSection() {
  const { submit, isLoading } = useSubmit();
  const { onOpen, data } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      type: "freelance",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const response = await submit(values);

      if (response.type === "success") {
        onOpen({
          name: values.name,
          title: "Success!",
          description: `Thank you, ${values.firstName}! Your form has been submitted.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        resetForm();
      } else {
        onOpen({
          name: values.name,
          title: "Error",
          description:
            "There was an issue submitting your form. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
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

      <Button type="submit" isLoading={isLoading} className="w-100">
        Submit
      </Button>
      {data?.status === "success" && (
        <SuccessPopup
          title="All good!"
          msg={`Thanks for your submission ${data.name}, we will get back to you shortly!`}
        />
      )}
      {data?.status === "error" && (
        <FailPopup
          title="Oops"
          msg="Something went wrong, please try again later"
        />
      )}
    </Box>
  );
}

export default ContactMeSection;
