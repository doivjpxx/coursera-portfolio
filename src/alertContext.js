import { createContext, useContext, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const AlertContext = createContext();

export const useAlertContext = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const onOpen = ({ name, title, description, status, duration, isClosable }) => {
    setData({ name, title, description, status, duration, isClosable });
  };

  return (
    <AlertContext.Provider value={{ onOpen, data }}>
      {children}
    </AlertContext.Provider>
  );
};
