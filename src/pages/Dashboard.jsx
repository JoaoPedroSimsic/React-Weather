import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/Menu';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearchSubmit = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search) {
      const fetchWeather = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
              params: {
                q: search,
                appid: apiKey,
                units: 'metric',
              },
            },
          );
          console.log(response.data);
          setWeatherData(response.data);
        } catch (err) {
          setError(err.response.data.message);
        } finally {
          setLoading(false);
        }
      };
      fetchWeather();
    }
  }, [search]);

  return (
    <div
      className="h-screen w-screen flex flex-col space-y-4 justify-center items-center"
      style={{
        backgroundImage:
          'radial-gradient(circle at 10% 10%, #55A0FF, #77A0FA 70%, #CCCCFF)',
      }}
    >
      <Menu value={handleSearchSubmit} />

      {loading && (
        <div className="absolute flex items-center justify-center text-blue-400 bg-white py-2 px-5 rounded-lg font-roboto font-bold">
          Loading...
        </div>
      )}
      {error && (
        <div className="absolute flex items-center justify-center text-white bg-red-500 py-2 px-5 rounded-lg font-roboto font-bold">
          {error}
        </div>
      )}

      {weatherData && (
        <div className="flex flex-col space-y-4 justify-center items-center">
          <h1 className="mb-20 text-5xl font-bold font-roboto text-white text-center">
            {weatherData.name}
          </h1>
          <p className="font-bold font-roboto text-white text-2xl text-center">
            temperature: {Math.round(weatherData.main.temp)} °C
          </p>
          <p className="font-bold font-roboto text-white text-2xl text-center">
            description: {weatherData.weather[0].description}
          </p>
          <p className="font-bold font-roboto text-white text-2xl text-center">
            humidity: {weatherData.main.humidity}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
