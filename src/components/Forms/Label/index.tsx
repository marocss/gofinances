import React from 'react';
import { Container } from './styles';

type Props = {
  text: string;
}

export const Label = ({ text }: Props) => {
  return (
    <Container>
      {text}
    </Container>
  )
}