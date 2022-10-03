import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from '../UI/Card';

const DayCard = () => {
  return (
    <Card style={{ marginHorizontal: 15 }}>
      <Text>Giorno</Text>
      <Text>Temperatura</Text>
      <Text>Image</Text>
    </Card>
  );
};

export default DayCard;

const styles = StyleSheet.create({});
