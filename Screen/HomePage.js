import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileButton}
      onPress={()=> navigation.navigate("Profil")}>
        <Text style={styles.buttonText}>Profilim</Text>
      </TouchableOpacity>
      <Image
        source={require('./resimler/lol2.png')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>İndeks Hesapla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("Besinler")}>
          <Text style={styles.buttonText}>Besin Tarifleri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate("Antrenman")}>
          <Text style={styles.buttonText}>Antrenmanlar</Text>
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
    top: 100, // Üst kenara 50 piksel mesafe ekledik
    alignSelf: 'center', // Resmi ortalamak için
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 150,
    width: '100%', // Butonların yatayda tam ortalanması için
    paddingHorizontal: 20, // Butonlar arasındaki yatay boşluklar için
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%', // Butonların yatayda tam ortalanması için
  },
});
