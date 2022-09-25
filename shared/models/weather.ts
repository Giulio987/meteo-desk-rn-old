import { CSSProperties } from 'react';

export interface CityWeather {
  id: number;
  name: string;
  mainWeather: {
    main: string;
    temperature: number;
    localeDate: string;
    localTime: string;
    image: string;
    style: CSSProperties;
  };
  hourlyTemperatures: { temperature: number; localTime: string }[];
  dailyWeather: {
    main: string;
    temperature: number;
    localeDate: string;
    image: string;
  }[];
}
