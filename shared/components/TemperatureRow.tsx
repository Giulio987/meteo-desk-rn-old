import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CityWeather } from '../models/weather';
import { LinearGradient } from 'expo-linear-gradient';

const TemperatureRow = ({
  hourlyTemperatures,
}: {
  hourlyTemperatures: { temperature: number; localTime: string }[];
}) => {
  //TODO fare un tipo apposito per le temperature
  const [widthToScroll, setWidthToScroll] = React.useState(500);
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
      >
        {hourlyTemperatures &&
          hourlyTemperatures.map(({ temperature, localTime }, i) => (
            <View key={i} style={styles.temperatureContainer}>
              <Text style={styles.temperature}>
                {temperature.toFixed() + '°'}
              </Text>
              <View style={styles.circle} />
              <Text style={styles.time}>{localTime}</Text>
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
            height: 4,
            top: '50%',
            flex: 1,
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
  },
  temperatureContainer: {},
  temperature: {},
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 50,
  },
  time: {},
});
