import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationError from '../../utils/getValidationErrors';

// Components
import Input from '../../Components/input';
import Button from '../../Components/button';

import { Container, Content, Background, AnimationContainer } from './styles';
import logoImg from '../../assets/logo.svg';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({}); // Para zerar os erros, caso dê sucesso
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'), // se tem q ter 6 caracteres, ele se torna obrigatório
      });
      await schema.validate(data, {
        abortEarly: false, // retorna todos os erros
      });
    } catch (err) {
      console.log(err);

      const errors = getValidationError(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      {/* Separando o background em div, para facilitar na responsividade */}
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
