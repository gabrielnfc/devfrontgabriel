import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
const PageTransition = ({ children, location }) => {
  return (
    <CSSTransition
      key={location.key}
      classNames="page-transition"
      timeout={300}
    >
      {children}
    </CSSTransition>
  );
};

function App() {
  const location = useLocation();

  return (
    <AppContainer>
      <Navbar />
      <ContentContainer>
        <PageTransition location={location}>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="page-transition"
              timeout={300}
            >
              <Routes>
                <Route element={<Home />} exact path="/" />
                <Route element={<About />} path="/Sobre" />
                <Route element={<Projects />} path="/Projetos" />
                <Route element={<Contact />} path="/Contato" />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </PageTransition>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
