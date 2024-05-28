import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { firestore } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function KiloVermekPage() {
  const [besinler, setBesinler] = useState([]);

  useEffect(() => {
    const fetchBesinler = async () => {
      try {
        const besinlerCollectionRef = collection(firestore, 'Kilo');
        const besinlerSnapshot = await getDocs(besinlerCollectionRef);
        const besinlerData = besinlerSnapshot.docs.map(doc => doc.data());
        setBesinler(besinlerData);
      } catch (error) {
        console.error("Error fetching besinler: ", error);
      }
    };

    fetchBesinler();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {besinler.map((besin, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image
            source={{ uri: besin.resim }}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Besin Adı: {besin.adi}</Text>
            <Text style={styles.infoText}>Tarif: {besin.tarif}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f7fff7",
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden', // Resim köşelerinin dışarı taşmasını önler
    backgroundColor: '#fff', // Beyaz arkaplan ekler
    elevation: 3, // Gölge efekti ekler
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 10, // Sol üst köşe
    borderTopRightRadius: 10, // Sağ üst köşe
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5, // Yazılar arasına boşluk ekler
  },
});
