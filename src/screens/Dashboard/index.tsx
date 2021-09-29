import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
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
  List,
  LogoutButton,
} from './styles';

export interface ListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = () => {
  const [transactions, setTransactions] = useState<ListProps[]>([])

  // const transactionsData: ListProps[] = [
  //   {
  //     id: '0',
  //     type: 'income',
  //     title: "Web development",
  //     amount: "$ 3,000.00",
  //     category: {
  //       name: 'Sales',
  //       icon: 'dollar-sign'
  //     },
  //     date: "04/16/2021",
  //   },
  //   {
  //     id: '2',
  //     type: 'outcome',
  //     title: "Pizzy Burger",
  //     amount: "$ 50.00",
  //     category: {
  //       name: 'Food',
  //       icon: 'coffee'
  //     },
  //     date: "04/09/2021",
  //   },
  //   {
  //     id: '3',
  //     type: 'outcome',
  //     title: "Rent",
  //     amount: "$ 2,500.00",
  //     category: {
  //       name: 'Living',
  //       icon: 'home'
  //     },
  //     date: "04/05/2021",
  //   },
  // ];

  const loadTransactions = async () => {
    const collectionKey = '@gofinances:transactions'

    const transactionsCollection = await AsyncStorage.getItem(collectionKey)

    const transactionsCollectionJson = transactionsCollection ? JSON.parse(transactionsCollection) : [];

    transactionsCollectionJson.sort((a: ListProps ,b: ListProps) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    });

    const transactionsFormatted: ListProps[] = transactionsCollectionJson.map((transaction: ListProps) => {
      const price = Number(transaction.price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })

      const date = Intl.DateTimeFormat('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
      }).format(new Date(transaction.date))

      return {
        id: transaction.id,
        date,
        name: transaction.name,
        price,
        type: transaction.type,
        category: transaction.category,
      }

    })

    // transactionsFormatted.sort((a, b) => Date(a.date) - Date(b.date))
    // transactionsFormatted.sort(function(a,b){
    //   // Turn your strings into dates, and then subtract them
    //   // to get a value that is either negative, positive, or zero.
    //   return new Date(a.date) - new Date(b.date);
    // });

    console.log('formattedList: ', transactionsFormatted );
    
    setTransactions(transactionsFormatted)
  }

  useEffect(() => {
    loadTransactions()
    
    // return () => {
      
    // }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderFirstSection>
          <User>
            <Avatar 
              source={{ 
                uri: 'https://avatars.githubusercontent.com/u/34945925?v=4' 
              }} 
            />

            <TextArea>
              <Greeting>Yo, </Greeting>
              <Name>Marcos R. Leite Junior</Name>
            </TextArea>
          </User>

          <LogoutButton onPress={() => {}}>
            <Icon name="power"/>
          </LogoutButton>
        </HeaderFirstSection>
      </Header>

      <CardsSection>
        <HighlightCard 
          title="Income" 
          amount="$ 3,400.00" 
          lastTransaction="Last income was on April 13"
          type="up"
        />
        <HighlightCard 
          title="Outcome" 
          amount="$ 400.00" 
          lastTransaction="Last outcome was on April 2"
          type="down"
        />
        <HighlightCard 
          title="Total" 
          amount="$ 23,657.02" 
          lastTransaction="Between April 1 and April 19"
          type="total"
        />
      </CardsSection>

      <TransactionsSection>
        <Title>Transactions</Title>
        
        <List 
          data={transactions}
          renderItem={({ item }) => <TransactionCard data={item} />} 
          keyExtractor={( item ) => item.id}
        />
      </TransactionsSection>
    </Container>
  );
}