import React from 'react';
import { PressableProps } from 'react-native';
import { Container, Text, Icon } from './styles';

interface Props extends PressableProps {
  text: string;
  onPress: () => void;
}

const Selector = ({ text, onPress, ...rest }: Props) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Text 
        hasSelected={text === 'Category' ? false : true}
      >
        {text}
      </Text>
      <Icon name="chevron-down" />
    </Container>
  )
}

export default Selector;