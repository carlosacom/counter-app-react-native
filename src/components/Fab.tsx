import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  position: 'bl' | 'br';
  onPress: () => void;
}

export const Fab = ({title, position, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.fabLocation,
        position == 'bl' ? styles.left : styles.right,
      ]}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  right: {
    bottom: 25,
    right: 10,
  },
  left: {
    bottom: 25,
    left: 10,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
