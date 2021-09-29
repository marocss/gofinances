import React from 'react';
import { PressableProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Icon, Text, TypeButton } from './styles';

// interface Props extends RectButtonProps {
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
      // isActive={isActive} 
      // type={type} 
      hasSelectedTransactionType={hasSelectedTransactionType} 
    >
      <TypeButton
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
      </TypeButton>
    </Container>
  )
}

