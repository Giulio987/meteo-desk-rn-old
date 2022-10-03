import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DayCard from './DayCard';

const NextDaysList = ({ dailyWeather }: any) => {
  //TODO fix any
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={dailyWeather}
      renderItem={({ item }) => <DayCard />}
      keyExtractor={(item) => item.date}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default NextDaysList;

const styles = StyleSheet.create({
  list: {
    marginBottom: 100,
    marginTop: 40,
  },
});
