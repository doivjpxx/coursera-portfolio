import { VStack, Heading, Text, Image, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({ project }) {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      spacing={4}
      align={"start"}
    >
      <Image src={project.imageSrc} alt={project.altText} />
      <Heading as="h3" size="md">
        {project.title}
      </Heading>
      <Text>{project.description}</Text>
      <Box>
        <Text>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Box>
    </VStack>
  );
}

export default Card;
