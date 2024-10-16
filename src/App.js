import { ChakraProvider, Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import Footer from "./Footer";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { AlertProvider } from "./alertContext";

function App() {
  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact-me" },
  ];

  const socials = [
    {
      icon: faEnvelope,
      url: "mailto:",
    },
    {
      icon: faGithub,
      url: "",
    },
    {
      icon: faLinkedin,
      url: "",
    },
    {
      icon: faMedium,
      url: "",
    },
    {
      icon: faStackOverflow,
      url: "",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware",
      imageSrc: "https://placehold.co/800x450",
      altText: "Project One Image",
    },
    {
      id: 2,
      title: "React Infinite scroll",
      description:
        "A React component that makes it easy to create an infinitely scrolling list",
      imageSrc: "https://placehold.co/800x450",
      altText: "Project Two Image",
    },
    {
      id: 3,
      title: "Photo Gallery",
      description: "A simple photo gallery that displays a grid of photos",
      imageSrc: "https://placehold.co/800x450",
      altText: "Project Three Image",
    },
    {
      id: 4,
      title: "React Carousel",
      description:
        "A simple and reusable React component that creates a carousel",
      imageSrc: "https://placehold.co/800x450",
      altText: "Project Four Image",
    },
  ];

  return (
    <AlertProvider>
      <ChakraProvider>
        <Box>
          <Header items={navItems} socials={socials} />
          <LandingSection
            greeting="Hello! I'm Huy Phong"
            bio1="I'm a passionate developer."
            bio2="I love creating web applications."
          />
          <ProjectsSection projects={projects} />
          <ContactMeSection />
        </Box>
        <Footer />
      </ChakraProvider>
    </AlertProvider>
  );
}

export default App;
