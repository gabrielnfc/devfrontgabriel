import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  fontstyle: none;
  margin: 0 1rem;
  color: #fff;
  &.active a {
    color: #ff5722;
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
