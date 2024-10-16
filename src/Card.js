import { VStack, Heading, Text, Image } from "@chakra-ui/react";
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
    >
      <Image src={project.imageSrc} alt={project.altText} />
      <Heading as="h3" size="md">
        {project.title}
      </Heading>
      <Text>{project.description}</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </VStack>
  );
}

export default Card;
