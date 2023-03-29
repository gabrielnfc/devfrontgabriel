import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;

const ProjectCard = styled.div`
  width: 30%;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
`;

const ProjectTitle = styled.h2`
  margin: 10px;
`;

const ProjectDescription = styled.p`
  margin: 10px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectCard>
        <ProjectImage src="#" />
        <ProjectTitle>Project 1</ProjectTitle>
        <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src="#" />
        <ProjectTitle>Project 2</ProjectTitle>
        <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src="#" />
        <ProjectTitle>Project 3</ProjectTitle>
        <ProjectDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProjectDescription>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;
