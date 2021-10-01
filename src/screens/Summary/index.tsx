import React from 'react';
import { View } from 'react-native';
import { HistoryCard } from '../../components/HistoryCard';

import { 
  Container,
  Header,
  Title
} from './styles';

export const Summary = () => {
  return (
    <Container>
      <Header>
        <Title>Summary</Title>
      </Header>

      <HistoryCard
        title="Shopping"
        currencySymbol="$"
        amount="300.00"
        color="red"
      />
    </Container>
  )
}