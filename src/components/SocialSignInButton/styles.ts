import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Button = styled.Pressable`
  flex-direction: row;
  height: ${RFValue(50)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: ${RFValue(14)}px;
  `;

export const LogoSection = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(14)}px;
  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;

`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;
  margin-left: -${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(12)}px;
`;
