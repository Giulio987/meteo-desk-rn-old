import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CityWeather } from '../models/weather';
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts, FontSizes } from '../styles/Fonts';

const TemperatureRow = ({
  hourlyTemperatures,
}: {
  hourlyTemperatures: { temperature: number; localTime: string }[];
}) => {
  //TODO fare un tipo apposito per le temperature
  //TODO capire come fare il fade scroll o se va bene così
  //TODO troncare dopo 5 / 6 ore
  const [widthToScroll, setWidthToScroll] = React.useState(500); //RImuovere
  const onScroll = (event: any) => {
    setWidthToScroll(event.nativeEvent.contentOffset.x + 500);
  };
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {hourlyTemperatures &&
          hourlyTemperatures.map(({ temperature, localTime }, i) => (
            <View key={i} style={styles.temperatureContainer}>
              {i === 0 && <Text style={styles.now}>Now</Text>}
              {i !== 0 && <Text style={styles.time}>{localTime}</Text>}
              <View style={[styles.circle, i === 0 && styles.bigCircle]} />
              <Text
                style={[styles.temperature, i === 0 && styles.nowTemperature]}
              >
                {temperature.toFixed() + '°'}
              </Text>
            </View>
          ))}
        <LinearGradient
          colors={['white', '#ffffff00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          pointerEvents="none"
          style={{
            position: 'absolute',
            width: widthToScroll,
            height: 5,
            top: '41%',
            marginLeft: 10,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default TemperatureRow;

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    marginLeft: 40,
    position: 'relative',
    alignItems: 'center',
  },
  temperatureContainer: {
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    fontSize: FontSizes.info.medium,
    fontFamily: Fonts.light,
    lineHeight: 30,
    color: 'white',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  bigCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginVertical: 0,
  },
  time: {
    fontSize: FontSizes.info.hour,
    lineHeight: 18,
    color: 'white',
    fontFamily: Fonts.light,
  },
  now: {
    fontSize: 18,
    lineHeight: 27,
    color: 'white',
    fontFamily: Fonts.bold,
  },
  nowTemperature: {
    fontSize: 25,
    lineHeight: 38,
    color: 'white',
    fontFamily: Fonts.bold,
  },
});
