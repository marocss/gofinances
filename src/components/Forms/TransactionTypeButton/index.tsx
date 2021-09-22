import React from 'react';
import { PressableProps } from 'react-native';
import { Container, Icon, Text } from './styles';

interface Props extends PressableProps {
  text: string;
  type: 'income' | 'outcome';
  isActive: boolean;
  hasSelectedTransactionType: boolean;
}

const iconOptions = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle'
}

export const TransactionTypeButton = ({
  text,
  type,
  isActive,
  hasSelectedTransactionType,
  ...rest
}: Props) => {

  return (
    <Container 
      {...rest} 
      isActive={isActive} 
      type={type} 
      hasSelectedTransactionType={hasSelectedTransactionType} 
    >
      <Icon 
        name={iconOptions[type]} 
        type={type}
      />
      <Text>{text}</Text>
    </Container>
  )
}

