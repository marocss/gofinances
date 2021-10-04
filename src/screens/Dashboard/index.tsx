import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useScrollToTop } from '@react-navigation/native';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
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
  LoadingContainer,
} from './styles';

export interface ListProps extends TransactionCardProps {
  id: string;
}

interface Card {
  amount: string;
  lastTransactionDate?: string;
}

interface Highlights {
  income: Card;
  outcome: Card;
  residue: Card;
}

export const Dashboard = () => {
  const [transactions, setTransactions] = useState<ListProps[]>([])
  const [highlights, setHighlights] = useState<Highlights>({} as Highlights);
  const [isLoading, setIsLoading] = useState(true)

  const listRef = useRef(null)

  const theme = useTheme() 

  const loadTransactions = async () => {
    const collectionKey = '@gofinances:transactions'
    const transactionsCollection = await AsyncStorage.getItem(collectionKey)
    const transactionsCollectionJson = transactionsCollection ? JSON.parse(transactionsCollection) : [];

    transactionsCollectionJson.sort((a: ListProps ,b: ListProps) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    });

    let totalIncome = 0
    let totalOutcome = 0

    const allTransactions: ListProps[] = transactionsCollectionJson.map(
      (item: ListProps) => {
        if (item.type === 'income') {
          totalIncome += Number(item.price)
        } else if (item.type === 'outcome') {
          totalOutcome += Number(item.price)
        }

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

    const accountBalance = totalIncome - totalOutcome
    
    let lastIncomeTransactionDate
    if (totalIncome > 0) {
      lastIncomeTransactionDate = new Date(allTransactions
        .filter(transaction => transaction.type === 'income')[0].date)
        .toLocaleDateString('en-US', { 
          weekday: "short", 
          month: 'long', 
          day: '2-digit' }
        )
    } else {
      lastIncomeTransactionDate = undefined
    }

    let lastOutcomeTransactionDate
    if (totalOutcome > 0) {
      lastOutcomeTransactionDate = new Date(allTransactions
        .filter(transaction => transaction.type === 'outcome')[0].date)
        .toLocaleDateString('en-US', { 
          weekday: "short", 
          month: 'long', 
          day: '2-digit' }
        )
    } else {
      lastOutcomeTransactionDate = undefined
    }

    let lastTransactionDay
    let lastTransactionMonth
    if (allTransactions.length > 0) {
      lastTransactionDay = new Date(allTransactions[0].date)
        .toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
        })
      lastTransactionMonth = new Date(allTransactions[0].date)
        .toLocaleDateString('en-US', {
          month: 'short',
        })
    } else {
      lastTransactionDay = undefined
      lastTransactionMonth = undefined
    }

    const lastIncomeTransactionInfo = (totalIncome > 0) ? 
      (`Last income was ${lastIncomeTransactionDate}`) : (undefined)

    const lastOutcomeTransactionInfo = (totalOutcome > 0) ? 
      (`Last income was ${lastOutcomeTransactionDate}`) : (undefined)

    const lastTransactionInfo = (allTransactions.length > 0) ? 
    (`Between ${lastTransactionMonth} 01 and ${lastTransactionDay}`) : (undefined)

    setHighlights({
      income: {
        amount: totalIncome.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        }),
        lastTransactionDate: lastIncomeTransactionInfo
      },
      outcome: {
        amount: totalOutcome.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        }),
        lastTransactionDate: lastOutcomeTransactionInfo
      }, 
      residue: {
        amount: accountBalance.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        }),
        lastTransactionDate: lastTransactionInfo
      }
    })
    
    setTransactions(allTransactions)
    setIsLoading(false)
  }

  const transactionsRefreshed = () => {
    if (listRef) {
      if (listRef.current) listRef.current.scrollToOffset({ animated: true, offset: 0 });
    }  
  }

  useScrollToTop(listRef)

  useEffect(() => {
    loadTransactions()
  }, []);

  useFocusEffect(
    useCallback(
      () => {
        loadTransactions()
      },
      [],
    )
  )

  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator color={theme.colors.two} size="large" />
      </LoadingContainer>
    )
  }

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
          amount={highlights.income.amount} 
          lastTransaction={highlights.income.lastTransactionDate}
          type="up"
          />
        <HighlightCard 
          title="Outcome" 
          amount={highlights.outcome.amount}
          lastTransaction={highlights.outcome.lastTransactionDate}
          type="down"
        />
        <HighlightCard 
          title="Total" 
          amount={highlights.residue.amount}
          lastTransaction={highlights.residue.lastTransactionDate}
          type="total"
        />
      </CardsSection>

      <TransactionsSection>
        <Title>Transactions</Title>
        
        <List 
          data={transactions}
          renderItem={({ item }) => <TransactionCard data={item} />} 
          keyExtractor={( item ) => item.id}
          ref={listRef}
          onContentSizeChange={transactionsRefreshed}
        />
      </TransactionsSection>
    </Container>
  );
}