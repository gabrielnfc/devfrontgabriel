import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TitleTitle = styled.div`
  font-size: 45px;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
  text-align: center;
  color: var(--color-white);
  text-shadow: 1px 2px 5px black;
  margin-block-start: -25px;
  ${({ isBlurActive }) => isBlurActive && 'filter: blur(3px);'}
`;

const Container = styled.div`
  display: flex;
  position: relative;
  display: grid;
  inline-size: 85vw;
  block-size: 70vh;
  padding: 5px;
  inset-block-start: 15px;
  grid-template-columns: 2fr 2fr 2fr;
  list-style: none;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  ${({ isBlurActive }) => isBlurActive && 'filter: blur(5px);'}
`;

const ContainerContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  max-inline-size: 100%;
  max-block-size: 100%;
  position: relative;
  background-color: #fff;
`;

const Item = styled(motion.div)`
  inline-size: calc(95% - 8px);
  block-size: calc(95% - 8px);
  margin-block-end: 20px;
  padding: 50px;
  margin: 30px;
  border-radius: 10px;
  cursor: pointer;
  background: #fff;
  box-shadow: 0.5px 0.5px 5px;
  z-index: ${({ isSelected }) => (isSelected ? '1' : '-1')};
  inline-size: ${({ isSelected }) => (isSelected ? '80%' : 'calc(95% - 50px)')};
  block-size: ${({ isSelected }) => (isSelected ? '80%' : 'auto')};
  position: ${({ isSelected }) => (isSelected ? 'fixed' : 'relative')};
  inset-block-start: ${({ isSelected }) => (isSelected ? '5%' : 'auto')};
  inset-inline-start: ${({ isSelected }) => (isSelected ? '5%' : 'auto')};
  margin: ${({ isSelected }) => (isSelected ? '5%' : 'none')};
  &:hover {
    border: 1px solid yellow;
    opacity: 0.1px;
    box-shadow: 0.5px 1px 10px;
    transform: translateY(-5px);
    z-index: 1;
  }
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
  position: absolute;
  inset-block-start: 3%;
  inset-inline-end: 2%;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
  padding: 5px 10px;
  border: 2px;
  border-radius: 5px;
  margin-block-end: 10px;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
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
  const isBlurActive = selectedId !== null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <TitleTitle isBlurActive={isBlurActive}> Projetos e Parcerias</TitleTitle>
      <Container isBlurActive={isBlurActive}>
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
      </Container>
      <ContainerContainer>
        <AnimatePresence>
          {selectedId && (
            <Item
              key={selectedId}
              layoutId={selectedId}
              isSelected={true}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              whileHover={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 60, damping: 10 }}
              onClick={() => setSelectedId(null)}
            >
              <Subtitle>{items[selectedId - 1].subtitle}</Subtitle>
              <Title>{items[selectedId - 1].title}</Title>
              <Button onClick={() => setSelectedId(null)}>x</Button>
            </Item>
          )}
        </AnimatePresence>
      </ContainerContainer>
    </motion.div>
  );
};

export default Project;
