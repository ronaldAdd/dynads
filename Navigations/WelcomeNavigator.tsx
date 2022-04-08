import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreens from '../pages/Welcome';
import LoginScreens from '../pages/LogInScreen';
import SignUpScreens from '../pages/SignUpScreen';

const Stack = createNativeStackNavigator();
const StackNavigator= () => (
<Stack.Navigator>
    <Stack.Screen name='welcomeScreen' component={WelcomeScreens}
    options={{
        headerShown:false
    }} />
    <Stack.Screen name='login' component={LoginScreens} />
    <Stack.Screen name='signup' component={SignUpScreens} /> 
</Stack.Navigator>
)
function WelcomeNavigator() {
  return (
    <StackNavigator/>
  )
}

export default WelcomeNavigator