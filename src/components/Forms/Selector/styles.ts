import { Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';

interface SelectorTextProps {
  hasSelected: boolean;
}

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0 ${RFValue(14)}px;
  margin-top: 16px;
`;

export const Text = styled.Text<SelectorTextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ hasSelected, theme }) => 
    hasSelected ? theme.colors.title : theme.colors.text
  };
  font-size: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;
