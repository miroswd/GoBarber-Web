import styled from 'styled-components';

import { shade } from 'polished';
import SignupBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch; /* Tamanho total da página */
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center; /* Centraliza o align e justify */

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      margin-top: 24px;
      display: block;

      color: #f4ede8;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    /* > estiliza os a q vierem diretamente no content, e não no form */
    margin-top: 24px;

    display: flex;
    align-items: center;

    color: #f4ede8;
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignupBackground}) no-repeat center;
  background-size: cover;
`;
