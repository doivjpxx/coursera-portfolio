import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const ProjectsSection = ({ projects }) => {
  return (
    <Box id="projects" padding={8} background="gray.100">
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
