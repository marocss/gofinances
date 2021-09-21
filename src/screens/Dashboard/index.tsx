import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { HighlightCard } from '../../components/HighlightCard';
import { Footer } from '../../components/HighlightCard/styles';
import { TransactionCard } from '../../components/TransactionCard';
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


export const Dashboard = () => {
  const transactionsData = [
    {
      title: "Web development",
      amount: "$ 2,100.00",
      category: {
        name: 'Sales',
        icon: 'dollar-sign'
      },
      date: "04/13/2021",
    },
    {
      title: "Web development",
      amount: "$ 2,100.00",
      category: {
        name: 'Sales',
        icon: 'dollar-sign'
      },
      date: "04/13/2021",
    },
    {
      title: "Web development",
      amount: "$ 2,100.00",
      category: {
        name: 'Sales',
        icon: 'dollar-sign'
      },
      date: "04/13/2021",
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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: RFValue(80)
          }}
        />

        
      </TransactionsSection>
    </Container>
  );
}