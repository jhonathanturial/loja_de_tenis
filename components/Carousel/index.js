import { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import CaroudelGroup from './CarouselGroup';
import FootSize from '../FootSize';

export default function Carousel() {
  const [imageSelected, setImageSelected] = useState(1);
  const [selectedImageRender, setSelectedImageRender] = useState(null);

  const imageGroup = [
    {
      id: 1,
      image: require('../../assets/images-product/tenis-1.jpg'),
    },
    {
      id: 2,
      image: require('../../assets/images-product/tenis-2.jpg'),
    },
    {
      id: 3,
      image: require('../../assets/images-product/tenis-3.jpg'),
    },
    {
      id: 4,
      image: require('../../assets/images-product/tenis-4.jpg'),
    },
    {
      id: 5,
      image: require('../../assets/images-product/tenis-5.jpg'),
    },
  ];

  useEffect(() => {
    setSelectedImageRender(imageGroup[imageSelected - 1].image);
  }, [imageSelected]);

  return (
    <View style={styles.container}>
      <Image
        source={selectedImageRender}
        style={{
          width: 289,
          height: 252,
        }}
      />

      <CaroudelGroup
        selecctedId={imageSelected}
        setSelected={setImageSelected}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.company}>SNEAKER COMPANY</Text>
        <Text style={styles.productName}>Fall Limited Edition Sneakers</Text>
        <FootSize />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    paddingHorizontal: 42,
    paddingTop: 16,
    width: '100%',
  },
  productName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 700,
  },
  company: {
    fontSize: 12,
    color: '#E4A946',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
});
