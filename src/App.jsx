import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './style.css';

const AppContainer = styled.div`
  display: flex;
  inline-size: 100vw;
  block-size: 100vh;
  flex-direction: column;
  box-sizing: border-box;
  background: url('./public/img/bg.png');
`;

const ContentContainer = styled.div`
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <ContentContainer>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<About />} path="/Sobre" />
          <Route elemnte={<Projects />} path="/Projetos" />
          <Route element={<Contact />} path="/Contato" />
        </Routes>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
