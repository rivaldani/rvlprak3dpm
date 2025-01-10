import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Animated } from 'react-native';

const ShoeItem = ({ shoe }) => {
  const scaleValue = new Animated.Value(1);

  // Fungsi untuk menangani klik dan membuka URL website resmi 
  const handlePress = () => {
    const websiteUrl = getShoeWebsite(shoe.id);
    Linking.openURL(websiteUrl);
  };

  // URL untuk masing-masing sepatu berdasarkan ID
  const getShoeWebsite = (shoeId) => {
    const websites = {
      '1': 'https://www.crocs.co.id/crocs-unisex-adult-classic-clog-black-9.html?color=9',
      '2': 'https://www.crocs.co.id/crocs-classic-unisex-clog-grey.html?color=61',
      '3': 'https://www.crocs.co.id/crocs-unisex-classic-clog-white.html?color=40',
      '4': 'https://www.crocs.co.id/crocs-atmosphere-unisex-clog-10.html?color=61',
      '5': 'https://www.crocs.co.id/crocs-classic-clog-unisex-elephant-10.html?color=10',
      '6': 'https://www.crocs.co.id/crocs-classic-unisex-clog-emerald-10.html?color=11',
      '7': 'https://crocs.co.id/crocs-unisex-classic-clog-navy-8.html?color=12',
      '8': 'https://www.crocs.co.id/crocs-classic-unisex-clog-dark-iris-9.html?color=83',
      '9': 'https://www.crocs.co.id/crocs-classic-unisex-clog-dragon-fruit-8.html?color=33',
      '10': 'https://www.crocs.co.id/crocs-classic-unisex-clog-mystic-purple-8.html?color=83',
    };
    return websites[shoeId] || 'https://www.google.com';
  };

  const onPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  
  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  
  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={handlePress}
      style={styles.card}
    >
      <Animated.View style={[styles.imageContainer, { transform: [{ scale: scaleValue }] }]}>
        <Image source={shoe.image} style={styles.image} />
      </Animated.View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{shoe.name}</Text>
        <Text style={styles.price}>${shoe.price}</Text>
        <Text style={styles.releaseYear}>Release Year: {shoe.releaseYear}</Text> 
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'linear-gradient(135deg, #1e3c72, #2a5298)', // Gradasi warna
    borderRadius: 20,
    margin: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
    overflow: 'hidden',
    width: '45%',
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    overflow: 'hidden',
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ffffff33',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffd700', // Emas untuk harga
    textAlign: 'center',
    marginBottom: 5,
  },
  releaseYear: {
    fontSize: 14,
    color: '#ffffffcc',
    textAlign: 'center',
    marginTop: 5,
  },
});


export default ShoeItem;