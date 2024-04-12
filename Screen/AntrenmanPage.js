import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

// Tüm resimlerin yollarını tek bir değişkende saklayalım
const images = [
  { id: 1, path: require('./resimler/lol2.png'), info: 'Resim 1 ile ilgili bilgiler...' },
  { id: 2, path: require('./resimler/lol2.png'), info: 'Resim 2 ile ilgili bilgiler...' },
  { id: 3, path: require('./resimler/lol2.png'), info: 'Resim 3 ile ilgili bilgiler...' },
  { id: 1, path: require('./resimler/lol2.png'), info: 'Resim 1 ile ilgili bilgiler...' },
  { id: 2, path: require('./resimler/lol2.png'), info: 'Resim 2 ile ilgili bilgiler...' },
  { id: 3, path: require('./resimler/lol2.png'), info: 'Resim 3 ile ilgili bilgiler...' },
  { id: 1, path: require('./resimler/lol2.png'), info: 'Resim 1 ile ilgili bilgiler...' },
  { id: 2, path: require('./resimler/lol2.png'), info: 'Resim 2 ile ilgili bilgiler...' },
  { id: 3, path: require('./resimler/lol2.png'), info: 'Resim 3 ile ilgili bilgiler...' },
  { id: 1, path: require('./resimler/lol2.png'), info: 'Resim 1 ile ilgili bilgiler...' },
  { id: 2, path: require('./resimler/lol2.png'), info: 'Resim 2 ile ilgili bilgiler...' },
  { id: 3, path: require('./resimler/lol2.png'), info: 'Resim 3 ile ilgili bilgiler...' },
  // İstediğiniz kadar resim ekleyebilirsiniz
];

export default function AntrenmanPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.map(image => (
        <View key={image.id} style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={image.path} // Objeden alınan resim yolu belirtiliyor
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{image.info}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20, // Kenarlardan boşluk
  },
  itemContainer: {
    flexDirection: 'row', // Satır yönünde (yatay) düzen oluşturuluyor
    alignItems: 'center', // Dikeyde merkezde
    justifyContent: 'flex-start', // Yatayda başlangıçta
    marginVertical: 10, // Elemanlar arasındaki dikey boşluk
  },
  imageContainer: {
    flex: 1, // Resmin bulunduğu konteynerin genişliği
    marginRight: 10, // Resim ve bilgi arasındaki yatay boşluk
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover', // İçeriği tamamen kaplamak için
  },
  infoContainer: {
    flex: 2, // Bilgi metnin bulunduğu konteynerin genişliği
  },
  infoText: {
    fontSize: 16,
    textAlign: 'justify', // Metni tam olarak hizalamak için
  },
});
