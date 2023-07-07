import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Holi</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    borderWidth: 5,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: 'green',
  },
});
