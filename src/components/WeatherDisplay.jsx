import React from 'react';
import './WeatherDisplay.css'; 

const WeatherDisplay = ({ weatherData, units }) => {
  
    const kelvinToFahrenheit = (temp) => {
        return ((temp - 273.15) * 9 / 5) + 32;
    };

 
    const formatTemperature = (temp) => {
        const fahrenheitTemp = Math.abs(Math.round(kelvinToFahrenheit(temp))); 
        return units === 'metric' ? `${Math.round(temp)}°C` : `${fahrenheitTemp}°F`;
    };

    return (
        <div className="weather-display">
            <h2 className="weather-title">Weather Forecast for {weatherData.city.name}</h2>
            <div className="forecast">
                {weatherData.list.map((forecast) => (
                    <div key={forecast.dt} className="forecast-item">
                        <div className="forecast-date">Date- {forecast.dt_txt}</div>
                        <div className="forecast-temperature">
                            Temperature: {formatTemperature(forecast.main.temp)}
                        </div>
                        <div className="forecast-description">
                            Weather: {forecast.weather[0].description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherDisplay;
