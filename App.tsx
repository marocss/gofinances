import React from 'react';
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import theme from './src/global/styles/theme';
import { Categories } from './src/screens/Categories';
import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';


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
      <NavigationContainer>
        <AppRoutes />
        {/* <Dashboard /> */}
        {/* <Register /> */}
        {/* <Categories /> */}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;