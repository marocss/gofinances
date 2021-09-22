import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFValue(100)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.one};
  
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(17)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const Category = styled.Pressable<CategoryProps>`
  width: 100%;
  padding: ${RFValue(13)}px;
  padding-left: ${RFValue(20)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive, theme }) => 
    isActive ? theme.colors.two_light : theme.colors.background
  };
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  margin-right: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};

`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 ${RFValue(20)}px;
  margin-bottom: ${RFValue(80)}px;
  /* background-color: ${({ theme }) => theme.colors.text}; */
`;