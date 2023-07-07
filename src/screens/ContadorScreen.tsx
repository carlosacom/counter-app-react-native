import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab title="-1" onPress={() => setContador(contador - 1)} position='bl' />
      <Fab title="+1" onPress={() => setContador(contador + 1)} position='br' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});
