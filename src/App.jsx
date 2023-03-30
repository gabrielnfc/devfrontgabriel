import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const AppContainer = styled.div`
  display: flex;
  inline-size: 100vw;
  block-size: 100vh;
  box-sizing: border-box;
  background: url('./public/img/bg.png');
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  block-size: 100vh;
  inline-size: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Navbar />
        <ContentContainer>
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<About />} path="/Sobre" />
            <Route element={<Projects />} path="/Projetos" />
            <Route element={<Contact />} path="/Contato" />
          </Routes>
        </ContentContainer>
      </motion.div>
    </AppContainer>
  );
}

export default App;
