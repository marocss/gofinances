// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
// import { StyleSheet, Text, View } from 'react-native';

import { Dashboard } from './src/screens/Dashboard';

import theme from './src/global/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;