import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

interface Props extends RectButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress, ...rest }: Props) => {
  return (
    <Container onPress={onPress} { ...rest }>
      <Text>{text}</Text>
    </Container>
  )
}

export default Button;