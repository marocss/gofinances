import { Pressable  } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

interface IconProps {
  type: 'income' | 'outcome'
}

interface ContainerProps {
  isActive: boolean;
  type: 'income' | 'outcome';
  hasSelectedTransactionType: boolean;
}

export const Container = styled(Pressable)<ContainerProps>`
  align-items: center;
  border-width: ${({ hasSelectedTransactionType }) => 
    hasSelectedTransactionType ? 0 : 1.5 }px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text_light};
  border-radius: 5px;
  flex-direction: row;
  height: ${RFValue(50)}px;
  justify-content: center;
  width: 49%;
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
`;

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
