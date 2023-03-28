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
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: #0f2027;
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  );
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  );
`;

const ContentContainer = styled.div``;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <ContentContainer>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<About />} path="/About" />
          <Route elemnte={<Projects />} path="/Projects" />
          <Route element={<Contact />} path="/Contact" />
        </Routes>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
