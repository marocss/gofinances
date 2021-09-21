import React from 'react';

import { Container, Text, Icon } from './styles';

interface Props {
  text: string;
}

const Selector = ({ text }: Props) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Icon name="chevron-down" />
    </Container>
  )
}

export default Selector;