import { ChakraProvider, Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <LandingSection
          greeting="Hello! I'm Huy Phong"
          bio1="I'm a passionate developer."
          bio2="I love creating web applications."
        />
        <ProjectsSection />
        <ContactMeSection />
      </Box>
    </ChakraProvider>
  );
}

export default App;
