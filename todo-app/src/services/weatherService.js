const API_KEY = 'ce25780cecb0e1542a86f3b4cd789dc3';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeatherData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default {
  fetchWeatherData,
};