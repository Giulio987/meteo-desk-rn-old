import { setCallState, setWeather } from '../reducers/weather';
import { AppDispatch } from '../store';
import { CityWeather } from '../../shared/models/weather';
import getImageAndStyleFromWeather, {
  getHourlyFormat,
} from '../../shared/modules/utilities';
//@ts-ignore TODO: fix this
import { REACT_APP_OPEN_WEATHER_API_KEY } from '@env';

const getWeather =
  (city: {
    name: string;
    country: string;
    id: number;
    coord: { lat: number; lon: number };
  }) =>
  async (dispatch: AppDispatch) => {
    dispatch(setCallState({ isLoading: true, error: null }));
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&exclude=minutely,&units=metric&appid=${REACT_APP_OPEN_WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      const additionalData = getImageAndStyleFromWeather(
        data.current.weather[0].main,
        city.id
      );
      //Formattazione data e ora
      const { timezone_offset } = data;
      const { dt } = data.current;
      const dateTime = new Date(dt * 1000);
      const toUtc = dateTime.getTime() + dateTime.getTimezoneOffset() * 60000;
      const currentLocalTime = toUtc + 1000 * timezone_offset;
      const selectedDate = new Date(currentLocalTime);

      const date = selectedDate.toLocaleString('en-GB', {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
      });
      const hour = selectedDate.toLocaleString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      //Creazione oggetto
      const cityWeather: CityWeather = {
        id: city.id,
        name: city.name,
        mainWeather: {
          main: data.current.weather[0].main,
          temperature: data.current.temp,
          localeDate: date,
          localTime: hour,
          image: additionalData.image,
          style: additionalData.style, //TODO
        },
        hourlyTemperatures: data.hourly.map((hour: any) => ({
          temperature: hour.temp,
          localTime: getHourlyFormat(hour.dt),
        })),
        dailyWeather: data.daily.map((day: any) => ({
          main: day.weather[0].main,
          temperature: day.temp.day,
          localeDate: new Date(day.dt * 1000)
            .toLocaleDateString('en-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
            })
            .split(',')[0],
          image: getImageAndStyleFromWeather(day.weather[0].main, city.id)
            .image,
        })),
      };
      dispatch(setWeather(cityWeather));
      dispatch(setCallState({ isLoading: false, error: null }));
    } catch (err: any) {
      dispatch(setCallState({ isLoading: false, error: err.message }));
      throw new Error(err.message || 'Something went wrong');
    }
  };

export { getWeather };
