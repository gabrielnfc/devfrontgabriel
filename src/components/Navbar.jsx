import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomLink from './CustomLink.jsx';

const Nav = styled.nav`
  inline-size: 1400px;
  block-size: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 0px;
`;

const Icon = styled(Link)`
  display: flex;
  width: 100px;
  height: 150px;
  align-items: center;
  padding-block-start: 5px;
`;

const List = styled.ul`
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  padding-block-start: 5px;
`;



const LIST_ITENS = [
  { route: '/Sobre', content: 'Sobre' },
  { route: '/Projetos', content: 'Projetos' },
  { route: '/Contato', content: 'Contato' },
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
    </Nav>
  );
};

export default Navbar;
