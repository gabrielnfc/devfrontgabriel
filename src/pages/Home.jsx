import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  margin-block-start: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-block-end: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to my React App!</Title>
      <Description>
        This is the home page of my app. I am a full-stack developer with a
        background in web development and a passion for learning new
        technologies. I am currently working as a Full-Stack Developer at{' '}
        <a href="https://www.linkedin.com/in/joshua-murphy-7a2009120/">
          Joshua Murphy
        </a>
        .
      </Description>
    </HomeContainer>
  );
}

export default Home;
