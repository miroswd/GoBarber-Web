import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';
import SigninBackground from '../../assets/sign-in-background.png';

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
  justify-content: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }

`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

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

    color: #ff9000;
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SigninBackground}) no-repeat center;
  background-size: cover;
`;
