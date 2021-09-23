import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Register } from '../screens/Register';
import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'


const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
  const theme = useTheme() 
  // const isTabBarHidden = Platform.OS === 'ios' ? false : true
  
  return (
    <Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="List"
        component={Dashboard}
        options={{
          tabBarActiveTintColor: theme.colors.two,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )),
          tabBarLabelPosition: 'beside-icon',
          // tabBarHideOnKeyboard: true,
          // tabBarStyle: {
          //   position: 'absolute'
          // }
        }}
      />
      <Screen 
        name="Register"
        component={Register}
        
        options={{
          tabBarActiveTintColor: theme.colors.two,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="attach-money"
              size={size}
              color={color}
            />
          )),
          tabBarLabelPosition: 'beside-icon',
          // tabBarHideOnKeyboard: isTabBarHidden
          // tabBarStyle: {
          //   position: 'absolute'
          // }
        }}
      />
      {/* <Screen 
        name="Summary"
        component={Register}
        options={{
          tabBarActiveTintColor: theme.colors.two,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="pie-chart"
              size={size}
              color={color}
            />
          )),
          tabBarLabelPosition: 'beside-icon'
        }}
      /> */}
    </Navigator>
  )
}
