import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TitleTitle = styled.div`
  font-size: 100px;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
  text-align: center;
  color: var(--color-white);
  margin-block-start: 20px;
`;

const Container = styled.div`
  position: relative;
  display: grid;
  inline-size: 100vw;
  block-size: 70vh;
  padding: 5px;
  inset-block-start: 15px;
  grid-template-columns: 2fr 2fr 2fr;
  list-style: none;
`;

const Item = styled(motion.div)`
  inline-size: calc(95% - 8px);
  block-size: calc(95% - 8px);
  margin-block-end: 20px;
  padding: 50px;
  margin: 30px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0.5px 0.5px 5px;
  will-change: transform
  z-index: ${({ isSelected }) => (isSelected ? '99' : '-1')};
  inline-size: ${({ isSelected }) => (isSelected ? '80%' : 'calc(95% - 50px)')};
  height: ${({ isSelected }) => (isSelected ? '600px' : 'auto')};
  position: ${({ isSelected }) => (isSelected ? 'fixed' : 'relative')};
  top: ${({ isSelected }) => (isSelected ? '15%' : 'auto')};
  left: ${({ isSelected }) => (isSelected ? '5%' : 'auto')};
  transform: ${({ isSelected }) =>
    isSelected ? 'translate(-50%, -50%)' : 'none'};
`;

const Subtitle = styled(motion.h5)`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const Title = styled(motion.h2)`
  margin: 5px 0 0;
  font-size: 24px;
  color: #333;
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

const items = [
  { id: 1, subtitle: 'Project subtitle 1', title: 'Project title 1' },
  { id: 2, subtitle: 'Project subtitle 2', title: 'Project title 2' },
  { id: 3, subtitle: 'Project subtitle 3', title: 'Project title 3' },
  { id: 4, subtitle: 'Project subtitle 4', title: 'Project title 4' },
  { id: 5, subtitle: 'Project subtitle 5', title: 'Project title 5' },
  { id: 6, subtitle: 'Project subtitle 6', title: 'Project title 6' },
];

const Project = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <TitleTitle> Projetos</TitleTitle>
      <Container>
        {items.map((item) => (
          <Item
            key={item.id}
            layoutId={item.id}
            isSelected={selectedId === item.id}
            onClick={() => setSelectedId(item.id)}
          >
            <Subtitle>{item.subtitle}</Subtitle>
            <Title>{item.title}</Title>
          </Item>
        ))}
        <AnimatePresence>
          {selectedId && (
            <Item
              key={selectedId}
              layoutId={selectedId}
              isSelected={true}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 0.8 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 60, damping: 10 }}
              onClick={() => setSelectedId(null)}
            >
              <Subtitle>{items[selectedId - 1].subtitle}</Subtitle>
              <Title>{items[selectedId - 1].title}</Title>
              <Button onClick={() => setSelectedId(null)}>Close</Button>
            </Item>
          )}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
};

export default Project;
