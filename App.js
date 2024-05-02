import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './Screen/LoginPage';
import HomePage from './Screen/HomePage';
import BesinlerPage from './Screen/BesinlerPage';
import AntrenmanPage from './Screen/AntrenmanPage';
import ProfilPage from './Screen/ProfilPage';
import IndeksPage from './Screen/IndeksPage';
import { firebase } from '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsA9EBrSbCRg-n_PFz08J_JHgziZtSiH4",
  authDomain: "fitnessapp-f2fa2.firebaseapp.com",
  projectId: "fitnessapp-f2fa2",
  storageBucket: "fitnessapp-f2fa2.appspot.com",
  messagingSenderId: "32045173210",
  appId: "1:32045173210:web:62470820297cc2f90518e3",
  measurementId: "G-29XDN3L1VM"
};



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
        <Stack.Screen name="Indeks"  component={IndeksPage}/>


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
