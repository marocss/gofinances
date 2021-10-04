import React from 'react';
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import 'intl'
import 'intl/locale-data/jsonp/en-US'
import 'intl/locale-data/jsonp/pt-BR'
import theme from './src/global/styles/theme';
// import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes'
import { AppRoutes } from './src/routes/app.routes';
import { StatusBar } from 'react-native';
import { SignIn } from './src/screens/SignIn';
import { AuthProvider } from './src/hooks/auth';


const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;