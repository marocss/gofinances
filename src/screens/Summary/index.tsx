import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {  View } from 'react-native';

import { HistoryCard } from '../../components/HistoryCard';
import { categories } from '../../utils/categories';

import { 
  Container,
  Header,
  Title,
  CategoriesSummarySection,
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
  amount: string;
  currencySymbol: string;
  color: string;
}

const collectionKey = '@gofinances:transactions';

export const Summary = () => {
  const [categoriesSummary, setCategoriesSummary] = useState<CategorySummaryItem[]>([]);

  const loadData = async () => {
    const transactionsCollection = await AsyncStorage.getItem(collectionKey)
    const transactions = transactionsCollection ? JSON.parse(transactionsCollection) : [];

    const outcomeTransactions = transactions.filter(
      (transaction: Transaction) => transaction.type === 'outcome'
    )

    const totalByCategory: CategorySummaryItem[]  = []

    categories.forEach(category => {
      let totalOutcome = 0
      let currentCategory = category.key

      outcomeTransactions.forEach((transaction: Transaction) => {
        const transactionCost = Number(transaction.price)

        if (transaction.category === currentCategory) {
          totalOutcome += transactionCost
        }
      })

      if (totalOutcome === 0) return

      let title = category.name
      const total = totalOutcome.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2
      })
      const currencySymbol = '$'
      let color = category.color

      totalByCategory.push({
        key: currentCategory,
        title: title,
        amount: total,
        currencySymbol: currencySymbol,
        color: color,
      })
    })

    setCategoriesSummary(totalByCategory)
    console.log(outcomeTransactions);   
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


      <CategoriesSummarySection>
        {
          categoriesSummary.map(categorySummaryItem => (
            <HistoryCard
              key={categorySummaryItem.key}
              title={categorySummaryItem.title}
              currencySymbol={categorySummaryItem.currencySymbol}
              amount={categorySummaryItem.amount}
              color={categorySummaryItem.color}
            />
          ))
        }
      </CategoriesSummarySection>

    </Container>
  )
}