import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  /* width: 300px; */
  width: ${RFValue(280)}px;
  /* height: 230px; */
  height: ${RFValue(184)}px;

  border-radius: 7px;
  /* padding: 19px 23px; */
  padding: ${RFValue(15)}px ${RFValue(19)}px;
  /* padding-bottom: 42px; */
  padding-bottom: ${RFValue(34)}px;
  /* margin-right: 16px; */
  margin-right: ${RFValue(13)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  /* font-size: 14px; */
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};

`;

export const Icon = styled(Feather)`
  /* font-size: 40px; */
  font-size: ${RFValue(35)}px;
  margin-top: ${RFValue(1)}px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  /* font-size: 32px; */
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  /* margin-top: 35px; */
  margin-top: ${RFValue(36)}px;

`;

export const LastTransaction = styled.Text`
  /* font-size: 12px; */
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
