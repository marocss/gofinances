import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface Props extends TouchableOpacityProps {
  text: string
}

const Button = ({ text, ...rest }: Props) => {
  return (
    <Container { ...rest }>
      <Text>{text}</Text>
    </Container>
  )
}

export default Button;