import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './Screen/LoginPage';
import HomePage from './Screen/HomePage';
import BesinlerPage from './Screen/BesinlerPage';
import AntrenmanPage from './Screen/AntrenmanPage';
import ProfilPage from './Screen/ProfilPage';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginPage}/>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomePage}/>
        <Stack.Screen name="Besinler"  component={BesinlerPage}/>
        <Stack.Screen name="Antrenman"  component={AntrenmanPage}/>
        <Stack.Screen name="Profil"  component={ProfilPage}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
