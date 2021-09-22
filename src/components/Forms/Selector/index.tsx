import React from 'react';

import { Container, Text, Icon } from './styles';

interface Props {
  text: string;
  onPress: () => void;
}

const Selector = ({ text, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
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