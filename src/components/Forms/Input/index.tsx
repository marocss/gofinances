import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

// type Props = TextInputProps

interface Props extends TextInputProps {
  active?: boolean;
}

export const Input = ({
  active = true,
  ...rest 
}: Props) => {
  return (
    <Container active={active} { ...rest }/>
  )
}
