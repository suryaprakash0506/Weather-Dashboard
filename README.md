# Weather App

This is a weather application built using React that allows users to search for city weather information. The app displays current weather data, and users can toggle between Celsius and Fahrenheit for temperature readings. The last searched city is stored and can be suggested when users begin typing in the search input.

## Features
- Search for weather by city name.
- Toggle temperature units between Celsius and Fahrenheit.
- Display of the last searched city.
- Save favorite cities.

## Requirements
- Node.js (version 14.x or later)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the application locally.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```
### 2.  Install Dependencies
npm install

### 3. Obtain an API Key from OpenWeatherMap

1.Go to the OpenWeatherMap website.
2.Click on the "Sign In" button at the top right corner or create a new account.
3.Once logged in, navigate to the "API keys" section in your account settings.
4.Click on "Create" to generate a new API key. Make sure to copy this key as you'll need it in the next step.

### 4. Create an .env File
REACT_APP_API_KEY=your_api_key_here

### 5. Run the Application
```bash
   npm run dev
```
