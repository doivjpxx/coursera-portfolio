import { useState } from "react";

export const useSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      // fake API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      return { type: "success", message: "Form submitted successfully" };
    } catch (err) {
      setError(err.message);
      return { type: "error", message: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};
