import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const AboutDescription = styled.p`
  color #ff2;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lorem euismod, dictum nulla id, bibendum nunc. Vivamus vel sapien in velit maximus commodo non eget arcu.</AboutDescription>
      <AboutButton>Learn More</AboutButton>
    </AboutContainer>
  );
};

export default About;
