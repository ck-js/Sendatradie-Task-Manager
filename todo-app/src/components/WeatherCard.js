import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

//   console.log(weatherData);
  const { name, weather, main } = weatherData;
  const { description, icon } = weather[0];
  const { temp } = main;
  

  return (
    <div>
      <h3>{name}</h3>
      <p>{temp}°C</p>
      <img
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt={description}
      />
      <p>{description}</p>
      
      {/* <p>Pressure {pressure}%</p> */}
    </div>
  );
};

export default WeatherCard;