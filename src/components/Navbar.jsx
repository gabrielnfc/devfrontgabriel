import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomLink from './CustomLink.jsx';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  position: fixed;
  inline-size: 100vw;
  block-size: 8%;
  letter-spacing: 1px;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  list-style: none;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Icon = styled(Link)`
  display: flex;
  width: 80px;;
  height: 80px;
  z-index: 99;
  border: 0;
`;

const List = styled.ul`
  display: flex;
  margin-inline-start: 300px;
  font-size: 1.5em;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
  align-items: stretch;
  list-style: none;
  text-decoration: none;
`;


const NavBarIcon = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const IconContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  a {
    inline-size: 50px;
    block-size: 50px;
    background-color: #ffffffd5;
    display: inline-flex;
    border-radius: 50%;
    border-color: transparent;
    margin-inline-end: 10px;
    align-items: center;
    line-height: 1;

    &:before {
      content: '';
      inline-size: 50px;
      block-size: 50px;
      position: absolute;
      border-radius: 50%;
      background-color: #fff;
      transform: scale(0);
      transition: 0.3s ease-in-out;
    }

    &:hover:before {
      transform: scale(1);
    }

    img {
      inline-size: 100%;
      z-index: 1;
      transition: 0.3s ease-in-out;
    }
  }
`;

const Button = styled(Link)`
  font-weight: 700;
  font-family: 'Centra', sans-serif !important;
  color: #fff;
  border: 2px solid #fff;
  padding: 14px 30px;
  font-size: 18px;
  position: relative;
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &:before {
    content: '';
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: #000000;
  }

  &:hover::before {
    content: '';
    inline-size: 100%;
    block-size: 100%;
    position: absolute;
  }
`;

const LIST_ITENS = [
  { route: '/Sobre', content: 'SOBRE' },
  { route: '/Projetos', content: 'PROJETOS' },
  { route: '/Contato', content: 'CONTATO' },
];


const Navbar = () => {
  return (
    <Nav>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 200, damping: 17 }}
      >
        <Icon to="/">
          <img src="./public/img/logo.png" alt="Logo" />
        </Icon>
      </motion.div>
      <List>
        {LIST_ITENS.map((item) => {
          return (
            <CustomLink key={item.route} to={item.route}>
              {item.content}
            </CustomLink>
          );
        })}
      </List>
      <NavBarIcon>
        <IconContainer>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 17 }}
          >
            <a href="https://www.linkedin.com/in/gabrielnfc/" target="_blank">
              <img src={navIcon1} alt="Meu Linkedin" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 17 }}
          >
            <a href="https://github.com/gabrielnfc" target="_blank">
              <img src={navIcon2} alt="Meu GitHub" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 17 }}
          >
            <a
              href="https://api.whatsapp.com/qr/GFEOWFFQFLEZI1?autoload=1&app_absent=0"
              target="_blank"
            >
              <img src={navIcon3} alt="Fale comigo pelo Whatsapp" />
            </a>
          </motion.div>
        </IconContainer>
        <Button to="/Contato">Fale comigo!</Button>
      </NavBarIcon>
    </Nav>
  );
};

export default Navbar;
