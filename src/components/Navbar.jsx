import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomLink from './CustomLink.jsx';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Nav = styled.nav`
  display: flex;
  position: fixed;
  inline-size: 100vw;
  block-size: 10%;
  letter-spacing: 1.8px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(Link)`
  inline-size: 999px;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  margin-inline-start: -120px;
  font-size: 1.5em;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
`;

const NavBarIcon = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.5em;
`;

const IconContainer = styled.nav`
  display: inline-block;
  margin-inline-start: 5px;
  margin-inline-end: 15px;
  color: inherit;
  a {
    inline-size: 50px;
    block-size: 50px;
    background: rgba(255, 255, 255, 0.74);
    display: inline-flex;
    border-radius: 50%;
    border-color: transparent;
    margin-inline-end: 6px;
    align-items: center;
    line-height: 1;
    border: 0px solid rgba(255, 255, 255, 0.596);

    &:before {
      content: '';
      width: 50px;
      height: 50px;
      position: absolute;
      background-color: #ffff;
      border-radius: 50%;
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

      &:hover {
        filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%)
          hue-rotate(346deg) brightness(95%) contrast(86%);
      }
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
      <Icon to="/">
        <img src="./public/img/logo.png" alt="Logo" />
      </Icon>
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
          <a href="https://www.linkedin.com/in/gabrielnfc/" target="_blank">
            <img src={navIcon1} alt="Meu Linkedin" />
          </a>
          <a href="https://github.com/gabrielnfc" target="_blank">
            <img src={navIcon2} alt="Meu GitHub" />
          </a>
          <a
            href="https://api.whatsapp.com/qr/GFEOWFFQFLEZI1?autoload=1&app_absent=0"
            target="_blank"
          >
            <img src={navIcon3} alt="Fale comigo pelo Whatsapp" />
          </a>
        </IconContainer>
        <Button to="/Contato">Fale comigo!</Button>
      </NavBarIcon>
    </Nav>
  );
};

export default Navbar;
