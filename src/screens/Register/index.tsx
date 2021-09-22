import React, { useState } from 'react';
import { Modal } from 'react-native';
import Button from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Label } from '../../components/Forms/Label';
import Selector from '../../components/Forms/Selector';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { Categories } from '../Categories';

import { 
  Container, 
  Header, 
  Title, 
  Form, 
  InputSection, 
  TransactionTypeButtonSection 
} from './styles';

export const Register = () => {
  const [transactionTypeSelected, setTransactionTypeSelected] = useState('')
  const [hasSelectedTransactionType, setHasSelectedTransactionType] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  })

  function handleTransactionSelection(type: 'income' | 'outcome') {
    setTransactionTypeSelected(type)
    setHasSelectedTransactionType(true)
  }

  function handleOpenCategoriesModal() {
    setIsModalOpen(true)
  }
  
  function handleCloseCategoriesModal() {
    setIsModalOpen(false)
  }

  return (
    <Container>
      <Header>
        <Title>Registry</Title>
      </Header>
      <Form>
        <InputSection>
          <Label text="Name" />
          <Input placeholder="Name" />
          <Label text="Price" />
          <Input placeholder="Price" />

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
          <Selector 
            text={category.name} 
            onPress={handleOpenCategoriesModal}
          />
        </InputSection>
        <Button text="Submit" />
      </Form>

      <Modal visible={isModalOpen}>
        <Categories 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseCategoriesModal}
        />
      </Modal>

    </Container>
  )
}