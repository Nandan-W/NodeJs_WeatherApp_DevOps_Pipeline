import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      // const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
      console.log("sending request to ", `${process.env.REACT_APP_API_URL}/${city}`);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/${city}`);

      console.log("response = ", response);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weatherData && (
        <div>
          <h3>{weatherData.name}</h3>
          <p>{weatherData.weather}</p>
          <p>{weatherData.temp}°C</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default WeatherApp;
