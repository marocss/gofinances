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
  background-color: ${({ theme }) => theme.colors.one};
  padding-top: ${RFValue(53)}px;  
`;

export const HeaderFirstSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${RFValue(20)}px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${RFValue(43)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(43)}px;
  height: ${RFValue(43)}px;
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
  font-size: ${RFValue(22)}px;
`;

export const CardsSection = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 20 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFValue(116)}px;
`;
