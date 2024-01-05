import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ({ setSelected, selecctedId }) {
  const itemQuantity = [
    {
      id: 1,
      image: require('../../../assets/images-product/tenis-1.jpg'),
    },
    {
      id: 2,
      image: require('../../../assets/images-product/tenis-2.jpg'),
    },
    {
      id: 3,
      image: require('../../../assets/images-product/tenis-3.jpg'),
    },
    {
      id: 4,
      image: require('../../../assets/images-product/tenis-4.jpg'),
    },
    {
      id: 5,
      image: require('../../../assets/images-product/tenis-5.jpg'),
    },
  ];

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
      }}>
      {itemQuantity.map((item, index) => {
        return (
          <TouchableOpacity
            style={selecctedId == item.id ? CrarouselGroupStype.shadow : null}
            onPress={() => setSelected(item.id)}>
            <Image
              key={index}
              source={item.image}
              style={{
                width: 48,
                height: 48,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const CrarouselGroupStype = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
