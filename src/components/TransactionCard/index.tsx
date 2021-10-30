import React from 'react';
import { 
  Container, 
  Title, 
  Amount, 
  Footer, 
  Category, 
  Icon, 
  CategoryName, 
  Date } from './styles';
  import { categories } from '../../utils/categories'


// interface Category {
//   name: string;
//   icon: string;
// }

export interface TransactionCardProps {
  type: 'income' | 'outcome';
  name: string;
  price: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export const TransactionCard = ({ data }: Props) => {
  const category = categories.filter(item => item.key === data.category)[0]

  const { type, name, price, date} = data
  return (
    <Container>
      <Title>{name}</Title>
      <Amount type={type}>{type === 'outcome' && '- '} {price}</Amount>

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