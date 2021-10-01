import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import {  View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native'
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
  NextButtonIcon
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
  const [categoriesSummary, setCategoriesSummary] = useState<CategorySummaryItem[]>([]);

  const theme = useTheme()

  const loadData = async () => {
    const transactionsCollection = await AsyncStorage.getItem(collectionKey)
    const transactions = transactionsCollection ? JSON.parse(transactionsCollection) : [];

    const outcomeTransactions = transactions.filter(
      (transaction: Transaction) => transaction.type === 'outcome'
    )

    const totalOutcome = outcomeTransactions.reduce(
      (accumulator: number, transaction: Transaction) => {
        const value = Number(transaction.price)

        return accumulator + value
    }, 0)

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
      // .toLocaleString('en-US', {
      //   style: 'decimal',
      //   minimumFractionDigits: 2
      // })
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
    console.log('total outcome', totalOutcome);
    console.log(totalByCategory);
  }

  useEffect(() => {
    loadData()
  }, [])



  return (
    <Container>
      <Header>
        <Title>Summary</Title>
      </Header>


      <Main
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight() + RFValue(8),
        }}
      >
        <NavSection>
          <PreviousButton>
            <PreviousButtonIcon name="chevron-left" />
          </PreviousButton>
          
          <Month>
            September, 2021
          </Month>

          <NextButton>
            <NextButtonIcon name="chevron-right" />
          </NextButton>
        </NavSection>


        <ChartSection>
          <VictoryPie 
            data={categoriesSummary}
            height={330}
            radius={128}
            x="percentOfTotal"
            y="amount"
            labelRadius={60}
            colorScale={categoriesSummary.map(category => category.color)}
            style={{
              labels: {
                fontSize: RFValue(14),
                fontWeight: 'bold',
                fill: theme.colors.shape
              }
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

    </Container>
  )
}