import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  inline-size: 95vw;
  block-size: 75vh;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.5em 0.5em;
`;

const ProjectCard = styled.div`
  inline-size: 30%;
  margin-block-end: 30px;
  padding: 0.5em 0.5em 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #fff;
  background-color: #fff;
`;

const ProjectImage = styled.img`
  inline-size: 100%;
  block-size: auto;
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
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src="#" />
        <ProjectTitle>Project 2</ProjectTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src="#" />
        <ProjectTitle>Project 3</ProjectTitle>
        <ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ProjectDescription>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;
