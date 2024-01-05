import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function FootSize() {
  const sizes = [
    { tamanho: 32 },
    { tamanho: 33 },
    { tamanho: 34 },
    { tamanho: 35 },
    { tamanho: 36 },
  ];

  const [itemSelected, setItemSelected] = useState(32);

  return (
    <View style={itemsStype.groupItems}>
      {sizes.map((size) => (
        <Pressable
          onPress={() => {
            setItemSelected(size.tamanho);
          }}
          style={[
            itemsStype.item,
            itemSelected == size.tamanho ? itemsStype.selected : null,
          ]}>
          <Text
            style={[
              itemsStype.text,
              itemSelected == size.tamanho ? itemsStype.selectedText : null,
            ]}>
            {size.tamanho}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const itemsStype = StyleSheet.create({
  groupItems: {
    marginVertical: 16,
    flexDirection: 'row',
    gap: 8,
  },
  item: {
    width: 32,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#E4A946',
    shadowColor: '#E4A946',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    fontWeight: 700,
    fontSize: 12,
  },
  selectedText: {
    color: 'white',
  },
});
