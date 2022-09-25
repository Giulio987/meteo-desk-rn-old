import React, { useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch } from '../redux/store';
import { getWeather } from '../redux/thunks/weather';

type Props = {};

const CITIES = [
  {
    name: 'Turin',
    country: 'IT',
    id: 1,
    coord: { lat: 45.064, lon: 7.66 },
  },
  { name: 'London', country: 'GB', id: 2, coord: { lat: 51.5, lon: -0.1 } },
  {
    name: 'Rome',
    country: 'IT',
    id: 3,
    coord: {
      lat: 41.9,
      lon: 12.5,
    },
  },
];

const Home = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dispatchMyAPi = async () => {
      for (const city of CITIES) {
        await dispatch(getWeather(city));
      }
    };
    dispatchMyAPi()
      .then(() => console.log('done'))
      .catch((e) => console.log('Errore: ' + e));
  }, []);

  return (
    <SafeAreaView>
      <Text>Good morning!</Text>
      <Text>Giulio</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
