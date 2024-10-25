// src/App.jsx
import React from 'react';
import WeatherDashboard from './WeatherDashboard';
import './global.css';
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
};

export default App;
