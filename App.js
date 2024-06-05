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
import SifreUnuttumPage from './Screen/SifreUnuttumPage';
import KayıtOlPage from './Screen/KayıtOlPage';
import BesinOnerPage from './Screen/BesinOnerPage';
import KiloVermekPage from './Screen/KiloVermekPage'; 
import AntrenmanKıloluPage from './Screen/AntrenmanKıloluPage';
import AntrenmanZayıfPage from './Screen/AntrenmanZayıfPage';


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
        <Stack.Screen name="Indeks"  component={IndeksPage} />
        <Stack.Screen name="SifreUnuttum"  component={SifreUnuttumPage} options={{ headerTitle: ' ', headerBackTitleVisible: true }}/>
        <Stack.Screen name="KayıtOl"  component={KayıtOlPage} options={{ headerTitle: ' ', headerBackTitleVisible: true }}/>
        <Stack.Screen name="BesinÖner"  component={BesinOnerPage} options={{ headerTitle: ' ', headerBackTitleVisible: true }}/>
        <Stack.Screen name="KiloVermek"  component={KiloVermekPage} options={{ headerTitle: ' ', headerBackTitleVisible: true }}/>
        <Stack.Screen name="AntrenmanZayıf"  component={AntrenmanZayıfPage}   options={{ headerTitle: ' ', headerBackTitleVisible: true }}/>
        <Stack.Screen name="AntrenmanKilolu"  component={AntrenmanKıloluPage} options={{ headerTitle: ' ', headerBackTitleVisible: true }}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}
