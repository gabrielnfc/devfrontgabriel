import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";

const ListItem = styled.button`
  display: flex;
  border: none;
  padding: 5px 25px;
  position: relative;
  background-color: transparent;
  a {
    font-family: 'Centra', sans-serif!important;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    color: #455a64;
    background-color: transparent !important;
  }
`;

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <ListItem className={isActive ? 'active' : ''}>
      <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }} style={{color: "white", background: "transparent", border: "none"}}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </motion.button>
    </ListItem>
  );
};


export default CustomLink;
