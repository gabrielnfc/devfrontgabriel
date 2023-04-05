import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 96vw;
  height: 86vh;
  margin: 0 auto;
  margin: 5rem 2rem 1rem 1rem;
`;

const AboutTitle = styled.h1`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
  text-align: center;
  color: var(--color-white);
  text-shadow: 1px 2px 5px black;
  top: -1rem;
`;

const Box1 = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 25vw;
  height: 42vh;
  top: -12rem;
  right: 3rem;
  padding: 2rem 2rem 1rem 2rem;
  background-image: url(public/img/pattern.png);
  background-repeat: no-repeat;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Photo1 = styled.img`
  display: flex;
  width: 380px;
  border-radius: 15px;
  border: 3px solid #ffffffab;
  box-shadow: 1px 2px 4px 0px rgba(31, 38, 135, 0.37);
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: -1rem;
`;

const Bio1 = styled.p`
  font-size: 16px;
  font-family: 'Centra', sans-serif !important;
  line-height: 1.3;
  text-align: center;
  color: var(--color-white);
  text-align: justify;
  text-indent: 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Box2 = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 26vw;
  height: 72vh;
  top: 1rem;
  right: -1rem;
  padding: 2rem 2rem 1rem 2rem;
  background-image: url(public/img/pattern.png);
  background-repeat: no-repeat;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Photo2 = styled.img`
  display: flex;
  width: 18rem;
  border-radius: 15px;
  border: 2px solid #ffffffab;
  box-shadow: 1px 2px 4px 0px rgba(31, 38, 135, 0.37);
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: -2rem;
`;

const Bio2 = styled.p`
  font-size: 16px;
  font-family: 'Centra', sans-serif !important;
  line-height: 1.3;
  text-align: center;
  color: var(--color-white);
  text-align: justify;
  text-indent: 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Box3 = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 40vw;
  height: 80vh;
  top: 1rem;
  right: -4rem;
  padding: 2rem 2rem 1rem 2rem;
`;

const Bio3 = styled.p`
  font-size: 16px;
  font-family: 'Centra', sans-serif !important;
  line-height: 1.3;
  text-align: center;
  color: var(--color-white);
  text-align: justify;
  text-indent: 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
  h1 {
    font-size: 45px;
    font-family: 'Centra', sans-serif !important;
    font-weight: bold;
    text-align: center;
    color: var(--color-white);
    text-shadow: 1px 2px 5px black;
  }
  div {
    width: 100%;
    height: 200px;
  }
  li {
    flex-direction: column;
    font-size: 20px;
    font-family: 'Centra', sans-serif !important;
    font-weight: bold;
    color: var(--color-white);
    text-shadow: 1px 2px 5px black;
    list-style-type: inherit;
  }
`;

const About = () => {
  return (
    <AnimatePresence>
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
          <AboutTitle> {/* <h1>Sobre mim</h1> */}</AboutTitle>
          <Box1>
            <Photo1 src="./public/img/gabriel1.png" alt="Your Name" />
            <Bio1>
              Meu nome é Gabriel Nascimento, nasci dia 28 de abrild e 1990 em
              Vitória - ES, e desde muito pequeno sempre fui aficionado por
              tencnologia. A paixão começou quando tive meu primeiro contato com
              um video-game, famoso Mega Drive, desde então, a curiosidade
              sempre foi a minha melhor companheira.
            </Bio1>
          </Box1>
          <Box2>
            <Photo2 src="./public/img/gabriel.png" alt="Your Name" />
            <Bio2>
              Hoje, sou um desenvolvedor Front-end com a mesma paixão por
              tecnologia de quando era pequeno. Estou sempre em busca de novos
              conhecimentos e tendências do setor para me manter atualizado e
              melhorar minhas habilidades. <br />
              Ao longo dos anos, trabalhei como freelancer e desenvolvi designs
              responsivos para sites e aplicações em parcerias com amigos de
              trabalho. <br />
              Gosto de criar soluções inovadoras e que atendam às necessidades
              do usuário, combinando minha habilidade em HTML, CSS e JavaScript.
            </Bio2>
          </Box2>
          <Box3>
            <Bio3>
              <h1> Habilidades </h1>
              <li> HTML5 / CSS </li>
              <li> JavaScript (ES6+)</li>
              <li> React </li>
              <li> Vue 3 </li>
              <li> Node JS </li>
              <li> Next JS </li>
              <li> Figma </li>
              <li> Photoshop </li>
              <li> Git / GitHub </li>
              <br />
              <p>
                Hoje, sou um desenvolvedor Front-end com a mesma paixão por
                tecnologia de quando era pequeno. Estou sempre em busca de novos
                conhecimentos e tendências do setor para me manter atualizado e
                melhorar minhas habilidades como desenvolvedor. <br />
                Ao longo dos anos, trabalhei como freelancer e desenvolvi
                designs responsivos para sites e aplicações em parcerias com
                amigos de trabalho. <br />
                Gosto de criar soluções inovadoras e que atendam às necessidades
                do usuário, combinando minha habilidade em HTML, CSS e
                JavaScript.
              </p>
            </Bio3>
          </Box3>
        </AboutContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
