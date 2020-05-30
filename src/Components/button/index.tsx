import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  // children => conteúdo do botão
  // rest => o resto das propriedades
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default button;
