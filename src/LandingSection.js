import { VStack, Image, Heading, Text } from "@chakra-ui/react";

const greeting = "Hello, I'm Phong";
const bio1 = "I'm a software engineer and I love to code!";
const bio2 = "I'm passionate about web development and I'm always learning.";

function LandingSection() {
  return (
    <VStack align="center" className="w-100 landing-section">
      <Image
        borderRadius="50%"
        boxSize="150px"
        src="https://i.pravatar.cc/150?img=7"
        alt="Avatar"
      />
      <Heading as="h1">{greeting}</Heading>
      <Text>{bio1}</Text>
      <Text>{bio2}</Text>
    </VStack>
  );
}

export default LandingSection;
