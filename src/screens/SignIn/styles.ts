import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 69.5%;

  background-color: ${({ theme }) => theme.colors.one};

  justify-content: flex-end;
  align-items: center;
  /* padding-top: ${RFValue(128)}px; */
`;
  
export const TitleSection = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(27)}px;
  text-align: center;
  margin-top: ${RFValue(36)}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  text-align: center;
  margin-top: ${RFValue(112)}px;
  margin-bottom: ${RFValue(60)}px;
`;
  
export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.two};
  width: 100%;
  height: 30.5%;
`;

export const ButtonsSection = styled.View`
  margin-top: ${RFPercentage(-3.5)}px;
  padding: 0 ${RFValue(32)}px;

  justify-content: space-between
`;