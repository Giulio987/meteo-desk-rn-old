import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BackBtn = () => {
  return (
    <Pressable>
      <Image source={require('../../assets/arrow-left.png')}></Image>
    </Pressable>
  );
};

export default BackBtn;

const styles = StyleSheet.create({});
