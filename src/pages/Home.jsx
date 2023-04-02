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
  color: var(--color-white);
  margin-block-start: 15px;
  line-height: 0.9em;
  span {
    background: linear-gradient(
      -45deg,
      var(--color-light-blue),
      var(--color-light-purple),
      var(--color-light-blue),
      var(--color-light-purple)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
    animation: gradient 3s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const Line = styled.img`
  block-size: 3px;
`;

const Subtitle = styled.h2`
  font-size: 50px;
  font-weight: bold;
  background: linear-gradient(
    -45deg,
    var(--color-light-blue),
    var(--color-light-purple),
    var(--color-light-blue),
    var(--color-light-purple)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Desc = styled.p`
  font-family: 'Centra', sans-serif !important;
  font-size: 24px;
  color: #fff;
  padding-block-end: 30px;
`;

const Button = styled(Link)`
  font-family: 'Centra', sans-serif !important;
  font-size: 24px;
  font-variant: small-caps;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 10px 15px;
  background: linear-gradient(
    -45deg,
    var(--color-light-blue),
    var(--color-light-purple),
    var(--color-light-blue),
    var(--color-light-purple)
  );
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 800px;
  height: 700px;
  object-fit: contain;
  object-position: center;
  padding: 5px;
  margin: 0%;
  border-radius: 50%;
  background-color: #ffffff44;
  cursor: pointer;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(45px);
      border-radius: 39%;
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
          <Title>
            Pensar. <span className="gradient">Fazer. </span> Resolver.
          </Title>
          <WhatWeDo>
            <Line src="./public/img/line.png" />
            <Subtitle>O que eu faço?</Subtitle>
            <Line src="./public/img/line.png" />
          </WhatWeDo>
          <Desc>CRIAÇÃO E INOVAÇÃO ATRAVÉS DA TECNOLOGIA.</Desc>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 17 }}
          >
            <Button to="/Sobre"> clique aqui para saber mais </Button>
          </motion.div>
        </Left>
        <Right>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 17 }}
          >
            <Img src="./public/img/3d.png" />
          </motion.div>
        </Right>
      </HomeContainer>
    </motion.div>
  );
}

export default Home;
