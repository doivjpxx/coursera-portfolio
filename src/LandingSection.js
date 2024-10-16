import { VStack, Image, Heading, Text } from "@chakra-ui/react";

function LandingSection({ greeting, bio1, bio2 }) {
  return (
    <VStack align="center" className="w-100 landing-section">
      <Image
        borderRadius="50%"
        boxSize="150px"
        src="https://i.pravatar.cc/150?img=7"
        alt="Avatar"
      />
      <Heading as="h1" color="white">
        {greeting}
      </Heading>
      <Text color="white">{bio1}</Text>
      <Text color="white">{bio2}</Text>
    </VStack>
  );
}

export default LandingSection;
