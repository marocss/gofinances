import { Button, Pressable  } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface IconProps {
  type: 'income' | 'outcome'
}

interface TypeButtonProps {
  isActive: boolean;
  type: 'income' | 'outcome';
  hasSelectedTransactionType: boolean;
}

interface ContainerProps {
  hasSelectedTransactionType: boolean;
}

export const Container = styled.View<ContainerProps>`
  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ hasSelectedTransactionType, theme }) => 
    hasSelectedTransactionType ? theme.colors.background : theme.colors.text_light};
  border-radius: 5px;
  width: 49%;
`;

export const TypeButton = styled(Pressable)<TypeButtonProps>`
  align-items: center;
  flex-direction: row;
  height: ${RFValue(50)}px;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  opacity: ${({ hasSelectedTransactionType }) => 
    hasSelectedTransactionType ? 0.5 : 1 };
  
  ${({ isActive, type }) => isActive && type === 'income' && 
    css`
      background-color: ${({ theme }) => theme.colors.correct_light};
      opacity: 1;
    `
  }

  ${({ isActive, type }) => isActive && type === 'outcome' && 
    css`
      background-color: ${({ theme }) => theme.colors.wrong_light};
      opacity: 1;
    `
  }
`

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(21)}px;
  margin-right: ${RFValue(11)}px;
  color: ${({ theme, type }) => 
    type === 'income' ? theme.colors.correct : theme.colors.wrong
  };
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
