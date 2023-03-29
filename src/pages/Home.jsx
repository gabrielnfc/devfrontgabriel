import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
`;

const Img = styled.img`
  inline-size: 500px;
  block-size: 500px;
  border-radius: 50%;
  border: 8px solid #fff;
  animation: border-animation 5s infinite;

  @keyframes border-animation {
    0% {
      border-color: #fff;
    }
    50% {
      border-color: #e7c738;
    }
    100% {
      border-color: #55d4bf;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to my React App!</Title>
        <Description>
          This is the home page of my app. I am a full-stack developer with a
          background in web development and a passion for learning new
          technologies. I am currently working as a Full-Stack Developer at{' '}
        </Description>
      <Img src="./public/img/avatar1.png" />
    </HomeContainer>
  );
}

export default Home;
