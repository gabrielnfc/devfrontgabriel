import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomLink from './CustomLink.jsx';

const Nav = styled.nav`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Icon = styled(Link)`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LIST_ITENS = [
  { route: '/About', content: 'Sobre' },
  { route: '/Projects', content: 'Projetos' },
  { route: '/Contact', content: 'Contato' },
];

const Navbar = () => {
  return (
    <Nav>
      <Icon to="/">
        <img src="" alt="" />
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
