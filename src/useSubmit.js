import { useState } from "react";

export const useSubmit = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (formData) => {
    setIsLoading(true);

    // Simulate an API request
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Random success or error
      const responseType = isSuccess ? "success" : "error";
      const message = isSuccess
        ? "Form submitted successfully!"
        : "There was an error submitting the form.";

      setResponse({ type: responseType, message });
      setIsLoading(false);
    }, 2000); // Simulated network delay
  };

  return { submit, response, isLoading };
};
