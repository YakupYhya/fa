import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const IndeksPage = () => {
  const [kilo, setKilo] = useState('');
  const [boy, setBoy] = useState('');
  const [indeks, setIndeks] = useState('');
  const [durum, setDurum] = useState('');

  const hesaplaIndeks = () => {
    if (kilo === '' || boy === '') {
      alert('Lütfen kilo ve boy değerlerini girin!');
      return;
    }
    const kiloNum = parseFloat(kilo);
    const boyNum = parseFloat(boy);
    const vki = kiloNum / (boyNum * boyNum);
    setIndeks(vki.toFixed(2));

    // VKİ'ye göre kişinin durumunu belirleyen fonksiyon
    if (vki < 18.5) {
      setDurum('Zayıf');
    } else if (vki >= 18.5 && vki <= 24.9) {
      setDurum('Normal Kilolu');
    } else if (vki >= 25 && vki <= 29.9) {
      setDurum('Kilolu');
    } else {
      setDurum('Obez');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vücut Kitle İndeksi Hesaplama</Text>

      <View style={styles.inputContainer}>
        <TextInput
          textAlign='center'
          style={styles.input}
          value={kilo}
          onChangeText={(text) => setKilo(text)}
          keyboardType="numeric"
          placeholder="Kilonuzu girin"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          textAlign='center'
          style={styles.input}
          value={boy}
          onChangeText={(text) => setBoy(text)}
          keyboardType="numeric"
          placeholder="Boyunuzu girin (metre cinsinde)"
          placeholderTextColor="#888"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={hesaplaIndeks}>
        <Text style={styles.buttonText}>Hesapla</Text>
      </TouchableOpacity>
      {indeks !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Vücut Kitle İndeksi: {indeks}</Text>
          <Text style={styles.durum}>Durum: {durum}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7fff7',

  },
  header: {
    fontWeight:"bold",
    fontSize:25,
    color:"#018B49",
    marginBottom:50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width:'70%',
    height:50,
    borderRadius:30,
    marginVertical:10,
    textAlign:"center",
    fontWeight:"bold",
    backgroundColor:"#d8f3dc",
  },
  button: {
    borderWidth:0,
    width:"60%",
    height:45,
    alignItems:'center',
    justifyContent:"center",
    borderRadius:50,
    marginVertical:20,
    backgroundColor:"#C1FF72",
    opacity:0.9,
  },
  buttonText: {
    fontWeight:"bold",
    fontSize:25,
    color:"#018B49",
    
  },
  resultContainer: {
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color:"#018B49",
  },
  durum: {
    marginTop: 10,
    fontSize: 18,
    color:"#018B49",
  },
});

export default IndeksPage;
