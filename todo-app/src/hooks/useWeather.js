import { useState, useEffect } from 'react';
import weatherService from '../services/weatherService';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        setIsLoading(true);
        const position = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );
        const { latitude, longitude } = position.coords;
        const data = await weatherService.fetchWeatherData(latitude, longitude);
        setWeatherData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    getCurrentLocation();
  }, []);

  return { weatherData, isLoading, error };
};

export default useWeather;