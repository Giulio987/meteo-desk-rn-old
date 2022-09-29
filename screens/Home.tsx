import React, { useCallback, useEffect, useMemo } from 'react';
import {
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch } from '../redux/store';
import { getWeather } from '../redux/thunks/weather';
import CitiesList from '../shared/components/CitiesList';

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

const Home = ({}: Props) => {
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
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            {/* TODO style */}
            <Text>Good morning!</Text>
            <Text>Giulio</Text>
          </View>
          <View>
            <Pressable
              style={({ pressed }) => ({ flexDirection: 'row' })}
              onPress={() => {}}
            >
              <Image source={require('../assets/Plus.png')}></Image>
              <Text>Add city</Text>
            </Pressable>
          </View>
        </View>
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
  },
});
