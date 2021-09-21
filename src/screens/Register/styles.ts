import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.one};
  width: 100%;
  /* height: 113px; */
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: flex-end;
  /* padding-bottom: 19px; */
  padding-bottom: ${RFValue(17)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  `;

export const Form = styled.View`
  flex: 1;
  padding: ${RFValue(20)}px;
  /* margin-top: 24px; */
  margin-bottom: ${RFValue(80)}px;
  justify-content: space-between;
`;

export const InputSection = styled.View`
  /* padding: 0 ${RFValue(20)}px; */
  /* margin-top: 24px; */
  /* margin-top: ${RFValue(21)}px; */
`;
