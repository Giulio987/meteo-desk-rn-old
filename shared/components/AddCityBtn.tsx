import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import React from 'react';

const AddCityBtn = () => {
  return (
    <Pressable
      style={({ pressed }) => [style.button, pressed && style.pressed]}
      onPress={() => {}}
    >
      <Image source={require('../../assets/Plus.png')}></Image>
      <Text>Add city</Text>
    </Pressable>
  );
};

export default AddCityBtn;

const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },
  pressed: {
    opacity: 0.5,
  },
});
