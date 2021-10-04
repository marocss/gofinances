import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useScrollToTop } from '@react-navigation/native';
import { addMonths, format, subMonths } from 'date-fns';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { VictoryContainer, VictoryPie } from 'victory-native'
import { HistoryCard } from '../../components/HistoryCard';
import { categories } from '../../utils/categories';

import { 
  Container,
  Header,
  Title,
  Main,
  ChartSection,
  NavSection,
  PreviousButton,
  PreviousButtonIcon,
  Month,
  NextButton,
  NextButtonIcon,
  LoadingContainer,
} from './styles';

interface Transaction {
  type: 'income' | 'outcome'
  name: string;
  price: string;
  category: string;
  date: string;
}

interface CategorySummaryItem {
  key: string;
  title: string;
  amountString: string;
  amount: number;
  currencySymbol: string;
  color: string;
  percentOfTotal: string;
}

const collectionKey = '@gofinances:transactions';

export const Summary = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasTransactions, setHasTransactions] = useState(false)
  const [categoriesSummary, setCategoriesSummary] = useState<CategorySummaryItem[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date())

  const theme = useTheme()
  const scrollViewRef = useRef(null)
  const tabBarHeight = useBottomTabBarHeight()

  const handleDateSelection = (action: 'next' | 'previous') => {
    if (action === 'next') setSelectedDate(addMonths(selectedDate, 1))
    else if (action === 'previous') setSelectedDate(subMonths(selectedDate, 1))
  }

  const loadData = async () => {
    setIsLoading(true)
    const transactionsCollection = await AsyncStorage.getItem(collectionKey)
    const transactions = transactionsCollection ? JSON.parse(transactionsCollection) : [];

    const outcomeTransactions = transactions.filter(
      (transaction: Transaction) => 
        transaction.type === 'outcome' &&
        new Date(transaction.date).getMonth() === selectedDate.getMonth() &&
        new Date(transaction.date).getFullYear() === selectedDate.getFullYear()
    )

    const totalOutcome = outcomeTransactions.reduce(
      (accumulator: number, transaction: Transaction) => {
        const value = Number(transaction.price)

        return accumulator + value
    }, 0)

    if (totalOutcome > 0) {
      setHasTransactions(true)
    }

    const totalByCategory: CategorySummaryItem[]  = []

    categories.forEach(category => {
      let totalCategoryOutcome = 0
      let currentCategory = category.key

      outcomeTransactions.forEach((transaction: Transaction) => {
        const transactionCost = Number(transaction.price)

        if (transaction.category === currentCategory) {
          totalCategoryOutcome += transactionCost
        }
      })

      if (totalCategoryOutcome === 0) return

      const percentOfTotal = `${(totalCategoryOutcome / totalOutcome * 100).toFixed(0)}%`
      let title = category.name
      const total = totalCategoryOutcome.toFixed(2)
      const currencySymbol = '$'
      let color = category.color

      totalByCategory.push({
        key: currentCategory,
        title,
        amountString: total,
        amount: totalCategoryOutcome,
        currencySymbol,
        color,
        percentOfTotal,
      })
    })

    setCategoriesSummary(totalByCategory)
    setIsLoading(false)
  }
  
  useScrollToTop(scrollViewRef)

  useEffect(() => {
    loadData()
  }, [selectedDate])

  useFocusEffect(
    useCallback(
      () => {
        loadData()
      },
      [],
    )
  )
  
  return (
    <Container>
      <Header>
        <Title>Summary</Title>
      </Header>

      { isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.two} size="large" />
        </LoadingContainer>
      ) : (
        <Main
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: tabBarHeight
          }}
        >
          { hasTransactions && (
            <NavSection>
              <PreviousButton
                onPress={() => handleDateSelection('previous')}
              >
                <PreviousButtonIcon name="chevron-left" />
              </PreviousButton>
              
              <Month>
                {format(selectedDate, 'MMMM, yyyy')}
              </Month>

              <NextButton
                onPress={() => handleDateSelection('next')}          
              >
                <NextButtonIcon name="chevron-right" />
              </NextButton>
            </NavSection>
          )}

          <ChartSection>
            <VictoryPie 
              data={categoriesSummary}
              x="percentOfTotal"
              y="amount"
              labelRadius={100}
              height={260}
              padding={0}
              colorScale={categoriesSummary.map(category => category.color)}
              style={{
                labels: {
                  fontSize: RFValue(14),
                  fontWeight: 'bold',
                  fill: theme.colors.shape
                },
              }}
            />
          </ChartSection>

          {
            categoriesSummary.map(categorySummaryItem => (
              <HistoryCard
                key={categorySummaryItem.key}
                title={categorySummaryItem.title}
                currencySymbol={categorySummaryItem.currencySymbol}
                amount={categorySummaryItem.amountString}
                color={categorySummaryItem.color}
              />
            ))
          }
        </Main>

      )}

    </Container>
  )
}