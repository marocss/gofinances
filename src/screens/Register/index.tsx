import React, { useState } from 'react';
import Button from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Label } from '../../components/Forms/Label';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import { Container, Header, Title, Form, InputSection, TransactionTypeButtonSection } from './styles';

export const Register = () => {
  const [transactionTypeSelected, setTransactionTypeSelected] = useState('')
  const [hasSelectedTransactionType, setHasSelectedTransactionType] = useState(false)

  function handleTransactionSelection(type: 'income' | 'outcome') {
    setTransactionTypeSelected(type)
    setHasSelectedTransactionType(true)
  }

  return (
    <Container>
      <Header>
        <Title>Registry</Title>
      </Header>
      <Form>
        <InputSection>
          <Label text="Name" />
          <Input placeholder="name" />
          <Label text="Price" />
          <Input placeholder="price" />

          <TransactionTypeButtonSection>
            <TransactionTypeButton 
              type="income" 
              text="Income"
              onPress={() => handleTransactionSelection('income')}
              isActive={transactionTypeSelected === 'income'}
              hasSelectedTransactionType={hasSelectedTransactionType}
            />
            <TransactionTypeButton 
              type="outcome" 
              text="Outcome"
              onPress={() => handleTransactionSelection('outcome')}
              isActive={transactionTypeSelected === 'outcome'}
              hasSelectedTransactionType={hasSelectedTransactionType}
            />
          </TransactionTypeButtonSection>
        </InputSection>
        <Button text="Submit" />
      </Form>
    </Container>
  )
}