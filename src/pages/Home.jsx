import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  display: flex;
  inline-size: 100vw;
  block-size: 100vh;
  padding: 25px;
`;

const Left = styled.div`
  display: flex;
  inline-size: 50%;
  padding: 35px 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 140px;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-block-start: 80px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 10px;
`;

const Line = styled.img`
  block-size: 3px;
`;

const Subtitle = styled.h2`
  color: #fadf87;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  padding-block-end: 30px;
`;

const Button = styled(Link)`
  background-color: #e9e16ec8;
  color: white;
  font-weight: 500;
  inline-size: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  inline-size: 700px;
  block-size: 700px;
  margin-block-start: 50px;
  margin-inline-start: 80px;
  padding: 15px;
  background-size: cover;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 0 0 5px #fff, 0 0 0 50px white;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(45px);
      box-shadow: 0 0 0 5px #fff, 0 0 0 20px white;
    }
  }
`;

function Home() {
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
      <HomeContainer>
        <Left>
          <Title>Pensar. Fazer. Resolver.</Title>
          <WhatWeDo>
            <Line src="./public/img/line.png" />
            <Subtitle>O que eu faço?</Subtitle>
            <Line src="./public/img/line.png" />
          </WhatWeDo>
          <Desc>Criação e inovação através da tecnologia.</Desc>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Button to="/Sobre"> Saiba mais </Button>
          </motion.a>
        </Left>
        <Right>
          <motion.div
            className="box2"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <Img src="./public/img/avatar1.png" />
          </motion.div>
        </Right>
      </HomeContainer>
    </motion.div>
  );
}

export default Home;
