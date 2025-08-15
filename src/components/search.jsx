import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { Url, Options, WeatherUrl, Weather_API_Key } from "./api.js"; 

import WeatherBox from "./weather-box/weather-box.jsx";
import Forecast from "./forecast/forecast.jsx"; 

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleChange = (newValue) => {
    if (!newValue) {
      setSearch(null);
      setWeatherData(null);
      setForecastData(null);
      return;
    }

    setSearch(newValue);
    if (onSearchChange) onSearchChange(newValue);

    const [lat, lon] = newValue.value.split(" ");

    // Fetch current weather
    fetch(
      `${WeatherUrl}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Weather_API_Key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log("Current weather data:", data);
      });

    // Fetch forecast
    fetch(
      `${WeatherUrl}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${Weather_API_Key}`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data);
        console.log("Forecast data:", data);
      });
  };

  const loadOptions = async (inputValue) => {
    if (!inputValue) return { options: [] };

    try {
      const response = await fetch(`${Url}?namePrefix=${inputValue}`, Options);

      if (response.status === 429) {
        throw new Error("Too many requests. Please wait a moment and try again.");
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
      return { options: [] };
    }
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for a city..."
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
      <WeatherBox data={weatherData}  />
      <Forecast data={forecastData} />
    </>
  );
}
