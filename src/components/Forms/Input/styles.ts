import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  active?: boolean;
}

export const Container = styled(TextInput)<Props>`
  width: 100%;
  padding: ${RFValue(14)}px ${RFValue(16)}px;
  font-size: ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  margin-bottom: ${RFValue(7)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  border-width: 3px;
  border-color: ${({theme, active}) => active ? theme.colors.wrong : 'transparent'};
`;

