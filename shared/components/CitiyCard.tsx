import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CityWeather } from '../models/weather';
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, FontSizes } from '../styles/Fonts';
import { getFormattedDate } from '../modules/utilities';

interface CitiyCardProps {
  city: CityWeather;
}

const CitiyCard = ({ city }: CitiyCardProps) => {
  const day = getFormattedDate(city.mainWeather.localeDate)[0];
  const month = getFormattedDate(city.mainWeather.localeDate)[1];
  return (
    <LinearGradient //@ts-ignore TODO
      colors={[city.mainWeather.style.first, city.mainWeather.style.second]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View>
        <Text style={styles.title}>{city.name}</Text>
        <Text style={styles.date}>
          {day}
          {'\n'}
          {month}
        </Text>
        <Text style={styles.time}>{city.mainWeather.localTime}</Text>
      </View>
      {/*@ts-ignore TODO?*/}
      <Image source={city.mainWeather.image} />
      <Text style={styles.temperature}>
        {city.mainWeather.temperature.toFixed() + '°'}
      </Text>
    </LinearGradient>
  );
};

export default CitiyCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    paddingRight: 25,
    marginTop: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  temperature: {
    fontSize: 50,
    fontFamily: Fonts.bold,
    lineHeight: 76,
    color: 'white',
  },
  title: {
    fontSize: FontSizes.xl,
    color: 'white',
    fontFamily: Fonts.semiBold,
    lineHeight: 39,
  },
  date: {
    fontSize: FontSizes.m,
    color: 'white',
    lineHeight: 18,
    fontFamily: Fonts.medium,
  },
  time: {
    fontSize: FontSizes.s,
    color: 'white',
    lineHeight: 18,
    fontFamily: Fonts.light,
    paddingTop: 12,
  },
});
