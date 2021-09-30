import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
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

  const loadTransactions = async () => {
    const collectionKey = '@gofinances:transactions'

    const transactionsCollection = await AsyncStorage.getItem(collectionKey)

    const transactionsCollectionJson = transactionsCollection ? JSON.parse(transactionsCollection) : [];

    transactionsCollectionJson.sort((a: ListProps ,b: ListProps) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    });

    const transactions: ListProps[] = transactionsCollectionJson.map(
      (item: ListProps) => {
        const price = Number(item.price).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        const date = Intl.DateTimeFormat('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date))

        return {
          id: item.id,
          date,
          name: item.name,
          price,
          type: item.type,
          category: item.category,
        }
      }
    )
    
    setTransactions(transactions)
  }

  useEffect(() => {
    loadTransactions()
    
    // return () => {}
  }, []);

  useFocusEffect(
    useCallback(
      () => {
        loadTransactions()
      },
      [],
    )
  )

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