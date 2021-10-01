import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;


export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.one};
  width: 100%;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(17)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  `;

export const CategoriesSummarySection = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    paddingHorizontal: 24,
  }
})`
  /* flex: 1; */
  /* background-color: ${({ theme }) => theme.colors.background}; */
`;