import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  padding: 10px 30px;
  border-block-end: 1px solid rgba(0, 0, 0, 0.1);
  margin-block-end: 10px;
  a {
    color: #fff;
    &:active {
      text-shadow: 2px 4px 10px white;
      border-block-end: 4px;
    }
    &:hover {
      text-shadow: 2px 2px 10px white;
      border-block-end: 4px;
    }
  }
  &:last-child {
    border-block-end: none;
    margin-block-end: 0;
    padding-block-end: 0;
  }
  &:hover {
    border
    text-shadow: 2px 4px 10px white;
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
