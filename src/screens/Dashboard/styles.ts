import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

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

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${RFValue(19)}px;
  /* margin-left: 24px; */
  /* background-color: red; */
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

// export const Title = styled.Text`
//   font-size: 24px;
//   color: ${({ theme }) => theme.colors.title};
//   font-family: ${({ theme }) => theme.fonts.bold};
// `;