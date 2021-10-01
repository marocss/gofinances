import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${RFValue(43)}px;

  background-color: ${({theme}) => theme.colors.shape};
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${RFValue(21)}px;
  border-radius: 5px;
  
  border-left-width: ${RFValue(4)}px;
  border-left-color: ${({ color }) => color};
  margin-bottom: ${RFValue(7)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(13)}px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CurrencySymbol = styled.Text`
  color: ${({theme}) => theme.colors.title};
  /* font-family: ${({theme}) => theme.fonts.bold}; */
  font-size: ${RFValue(13)}px;
  margin-right: ${RFValue(2)}px;
`;

export const Value = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(13)}px;
`;
