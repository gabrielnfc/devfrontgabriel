import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-family: 'Centra', sans-serif !important;
  font-weight: bold;
  text-align: center;
  color: var(--color-white);
  text-shadow: 1px 2px 5px black;
  inline-size: 100%;
  block-size: 15%;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 98vw;
  block-size: 80vh;
`;

const Image = styled.img`
  max-inline-size: 90%;
  max-block-size: 90%;
  margin-left: -200px;
  margin-bottom: 13%;
`;

const Box = styled.div`
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 35px 35px;
  border-radius: 5px;
  margin-bottom: 40%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 1px;
  inline-size: 600px;
  max-inline-size: 100%;
  max-block-size: 100%;
`;

const Label = styled.label`
  margin-block-end: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  font-family: 'Centra', sans-serif !important;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-block-end: 10px;
`;

const TextArea = styled.textarea`
  padding: 35px;
  border-radius: 5px;
  border: none;
  margin-block-end: 15px;
  max-inline-size: 100%;
  max-block-size: 350px;
`;

const Button = styled.button`
  inline-size: 120px;
  block-size: 40px;
  border: none;
  border-radius: 5px;
  background-color: #1e90ff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

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
      <Title> Deixe aqui a sua mensagem </Title>
      <ContactContainer>
        <Image src="/public/img/avatar.png" />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Box>
            <h2>Bora trabalhar junto?</h2>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="name">Nome</Label>
              <Input type="text" id="name" name="name" required />

              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />

              <Label htmlFor="message">Digite sua mensagem aqui</Label>
              <TextArea id="message" name="message" required />

              <Button type="submit">Send</Button>
            </Form>
          </Box>
        </motion.div>
      </ContactContainer>
    </motion.div>
  );
};

export default Contact;
