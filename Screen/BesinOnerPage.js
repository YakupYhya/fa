import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function BesinOnerPage({navigation}) {
  return (
    <View style={styles.container}>

      <Image
        source={require('./resimler/lol2.png')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("BesinÖner")}>
          <Text style={styles.buttonText}>Besin Tarifleri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("Besinler")}>
          <Text style={styles.buttonText}>Kilo almak için besinler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7fff7',
  },
  profileButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor:"green",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    color: '#fff',
    fontSize: 20,
    fontWeight:"bold"
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    top: 100, 
    alignSelf: 'center', 
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 150,
    width: '100%', 
    paddingHorizontal: 20, 
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%', 
  },
});
