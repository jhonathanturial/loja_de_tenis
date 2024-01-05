import { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Pressable, Image} from 'react-native';
import { NavBar } from './components/NavBar';
import Carousel from './components/Carousel';

export default function App() {
  const [quantity, setQuantity] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <Carousel />
      <View
        style={{
          marginHorizontal: 42,
          marginVertical: 16,
        }}>
        <Text style={styles.oldPrice}>R$ 520,00</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 22,
          }}>
          <Text style={styles.newPrice}>R$ 260,00</Text>
          <View style={styles.disccountContainer}>
            <Text style={styles.disccountText}>50%</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 27,
          position: 'absolute',
          bottom: 40,
          width: '80vw',
        }}>
        <View style={styles.quantityContainer}>
          <Pressable
            style={styles.itemQuantity}
            onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            -
          </Pressable>
          {quantity}
          <Pressable
            style={styles.itemQuantity}
            onPress={() => setQuantity(quantity + 1)}>
            +
          </Pressable>
        </View>
        <Pressable style={styles.buttonBox}>
         <Image
          source={require('./assets/icons/cart-white.png')} // Corrija o caminho aqui
          style={{
            width: 22,
            height: 22,
          }}
        />
          <Text style={styles.buttonText}>Adicionar</Text>
        </Pressable>
      </View>
      <View style={styles.description}>
        <Text>
          Estes tênis de baixo perfil são muito mais do que apenas um par de
          sapatos. Eles são o seu companheiro casual perfeito, pronto para se
          adaptar a todas as situações. Com um design elegante e contemporâneo,
          eles são ideais para qualquer ambiente, desde passeios descontraídos
          pela cidade até encontros com amigos ou aventuras ao ar livre.
        </Text>
        <Text>
          A principal característica destes tênis é a sua sola externa de
          borracha durável. Ela não apenas proporciona conforto durante o uso,
          mas também confere durabilidade e tração excepcionais.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEEEF',
    height: '100vh',
  },
  disccountContainer: {
    width: 56,
    height: 29,
    backgroundColor: '#FFE6BD',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disccountText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#E4A946',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
    fontSize: 12,
    fontWeight: 275,
  },
  newPrice: {
    fontWeight: 700,
    fontSize: 24,
  },
  itemQuantity: {
    height: '100%',
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#E4A946',
    fontWeight: 'bold',
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 152,
    height: 38,
    backgroundColor: '#E4A946',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#E4A946',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  buttonText: {
    fontsize: 20,
    fontWeight: 700,
    color: '#FFF',
  },
  quantityContainer: {
    width: 111,
    height: 36,
    backgroundColor: '#F7FCFE',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  description: {
    marginHorizontal: 42,
  },
});
