// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchWeatherData } from './services/api';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unit, setUnit] = useState('metric');

  const handleSearch = async (cityName) => {
    setIsLoading(true);
    setError('');
    setWeatherData(null);
    try {
      const data = await fetchWeatherData(cityName, unit);
      setWeatherData(data);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  useEffect(() => {
    if (city) {
      handleSearch(city);
    }
  }, [unit]);

  return (
    <div className="app-container">
      <Header /> {/* Add the Header */}
      <SearchBar onSearch={handleSearch} />
      <button className="toggle-button" onClick={toggleUnit}>
        Toggle to {unit === "metric" ? 'Fahrenheit' : 'Celsius'}
      </button>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} unit={unit} />}
      
      <Footer /> {/* Add the Footer */}
    </div>
  );
}

export default App;
