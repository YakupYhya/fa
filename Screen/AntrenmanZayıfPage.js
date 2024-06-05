import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { firestore } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function AntrenmanZayıfPage() {
  const [besinler, setBesinler] = useState([]);

  useEffect(() => {
    const fetchBesinler = async () => {
      try {
        const besinlerCollectionRef = collection(firestore, 'AntrenmanZayıf');
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
            <Text style={styles.infoTextTitle}>{besin.adi}</Text>
            <Text style={styles.infoText}>{besin.yapılıs}</Text>
            <Text style={styles.infoText}>{besin.örnek}</Text>
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
    paddingVertical: 10,
    backgroundColor: "#f7fff7",
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginVertical: 5,
  },
  infoContainer: {
    flex: 1,
    padding: 15,
  },
  infoTextTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});

