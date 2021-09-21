import React from 'react';
// import { TextInputProps } from 'react-native';

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