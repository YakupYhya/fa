import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';

const IndeksPage = ({navigation}) => {
  const [kilo, setKilo] = useState('');
  const [boy, setBoy] = useState('');
  const [indeks, setIndeks] = useState('');
  const [durum, setDurum] = useState('');
  const [showOptions, setShowOptions] = useState(false); // Butonların görünürlüğünü kontrol etmek için

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

    setShowOptions(true); // Sonuçları göster ve butonları göster
  };

  const besinOner = () => {
    if (durum === 'Zayıf' || durum === 'Normal Kilolu') {
      navigation.navigate("Besinler");
    } else if (durum === 'Kilolu' || durum === 'Obez') {
      navigation.navigate("KiloVermek");
    }
  };

  const hareketOner = () => {
    if (durum === 'Zayıf' || durum === 'Normal Kilolu') {
      navigation.navigate("AntrenmanZayıf");
    } else if (durum === 'Kilolu' || durum === 'Obez') {
      navigation.navigate("AntrenmanKilolu");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          {showOptions && (
            <View style={styles.optionButtonsContainer}>
              <TouchableOpacity style={styles.optionButton} onPress={besinOner}>
                <Text style={styles.optionButtonText}>Besin Öner</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={hareketOner}>
                <Text style={styles.optionButtonText}>Hareket Öner</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7fff7',
    paddingBottom: 50, // Ekranın altında boşluk bırakmak için
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
    marginTop: 20, // Sonuçlardan butona olan boşluğu ayarlamak için
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
  optionButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  optionButton: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#C1FF72',
    borderRadius: 10,
  },
  optionButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#018B49',
  },
});

export default IndeksPage;
