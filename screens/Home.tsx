import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>Good morning!</Text>
      <Text>Giulio</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
