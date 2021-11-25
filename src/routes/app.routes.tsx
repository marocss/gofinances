import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Register } from '../screens/Register';
import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'
import { Summary } from '../screens/Summary';


const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
  const theme = useTheme() 
  
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="Dashboard"
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
          tabBarLabelPosition: 'beside-icon'
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
          tabBarLabelPosition: 'beside-icon'
        }}
      />
      <Screen 
        name="Summary"
        component={Summary}
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
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Navigator>
  )
}
