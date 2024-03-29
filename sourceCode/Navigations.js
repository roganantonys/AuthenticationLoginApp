import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/signInScreens/SignInScreen'; 
import SignUpScreen from './screens/SignUpScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import NewPassword from './screens/signInScreens/NewPassword';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgetPassword" component={PasswordResetScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations

const styles = StyleSheet.create({})