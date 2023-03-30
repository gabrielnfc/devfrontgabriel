import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  padding: 15px;
  color: lightgray;
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
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 0 5px #fff, 0 0 0 10px white;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
      box-shadow: 0 0 0 5px #fff, 0 0 0 20px white;
    }
  }
`;


function Home() {
  return (
    <HomeContainer>
      <Left>
        <Title>Pensar. Fazer. Resolver.</Title>
        <WhatWeDo>
          <Line src="./public/img/line.png" />
          <Subtitle>O que eu faço</Subtitle>
          <Line src="./public/img/line.png" />
        </WhatWeDo>
        <Desc>Gosto de criar experiências digitais através da tecnologia.</Desc>
        <Button to="/Sobre"> Saiba mais </Button>
      </Left>
      <Right>
        <Img src="./public/img/avatar1.png" />
      </Right>
    </HomeContainer>
  );
}

export default Home;
