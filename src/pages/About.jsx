import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  display: flex;
  inline-size: 98vw;
  block-size: 89vh;
  justify-content: center;
  flex-direction: row;
  margin-top: 3%;
`;

const AboutTitle = styled.h1`
  position: absolute;
  color: #fff;
  font-size: 3rem;
  top: 9%;
`;

const Box1 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.5rem 0.5rem;
  margin: 1rem 2rem 0.5rem -13rem;
`;

const Photo1 = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
`;

const Bio1 = styled.p`
  font-size: 1.2rem;
  padding: 10px;
  text-align: center;
  color: #fff;
  inline-size: 450px;
  block-size: 200px;
`;

const Box2 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.5rem 0.5rem;
  margin: 20rem 2rem 2rem 2rem;
  background-color: yellow;
`;

const Photo2 = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
`;

const Bio2 = styled.p`
  font-size: 1.2rem;
  padding: 10px;
  text-align: center;
  color: #fff;
  inline-size: 450px;
  block-size: 200px;
`;

const Box3 = styled.div`
  display: flex;
  position: relative;
  width: 800px;
  height: 800px;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.5rem 0.5rem;
  margin: 3rem 0rem 2rem 2rem;
  background-color: yellow;
`;

const Photo3 = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
`;

const Bio3 = styled.p`
  font-size: 1.2rem;
  padding: 10px;
  text-align: center;
  color: #fff;
  inline-size: 100%;
  block-size: 100%;
`;

const About = () => {
  return (
    <motion.div
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
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        >
          <Box1>
            <Photo1 src="./public/img/Gabriel1.png" alt="Your Name" />
            <Bio1>
              Olá! Meu nome é Gabriel e sou apaixonado por tecnologia desde
              quando me conheço por gente. Meu interesse em desenvolvimento web
              começou em 2006, quando resolvi criar assinaturas digitais em um
              forum de uTorrent, desde então não parei mais, e aprendi muito
              sobre HTML e CSS brincando com coisas não muito sérias.
            </Bio1>
          </Box1>
        </motion.div>
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        >
          <Box2>
            <Photo2 src="./public/img/Gabriel1.png" alt="Your Name" />
            <Bio2>
              Olá! Meu nome é Gabriel e sou apaixonado por tecnologia desde
              quando me conheço por gente. Meu interesse em desenvolvimento web
              começou em 2006, quando resolvi criar assinaturas digitais em um
              forum de uTorrent, desde então não parei mais, e aprendi muito
              sobre HTML e CSS brincando com coisas não muito sérias.
            </Bio2>
          </Box2>
        </motion.div>
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        >
          <Box3>
            <Photo3 src="./public/img/Gabriel1.png" alt="Your Name" />
            <Bio3>
              Olá! Meu nome é Gabriel e sou apaixonado por tecnologia desde
              quando me conheço por gente. Meu interesse em desenvolvimento web
              começou em 2006, quando resolvi criar assinaturas digitais em um
              forum de uTorrent, desde então não parei mais, e aprendi muito
              sobre HTML e CSS brincando com coisas não muito sérias.
            </Bio3>
          </Box3>
        </motion.div>
      </AboutContainer>
    </motion.div>
  );
};

export default About;
