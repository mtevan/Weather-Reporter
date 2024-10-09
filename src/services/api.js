// src/services/api.js
import axios from 'axios';

const API_KEY = '90e9ea7b59db97affc3ee95b7cf606f5';

export const fetchWeatherData = async (city, unit = 'metric') => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error('City not found. Please try again.');
  }
};
