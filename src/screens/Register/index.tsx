import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
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

const schema = Yup.object().shape({
  name: Yup.string().required('Name field is required.'),
  price: Yup.number()
    .required('Price field is required.')
    .typeError('Inform a numeric value')
    .positive('Price value can\'t be negative')
}).required()


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
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
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

  function handleRegister(form: FormData) {
    if (!transactionTypeSelected) {
      // TODO: use react hook form
      return Alert.alert('Please select the transaction type')
    }

    if (category.key === 'category') {
      return Alert.alert('Please select a category')
    }

    const data = {
      name: form.name,
      price: form.price,
      transactionTypeSelected,
      category: category.key
    }

    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              autoCapitalize="sentences"
              autoCorrect={false}
              clearButtonMode="while-editing"
              error={errors.name && errors.name.message}
            />

            <Label text="Price" />
            <HookFormInput
              placeholder="Price"
              name="price"
              control={control}
              keyboardType="numeric"
              error={errors.price && errors.price.message}

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
    </TouchableWithoutFeedback>
  )
}
