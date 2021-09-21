import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.two};
  /* height: 56px; */
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  /* font-size: ${RFValue(14)}px; */
  font-size: ${RFValue(12)}px;
`;

