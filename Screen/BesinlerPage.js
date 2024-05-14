import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

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
];

export default function BesinlerPage() {
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
    paddingHorizontal: 20, 
    backgroundColor:"#f7fff7",

  },
  itemContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    marginVertical: 10, 
  },
  imageContainer: {
    flex: 1, 
    marginRight: 10, 
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover', 
  },
  infoContainer: {
    flex: 2, 
  },
  infoText: {
    fontSize: 16,
    textAlign: 'justify', 
  },
});
