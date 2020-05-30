import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationError from '../../utils/getValidationErrors';
// Components
import { useAuth } from '../../hooks/AuthContext';
import Input from '../../Components/input';
import Button from '../../Components/button';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({}); // Para zerar os erros, caso dê sucesso

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'), // se tem q ter 6 caracteres, ele se torna obrigatório
        });

        await schema.validate(data, {
          abortEarly: false, // retorna todos os erros
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        console.log(err);

        const errors = getValidationError(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="/">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      {/* Separando o background em div, para facilitar na responsividade */}
      <Background />
    </Container>
  );
};

export default Signin;
