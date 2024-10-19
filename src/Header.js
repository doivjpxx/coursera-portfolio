import { HStack, Box, Text, Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useRef, useState } from "react";

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

function Header({ items, socials }) {
  const scrollDirection = useScrollDirection();

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <Flex
      transform={
        scrollDirection === "down" ? "translateY(-200px)" : "translateY(0)"
      }
      transition="transform 0.3s"
      bg="black"
      justifyContent="space-around"
      alignItems="center"
      style={{ position: "fixed", width: "100%", zIndex: 100 }}
    >
      <HStack spacing={8} py={4}>
        {socials.map((social, index) => (
          <Text key={index}>
            <a href={social.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={social.icon} size="2x" color="white" />
            </a>
          </Text>
        ))}
      </HStack>
      <HStack spacing={8} py={4}>
        {items.map((item, index) => (
          <Box key={index}>
            <Link href={item.href} onClick={handleClick}>
              <Text color="white">{item.name}</Text>
            </Link>
          </Box>
        ))}
      </HStack>
    </Flex>
  );
}

export default Header;
