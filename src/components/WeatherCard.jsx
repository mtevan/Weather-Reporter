// src/components/WeatherCard.jsx
import React from 'react';
import '../styles/WeatherCard.css';

function WeatherCard({ weatherData, unit }) {
  const { name, main, weather, wind } = weatherData;
  
  // Get temperature based on unit
  const temperature = unit === 'metric' ? `${main.temp}°C` : `${(main.temp * 9/5 + 32).toFixed(1)}°F`;
  const description = weather[0].description;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {temperature}</p>
      <p>Weather: {description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
    </div>
  );
}

export default WeatherCard;
