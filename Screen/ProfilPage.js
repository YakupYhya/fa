import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProfilPage = () => {
  const [kilo, setKilo] = useState('70');
  const [boy, setBoy] = useState('1.75');
  const [isEditing, setIsEditing] = useState(false);

  const handleGuncelle = () => {
    console.log("Kilo güncellendi:", kilo);
    console.log("Boy güncellendi:", boy);
    setIsEditing(false); // Güncelleme yapıldıktan sonra düzenleme modunu kapat
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./resimler/lol.png')} 
        style={styles.profileImage}
      />
      <Text style={styles.header}>Profil Bilgileri</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kilo:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={kilo}
            onChangeText={(text) => setKilo(text)}
            keyboardType="numeric"
          />
        ) : (
          <Text style={styles.text}>{kilo}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Boy:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={boy}
            onChangeText={(text) => setBoy(text)}
            keyboardType="numeric"
          />
        ) : (
          <Text style={styles.text}>{boy}</Text>
        )}
      </View>
      {isEditing ? (
        <TouchableOpacity
          style={styles.button}
          onPress={handleGuncelle}
        >
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsEditing(true)}
        >
          <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f7fff7',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#018B49',
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 18,
    width: '70%',
    backgroundColor: '#d8f3dc',
  },
  text: {
    fontSize: 18,
  },
  button: {
    borderWidth: 0,
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 20,
    backgroundColor: '#C1FF72',
    opacity: 0.9,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#018B49',
  },
});

export default ProfilPage;
