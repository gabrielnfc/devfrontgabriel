import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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
  block-size: 10%;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 98vw;
  block-size: 75vh;
  p {
    font-size: 20px;
    font-family: 'Centra', sans-serif !important;
    font-weight: bold;
    text-align: center;
    color: var(--color-white);
    text-shadow: 1px 2px 5px black;
    margin-block-start: -150px;
  }
`;

const Image = styled.img`
  max-inline-size: 90%;
  max-block-size: 90%;
  margin-left: -160px;
  margin-bottom: 5%;
`;

const Box = styled.div`
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 35px 35px;
  border-radius: 5px;
  margin-bottom: 25%;
  margin-top: -10%;
  box-shadow:
  2.4px 6.1px 5.8px -8px rgba(0, 0, 0, 0.03),
  4.3px 11.1px 12.3px -8px rgba(0, 0, 0, 0.052),
  5.5px 14.2px 19.6px -8px rgba(0, 0, 0, 0.07),
  5.7px 14.7px 28.1px -8px rgba(0, 0, 0, 0.087),
  5.8px 15px 37.7px -8px rgba(0, 0, 0, 0.103),
  7.1px 18.3px 48.5px -8px rgba(0, 0, 0, 0.118),
  9.3px 24px 59.5px -8px rgba(0, 0, 0, 0.134),
  12px 31px 68px -8px rgba(0, 0, 0, 0.15)
;
  h2 {
    font-size: 35px;
    font-family: 'Centra', sans-serif !important;
    text-align: center;
    font-weight: bold;
  }
  label {
    font-family: 'Centra', sans-serif !important;
  }
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    const templateParanms = {
      from_name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(
        'service_rswegfp',
        'template_ctqjsmh',
        templateParanms,
        'FDgQZMmzpH23fYCiW'
      )
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          console.log('ERRO', error.status);
        }
      );

    // Display a success message to the user
    alert('Sua mensagem foi enviada!');
  }

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
            <Form onSubmit={sendEmail}>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                placeholder="Seu nome"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />

              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                placeholder="Seu email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <Label htmlFor="phone">Telefone</Label>
              <Input
                type="tel"
                placeholder="Seu telefone"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />

              <Label htmlFor="message">Digite sua mensagem aqui</Label>
              <TextArea
                id="message"
                placeholder="deixe aqui a sua mensagem"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />

              <Button type="submit">Enviar</Button>
            </Form>
          </Box>
          <p>
            {' '}
            Se você tem uma pergunta ou apenas quer dizer "Oi", <br></br>farei o
            possível para entrar em contato com você!{' '}
          </p>
        </motion.div>
      </ContactContainer>
    </motion.div>
  );
};

export default Contact;
