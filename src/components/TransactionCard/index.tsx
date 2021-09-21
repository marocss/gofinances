import React from 'react';
import { View } from 'react-native';

import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles';

export const TransactionCard = () => {
  return (
    <Container>
      <Title>Web development</Title>
      <Amount>$ 2,100.00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Sales</CategoryName>
        </Category>

        <Date>04/13/2021</Date>
      </Footer>
    </Container>
  )
}