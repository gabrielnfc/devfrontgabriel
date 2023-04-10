import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader';
import { motion } from 'framer-motion';
import './style.css';

const AppContainer = styled.div`
  display: flex;
  inline-size: 100vw;
  block-size: 100vh;
  box-sizing: border-box;
  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #e2e2e2,
    #c9d6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #e2e2e2,
    #c9d6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-size: cover;
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
  const [isPreLoader, setIsPreLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPreLoader(false);
    }, 5800);
  });

  return (
    <>
      {isPreLoader ? (
        <PreLoader />
      ) : (
        <AppContainer>
          <Navbar />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <ContentContainer>
              <Routes>
                <Route element={<Home />} exact path="/" />
                <Route element={<About />} path="/Sobre" />
                <Route element={<Projects />} path="/Projetos" />
                <Route element={<Contact />} path="/Contato" />
              </Routes>
            </ContentContainer>
            <Footer />
          </motion.div>
        </AppContainer>
      )}
    </>
  );
}

export default App;
