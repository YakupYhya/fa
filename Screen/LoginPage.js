import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity
 } from 'react-native';

 import React,{ useState} from 'react';

export default function LoginPage({navigation}) {

    const [name, setName] = useState("")
    const [passord,setPassword]=useState("")

  return (
    <View style={styles.container}>
     
        <Image 

        style={{width:300,height:250,marginVertical:70 }}
        source={require('./resimler/lol2.png')}
        /> 

       <TextInput
       placeholder='Kullanıcı Adını Giriniz'  
       style={styles.textInputStyle}
       onChangeText={setName}
       value={name}
       />
       
       <Text  style={ styles.TextStyle} ></Text>

       <TextInput 
       placeholder='Şifre Giriniz'
       style={styles.textInputStyle}
       onChangeText={setPassword}
       value={passord} 
       secureTextEntry={true}   />


       
       <TouchableOpacity
              onPress={()=> navigation.navigate('Home')}
              style={styles.button}
       >
        <Text style={styles.butonText}> Giriş </Text>
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
    textInputStyle:{
      width:'70%',
      height:50,
      borderRadius:40,
      marginVertical:1,
      textAlign:"center",
      fontWeight:"bold",
      backgroundColor:"#d8f3dc",
      
    },
  
    button:{
      borderWidth:0,
      width:"40%",
      height:40,
      alignItems:'center',
      justifyContent:"center",
      borderRadius:50,
      marginVertical:50,
      backgroundColor:"#C1FF72",
      opacity:0.9,
  
  
    },
    butonText:{
        fontWeight:"bold",
        fontSize:25,
        color:"#018B49",
  
      
    },
  
    TextStyle:{
      fontWeight:"800",
      fontSize:20,
      color:"white",
    },
  });