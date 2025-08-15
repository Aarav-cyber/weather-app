import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { Url, Options, WeatherUrl, Weather_API_Key } from "./api.js";
import "./search.css";

import WeatherBox from "./weather-box/weather-box.jsx";
import Forecast from "./forecast/forecast.jsx";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (newValue) => {
    if (!newValue) {
      setSearch(null);
      setWeatherData(null);
      setForecastData(null);
      setError(null);
      return;
    }

    setSearch(newValue);
    setLoading(true);
    setError(null);

    if (onSearchChange) onSearchChange(newValue);

    const [lat, lon] = newValue.value.split(" ");

    // Fetch current weather
    fetch(
      `${WeatherUrl}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Weather_API_Key}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        console.log("Current weather data:", data);
      })
      .catch((err) => {
        console.error("Weather fetch error:", err);
        setError(err.message);
      });

    // Fetch forecast
    fetch(
      `${WeatherUrl}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${Weather_API_Key}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Forecast data not available');
        }
        return response.json();
      })
      .then((data) => {
        setForecastData(data);
        console.log("Forecast data:", data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Forecast fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  const loadOptions = async (inputValue) => {
    if (!inputValue) return { options: [] };

    try {
      const response = await fetch(`${Url}?namePrefix=${inputValue}`, Options);

      if (response.status === 429) {
        throw new Error("Too many requests. Please wait a moment and try again.");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch cities");
      }

      const result = await response.json();
      console.log("API response:", result);

      return {
        options: result.data.map((city) => ({
          label: `${city.name}, ${city.countryCode}`,
          value: `${city.latitude} ${city.longitude}`,
        })),
      };
    } catch (error) {
      console.error(error);
      setError(error.message);
      return { options: [] };
    }
  };

  return (
    <div className="search-container">
      <AsyncPaginate
        placeholder="Search for a city..."
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
        className={loading ? 'loading' : error ? 'error' : 'success'}
      />

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {loading && (
        <div className="loading">
          Loading weather data...
        </div>
      )}

      {weatherData && !loading && (
        <WeatherBox data={weatherData} />
      )}

      {forecastData && !loading && (
        <Forecast data={forecastData} />
      )}
    </div>
  );
}
