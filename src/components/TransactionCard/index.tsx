import React from 'react';
import { View } from 'react-native';

import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'income' | 'outcome'
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export const TransactionCard = ({ data }: Props) => {
  const { type, title, amount, category, date} = data

  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>{type === 'outcome' && '- '} {amount}</Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}