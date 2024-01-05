import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import image from '../../assets/icons/cart-white.png';

const NavBar = () => {
  return (
    <View style={styles.navbarContainer}>
      <Text style={styles.companyName}>Sneakers</Text>
      <View style={styles.navbarItems}>
        <Text style={styles.itemBar}>Coleções</Text>
        <Text style={styles.itemBar}>Masculino</Text>
        <Text style={styles.itemBar}>Feminino</Text>
        <Text style={styles.itemBar}>Sobre</Text>
      </View>
      <Pressable>
        <Image
          source={require('../../assets/icons/cart-black.png')} // Corrija o caminho aqui
          style={{
            width: 22,
            height: 22,
            marginLeft: 20,
          }}
        />
      </Pressable>
      
      <Pressable>
        <Image
          source={require('../../assets/user/user-image.jpg')} // Corrija o caminho aqui
          style={{
            width: 26,
            height: 26,
            marginLeft: 10,
            borderRadius: "100%"
          }}
        />
      </Pressable>

    </View>
  );
};

export { NavBar };

const styles = StyleSheet.create({
  companyName: {
    fontSize: 18,
    fontWeight: '500', // Deve ser uma string
  },
  navbarItems: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    cursor: 'pointer',
  },
  itemBar:{
    fontSize: 12
  },
  navbarContainer: {
    color: 'black',
    position: 'relative',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginHorizontal: 12,
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 1,
  },
});
