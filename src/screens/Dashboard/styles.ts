import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(37)}px;
  /* height: 270px; */
  
  background-color: ${({ theme }) => theme.colors.one};
  padding-top: ${RFValue(47)}px;
  
  `;

export const HeaderFirstSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${RFValue(19)}px;
  /* background-color: red; */
`

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  /* margin-left: ${RFValue(19)}px; */
  /* margin-left: 24px; */
  /* background-color: red; */

  height: ${RFValue(37)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(37)}px;
  height: ${RFValue(37)}px;

  border-radius: 7px;
`;

export const TextArea = styled.View`
  margin-left: 17px;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.two};
  font-size: ${RFValue(19)}px;
`;
