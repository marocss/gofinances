import React from 'react';
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
 } from './styles';

export const Card = () => {
  return (
    <Container>
      <Header>
        <Title>Income</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>$ 3.400,00</Amount>
        <LastTransaction>Last income was on april 13th</LastTransaction>
      </Footer>
    </Container>
  );
}