import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import React, { useState } from 'react';
 
export default function ForgotPasswordPage({navigation}) {

    const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>

        <TextInput
          placeholder='E-posta Adresiniz'  
          style={styles.textInputStyle}
          onChangeText={setEmail}
          value={email}
        />
       
        <TouchableOpacity onPress={() => { /* Şifre Gönderme İşlemi olucak */ }} style={styles.button}>
          <Text style={styles.buttonText}>Şifre Gönder</Text>
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
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
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
      width:"70%",
      height: 40,
      alignItems:'center',
      justifyContent:"center",
      borderRadius: 50,
      marginVertical: 20,
      backgroundColor:"#C1FF72",
      opacity: 0.9,
    },
    buttonText:{
      fontWeight:"bold",
      fontSize: 18,
      color:"#018B49",
    },
});
