import React from 'react';
import { NativeBaseProvider,extendTheme, Text, Box, Button, Heading} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuthentication from './Api/useAuthentication';

import AppNavigator from './Navigations/AppNavigator';
// import FeedScreen from './src/Screens/FeedScreen';
// import AppButton from './src/Components/AppButton';
// import WelcomeScreen from './pages/Welcome';
import WelcomeNavigator from "./Navigations/WelcomeNavigator"
const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const user= useAuthentication();
  const stack= createNativeStackNavigator();
  return (
    <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          {user?<AppNavigator user={user}/> : <WelcomeNavigator/> }                               
        </NavigationContainer>
    </NativeBaseProvider>
  );
}