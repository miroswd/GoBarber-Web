import styled, { css } from 'styled-components';

import Tooltip from '../tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 16px;

  display: flex;
  align-items: center;

  background: #232129;
  border: 2px solid transparent;
  border-radius: 10px;

  color: #666360;

  & + div {
    margin-top: 8px;
  }

  /* Mantendo o error em cima, para quando clicar, o focused assuma o poder*/
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}



  input {
    flex: 1;
    background: transparent;

    border: 0;

    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

// Aplicando estilos no container do tooltip
// Como está passando de um elemento superior, tem q permitir no className
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
