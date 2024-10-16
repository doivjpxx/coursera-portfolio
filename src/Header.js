import {
  Stack,
  HStack,
  VStack,
  Box,
  Text,
  Container,
  Flex,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { useMemo, useEffect, useRef, useState } from "react";

const useScrollDirection = () => {
  const previousScrollPosition = useRef(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    previousScrollPosition.current = currentScrollPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
};

function Header() {
  const scrollDirection = useScrollDirection();
  const socials = useMemo(() => {
    return [
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
  }, []);

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <Box
      transform={
        scrollDirection === "down" ? "translateY(-200px)" : "translateY(0)"
      }
      transition="transform 0.3s"
    >
      <Flex bg="black" justifyContent="space-around" alignItems="center">
        <Container>
          <HStack spacing={24} py={4}>
            {socials.map((social, index) => (
              <Text key={index}>
                <Link href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" color="white" />
                </Link>
              </Text>
            ))}
          </HStack>
        </Container>
        <Container maxW="container.xl">
          <HStack spacing={24} py={4}>
            <Box>
              <Link href="#projects" onClick={handleClick}>
                <Text color="white">Projects</Text>
              </Link>
            </Box>
            <Box>
              <Link href="#contact-me" onClick={handleClick}>
                <Text color="white">Contact</Text>
              </Link>
            </Box>
          </HStack>
        </Container>
      </Flex>
    </Box>
  );
}

export default Header;
