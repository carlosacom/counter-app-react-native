import React from 'react';
import {Dimensions, StyleSheet, Text, View, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {

  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={[styles.cajas, styles.cajaDorada]}></View>
      <View style={[styles.cajas, styles.cajaGris]}></View>
      <Text style={styles.title}>
        width: {width} - height: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red'
  },
  cajas: {
    width: '50%',
    height: '50%',
  },
  cajaGris: {
    backgroundColor: 'gray',
  },
  cajaDorada: {
    backgroundColor: 'gold',
  },
  title: {
    fontSize: 30
  }
});
