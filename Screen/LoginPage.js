import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Image,
  TouchableOpacity
 } from 'react-native';

import React, { useState } from 'react';
 
export default function LoginPage({navigation}) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('./resimler/lol2.png')}
        /> 

        <TextInput
          placeholder='Kullanıcı Adını Giriniz'  
          style={styles.textInputStyle}
          onChangeText={setName}
          value={name}
        />
       
        <TextInput 
          placeholder='Şifre Giriniz'
          style={styles.textInputStyle}
          onChangeText={setPassword}
          value={password} 
          secureTextEntry={true}   
        />

        <TouchableOpacity
          onPress={()=> navigation.navigate('Home')}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Giriş </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.bottomOptionText}>Şifremi Unuttum</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.bottomOptionText}>Kayıt Ol</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#f7fff7",
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 300,
      height: 250,
      marginBottom: 70,
    },
    textInputStyle:{
      width:'70%',
      height:50,
      borderRadius: 40,
      marginVertical: 10,
      paddingHorizontal: 20,
      backgroundColor:"#d8f3dc",
    },
    button:{
      width:"40%",
      height: 40,
      alignItems:'center',
      justifyContent:"center",
      borderRadius: 50,
      marginVertical: 50,
      backgroundColor:"#C1FF72",
      opacity: 0.9,
    },
    buttonText:{
        fontWeight:"bold",
        fontSize: 25,
        color:"#018B49",
    },
    bottomOptionText: {
      marginTop: 20,
      color: '#018B49',
      textDecorationLine: 'underline',
    },
});
