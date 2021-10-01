import React from 'react';
import { View } from 'react-native';
import { 
  Container,
  Title,
  Amount,
  CurrencySymbol,
  Value
} from './styles';

interface HistoryCardProps {
  title: string;
  amount: string;
  color: string;
  currencySymbol: string;
}

export const HistoryCard = ({
  title,
  amount,
  color,
  currencySymbol
}: HistoryCardProps) => {
  return (
    <Container
      color={color}
    >
      <Title>{title}</Title>
      <Amount>
        <CurrencySymbol>{currencySymbol}</CurrencySymbol>
        <Value>{amount}</Value>
      </Amount>
    </Container>
  )
}