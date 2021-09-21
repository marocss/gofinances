import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
    (type === 'total') ? theme.colors.two : theme.colors.shape
  };
  width: ${RFValue(283)}px;
  height: ${RFValue(184)}px;
  border-radius: 7px;
  padding: ${RFValue(15)}px ${RFValue(19)}px;
  padding-bottom: ${RFValue(34)}px;
  margin-right: ${RFValue(13)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  /* color: ${({ theme }) => theme.colors.title}; */
  color: ${({ theme, type }) => 
    (type === 'total') ? theme.colors.shape : theme.colors.title
  };
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(35)}px;
  margin-top: ${RFValue(1)}px;

  ${({type}) => 
    type === 'up' && css`color: ${({ theme }) => theme.colors.correct};`
  }
  ${({type}) => 
    type === 'down' && css`color: ${({ theme }) => theme.colors.wrong};`
  }
  ${({type}) => 
    type === 'total' && css`color: ${({ theme }) => theme.colors.shape};`
  }
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  /* font-size: 32px; */
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  /* color: ${({ theme }) => theme.colors.title}; */
  color: ${({ theme, type }) => 
    (type === 'total') ? theme.colors.shape : theme.colors.title
  };
  margin-top: ${RFValue(36)}px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  /* color: ${({ theme }) => theme.colors.text}; */
  color: ${({ theme, type }) => 
    (type === 'total') ? theme.colors.shape : theme.colors.text
  };
`;
