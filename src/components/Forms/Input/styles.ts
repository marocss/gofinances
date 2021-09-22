import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(14)}px ${RFValue(16)}px;
  font-size: ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  margin-bottom: ${RFValue(7)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

