import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'linear-gradient(90deg, #4e54c8, #8f94fb)', // Gradasi biru ungu
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    color: '#fff', // Warna teks putih
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Bayangan lembut pada teks
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
});

export default Header;
