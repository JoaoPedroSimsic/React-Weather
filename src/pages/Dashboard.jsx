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

      {loading && <div className="text-white">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}

      {weatherData && (
        <div>
          <h2 text-xl font-bold>
            {weatherData.name}
          </h2>
          <p>{Math.round(weatherData.main.temp)}</p>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.humidity}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
