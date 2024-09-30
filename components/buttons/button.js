import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonCalc = ({ label, onPress, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={styles.textBtn}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  textBtn: {
    fontSize: 27,
    color: '#FFFFFF',
  },
});

export default ButtonCalc;
  