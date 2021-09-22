import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.wrong};
  margin-bottom: ${RFValue(10)}px;
  margin-top: -${RFValue(3)}px;
  margin-left: ${RFValue(6)}px;
`;
