import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from './src/context/MenuContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </MenuProvider>
  );
}

