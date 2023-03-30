import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  padding: 10px 30px;
  a {
    color: #fff;
    &:active {
      text-shadow: 2px 4px 10px white;
      border-block-end: 4px;
    }
    &:hover {
      text-shadow: 2px 2px 10px white;
      border-block-end: 4px;
      border-block-start: 4px;
    }
  }
`;

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <ListItem className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </ListItem>
  );
};

export default CustomLink;
