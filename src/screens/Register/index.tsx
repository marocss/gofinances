import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';
import { Categories } from '../Categories';
import Button from '../../components/Forms/Button';
import { HookFormInput } from '../../components/Forms/HookFormInput';
import { Label } from '../../components/Forms/Label';
import Selector from '../../components/Forms/Selector';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import { 
  Container, 
  Header, 
  Title, 
  Form, 
  InputSection, 
  TransactionTypeButtonSection 
} from './styles';

interface FormData {
  name: string;
  price: string;
}

export const Register = () => {
  const [transactionTypeSelected, setTransactionTypeSelected] = useState('')
  const [hasSelectedTransactionType, setHasSelectedTransactionType] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
  })

  const {
    control,
    handleSubmit
  } = useForm()

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

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      price: form.price,
      transactionTypeSelected,
      category: category.key
    }

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Registry</Title>
      </Header>
      <Form>
        <InputSection>
          <Label text="Name" />
          <HookFormInput
            placeholder="Name"
            name="name"
            control={control}
          />

          <Label text="Price" />
          <HookFormInput
            placeholder="Price"
            name="price"
            control={control}
          />

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
        <Button text="Submit" onPress={handleSubmit(handleRegister)} />
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