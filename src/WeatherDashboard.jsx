// WeatherDashboard.js
import React, { useState, useEffect } from 'react';
import SearchCity from './components/SearchCity';
import WeatherDisplay from './components/WeatherDisplay';
import Favorites from './components/Favourites';
import axios from 'axios';

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [currentCity, setCurrentCity] = useState(localStorage.getItem('lastCity') || 'New York');
    const [units, setUnits] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = '5d2351112d3986fb97a3c772fc3ba6ca'; // Hardcoded OpenWeatherMap API Key

    useEffect(() => {
        if (currentCity) {
            fetchCityCoordinates(currentCity); // Fetch weather data based on city
        }
        fetchFavorites();
    }, [currentCity, units]);

    // Fetch city coordinates based on city name
    const fetchCityCoordinates = async (city) => {
        setLoading(true);
        setError(null);

        try {
            const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            const locationResponse = await axios.get(locationUrl);
            const { lat, lon } = locationResponse.data.coord;

            // Fetch weather data based on coordinates
            fetchWeatherData(lat, lon);
        } catch (error) {
            console.error('Error fetching city coordinates:', error);
            setError('City not found. Please try another.');
            setLoading(false);
        }
    };

    // Fetch 5-day weather forecast based on coordinates
    const fetchWeatherData = async (lat, lon) => {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

        try {
            const response = await axios.get(weatherUrl);
            setWeatherData(response.data);
            localStorage.setItem('lastCity', currentCity);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Failed to fetch weather data.');
        } finally {
            setLoading(false);
        }
    };

    const fetchFavorites = async () => {
        try {
            const response = await axios.get('http://localhost:3000/favorites');
            setFavorites(response.data);
        } catch (err) {
            console.error('Error fetching favorites:', err);
        }
    };

    return (
      <div className="dashboard">
      <SearchCity setCurrentCity={setCurrentCity} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && weatherData && (
          <div className="weather-container">
              <div className="unit-toggle">
                  <button
                      className="toggle-btn"
                      onClick={() => setUnits(units === 'metric' ? 'imperial' : 'metric')}
                  >
                      Toggle to {units === 'metric' ? 'Fahrenheit' : 'Celsius'}
                  </button>
              </div>
              <WeatherDisplay weatherData={weatherData} units={units} />
          </div>
      )}
      <Favorites favorites={favorites} setFavorites={setFavorites} setCurrentCity={setCurrentCity} />
  </div>
  
    );
};

export default WeatherDashboard;
