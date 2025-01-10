import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ShoeItem from '../components/ShoeItem';

const ShoeListScreen = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = () => {
      setShoes([
        {
          id: '1',
          name: 'crocsunisex1',
          price: 100,
          releaseYear: 2023,
          image: require('../assets/crocsunisex1.jpg'),
        },
        {
          id: '2',
          name: 'crocsclasic1',
          price: 112,
          releaseYear: 2023,
          image: require('../assets/crocsclasic1.jpg'),
        },
        {
          id: '3',
          name: 'crocsunisex2',
          price: 100,
          releaseYear: 2024,
          image: require('../assets/crocsunisex2.jpg'),
        },
        {
          id: '4',
          name: 'crocsatmosphere',
          price: 100,
          releaseYear: 2024,
          image: require('../assets/crocsatmosphere.jpg'),
        },
        {
          id: '5',
          name: 'crocselephats',
          price: 111,
          releaseYear: 2022,
          image: require('../assets/crocselephats.jpg'),
        },
        {
          id: '6',
          name: 'crocsemerlads',
          price: 101,
          releaseYear: 2024,
          image: require('../assets/crocsemerlads.jpg'),
        },
        {
          id: '7',
          name: 'crocsnavy',
          price: 100,
          releaseYear: 2025,
          image: require('../assets/crocsnavy.jpg'),
        },
        {
          id: '8',
          name: 'crocsdarkiris',
          price: 99,
          releaseYear: 2025,
          image: require('../assets/crocsdarkiris.jpg'),
        },
        {
          id: '9',
          name: 'crocsdragon',
          price: 97,
          releaseYear: 2025,
          image: require('../assets/crocsdragon.jpg'),
        },
        {
          id: '10',
          name: 'crocsmystic',
          price: 180,
          releaseYear: 2022,
          image: require('../assets/crocsmystic.jpg'),
        },
      ]);
    };
    fetchShoes();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="CROCS" />
      <FlatList
        data={shoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShoeItem shoe={item} />}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e', // Latar belakang biru tua
  },
  listContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default ShoeListScreen;
