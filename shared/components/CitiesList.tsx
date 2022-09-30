import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CitiyCard from './CitiyCard';

const CitiesList = () => {
  const { cities, error, isLoading } = useSelector(
    (state: RootState) => state.weather
  );
  return (
    <FlatList
      style={{ width: '100%' }}
      contentContainerStyle={{ marginHorizontal: 20 }}
      data={cities}
      renderItem={({ item }) => <CitiyCard city={item} />}
      keyExtractor={(item) => item.id.toString()}
      nestedScrollEnabled={true}
    />
  );
};

export default CitiesList;

const styles = StyleSheet.create({});
