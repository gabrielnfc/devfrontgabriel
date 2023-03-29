import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 300px;
  height: 150px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
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
  return (
    <Form>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="E-mail" />
      <Textarea placeholder="Mensagem" />
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default Contact;
