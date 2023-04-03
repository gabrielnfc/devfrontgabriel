import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const Bio = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
`;

const Photo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

const About = () => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <AboutContainer>
        <AboutTitle>Sobre mim</AboutTitle>
        <Heading>Oi! Meu nome é Gabriel</Heading>
        <Photo src="./public/img/Gabriel1.png" alt="Your Name" />
        <Bio>
          Hi, I'm [Your Name]. I was born in [Year] in [City, Country] and have
          been living there ever since. Growing up, I was always interested in
          [Interest/Hobby], which led me to [Major/Career Path]. I graduated
          from [University/College] in [Year] and have been working as a [Job
          Title] at [Company] ever since. In my free time, I enjoy
          [Hobby/Interest]. I also love spending time with my
          [Family/Friends/Pet] and exploring new places. Thanks for stopping by!
        </Bio>
      </AboutContainer>
    </motion.div>
  );
};

export default About;
