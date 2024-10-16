import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "./Card";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware",
    imageSrc: "https://placehold.co/400x250",
    altText: "Project One Image",
  },
  {
    id: 2,
    title: "React Infinite scroll",
    description:
      "A React component that makes it easy to create an infinitely scrolling list",
    imageSrc: "https://placehold.co/400x250",
    altText: "Project Two Image",
  },
  {
    id: 3,
    title: "Photo Gallery",
    description: "A simple photo gallery that displays a grid of photos",
    imageSrc: "https://placehold.co/400x250",
    altText: "Project Three Image",
  },
  {
    id: 4,
    title: "React Carousel",
    description:
      "A simple and reusable React component that creates a carousel",
    imageSrc: "https://placehold.co/400x250",
    altText: "Project Four Image",
  },
];

const ProjectsSection = () => {
  return (
    <Box id="projects-section" padding={8} background="gray.100">
      <Heading as="h5">Featured projects</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={8}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;
