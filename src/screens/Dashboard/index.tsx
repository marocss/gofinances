import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { 
  Container, 
  Header, 
  HeaderFirstSection, 
  User, 
  Avatar, 
  TextArea, 
  Greeting, 
  Name, 
  Icon,
  CardsSection,
  TransactionsSection,
  Title,
  List
} from './styles';

export interface ListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = () => {
  const transactionsData: ListProps[] = [
    {
      id: '0',
      type: 'income',
      title: "Web development",
      amount: "$ 3,000.00",
      category: {
        name: 'Sales',
        icon: 'dollar-sign'
      },
      date: "04/16/2021",
    },
    {
      id: '2',
      type: 'outcome',
      title: "Pizzy Burger",
      amount: "$ 50.00",
      category: {
        name: 'Food',
        icon: 'coffee'
      },
      date: "04/09/2021",
    },
    {
      id: '3',
      type: 'outcome',
      title: "Rent",
      amount: "$ 2,500.00",
      category: {
        name: 'Living',
        icon: 'home'
      },
      date: "04/05/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <HeaderFirstSection>
          <User>
            <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/34945925?v=4' }} />

            <TextArea>
              <Greeting>Yo, </Greeting>
              <Name>Marcos R. Leite Junior</Name>
            </TextArea>
          </User>

          <Icon name="power"/>
        </HeaderFirstSection>
      </Header>

      <CardsSection>
        <HighlightCard 
          title="Income" 
          amount="$ 3,400.00" 
          lastTransaction="Last income was on april 13th"
          type="up"
        />
        <HighlightCard 
          title="Outcome" 
          amount="$ 400.00" 
          lastTransaction="Last outcome was on april 2nd"
          type="down"
        />
        <HighlightCard 
          title="Total" 
          amount="$ 23,657.02" 
          lastTransaction="Between 1st and 19th"
          type="total"
        />
      </CardsSection>

      <TransactionsSection>
        <Title>Transactions</Title>
        
        <List 
          data={transactionsData}
          renderItem={({ item }) => <TransactionCard data={item} />} 
          keyExtractor={( item ) => item.id}
        />
      </TransactionsSection>
    </Container>
  );
}