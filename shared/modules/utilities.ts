import { CityWeather } from '../models/weather';
import Colors from '../styles/Colors';

const cloudy = require('../../assets/Cloudy.png');
const rainy = require('../../assets/OccLightRain.png');
const sunny = require('../../assets/Sunny.png');

const getImageAndStyleFromWeather = (weather: string, id: number) => {
  switch (weather) {
    case 'Clouds':
      return {
        image: cloudy,
        style: {
          background:
            (id === 1
              ? 'linear-gradient(to bottom,'
              : 'linear-gradient(to right,') +
            Colors.cloudy.main +
            ', ' +
            Colors.cloudy.light +
            ')',
        },
      };
    case 'Rain':
      return {
        image: rainy,
        style: {
          background:
            (id === 1
              ? 'linear-gradient(to bottom,'
              : 'linear-gradient(to right,') +
            Colors.rainy.main +
            ', ' +
            Colors.rainy.light +
            ')',
        },
      };
    case 'Clear':
      return {
        image: sunny,
        style: {
          background:
            (id === 1
              ? 'linear-gradient(to bottom,'
              : 'linear-gradient(to right,') +
            Colors.primary.main +
            ', ' +
            Colors.primary.light +
            ')',
        },
      };
    default:
      return {
        image: sunny,
        style: {
          background:
            'linear-gradient(to bottom,' +
            Colors.primary.main +
            ', ' +
            Colors.primary.light +
            ')',
        },
      };
  }
};

export const getHourlyFormat = (dt: number) => {
  const formattedHour =
    new Date(dt * 1000)
      .toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .split(' ')[0]
      .split(':')[0] +
    ' ' +
    new Date(dt * 1000)
      .toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      .split(' ')[1];
  return formattedHour;
};

export const getArrayOfTabs = (cityWeather: CityWeather) => {
  if (cityWeather) {
    const dailyWeather = cityWeather.dailyWeather;
    //create an array with dailyWeather elements divided by 3
    const arrayOfTabs = [];
    for (let i = 0; i < dailyWeather.length; i += 3) {
      arrayOfTabs.push(dailyWeather.slice(i, i + 3));
    }
    return arrayOfTabs;
  } else return [];
};

export default getImageAndStyleFromWeather;
