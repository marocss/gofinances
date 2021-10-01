import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { VictoryContainer } from 'victory-native';

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

export const Main = styled.ScrollView`
  flex: 1;
`;

export const ChartSection = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(28)}px;
  margin-bottom: ${RFValue(28)}px;
`;

export const NavSection = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: ${RFValue(43)}px;
`;

export const PreviousButton = styled.Pressable`
 
`;

export const PreviousButtonIcon = styled(Feather)`
  font-size: ${RFValue(21)}px;
`;

export const Month = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const NextButton = styled.Pressable`
 
`;

export const NextButtonIcon = styled(Feather)`
  font-size: ${RFValue(21)}px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;