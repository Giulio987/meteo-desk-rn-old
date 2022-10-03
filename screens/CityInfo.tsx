import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackBtn from '../shared/components/BackBtn';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import TemperatureRow from '../shared/components/TemperatureRow';

const CityInfo = () => {
  const route = useRoute<any>(); //TODO: fix any
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        route.params.city.mainWeather.style.first,
        route.params.city.mainWeather.style.second,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackBtn />
          <Text>{route.params.city.name}</Text>
          <Pressable style={({ pressed }) => [pressed && { opacity: 0.5 }]}>
            <Image source={require('../assets/plus-white.png')}></Image>
          </Pressable>
        </View>
        <Text>Data</Text>
        <Text>Meteo scritto</Text>
        <View>
          <Image source={require('../assets/Cloudy.png')} />
          <Text>Temperatura</Text>
        </View>
        {/*@ts-ignore TODO*/}
        <TemperatureRow
          hourlyTemperatures={route.params.city.hourlyTemperatures}
        />
        <Text>MeteoCardDays</Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CityInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
