import React, { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch } from '../redux/store';
import { getWeather } from '../redux/thunks/weather';
import AddCityBtn from '../shared/components/AddCityBtn';
import Colors from '../shared/styles/Colors';
import CitiesList from '../shared/components/CitiesList';

type HomeProps = {};

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

const Home = () => {
  const dispatch = useAppDispatch();
  const dispatchMyAPi = useCallback(async () => {
    for (const city of CITIES) {
      await dispatch(getWeather(city));
    }
  }, [dispatch]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatchMyAPi().then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    dispatchMyAPi()
      .then(() => console.log('done'))
      .catch((e) => console.log('Errore: ' + e));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        nestedScrollEnabled={true}
      >
        <Text style={styles.title}>Good morning!{'\n'}Giulio</Text>
        <AddCityBtn />
        <CitiesList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.primary.main,
    fontSize: 28,
    textAlign: 'center',
  },
});
