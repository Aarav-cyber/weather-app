import "./weather.css";

export default function WeatherBox({ data }) {
  if (!data) {
    return (
      <div className="weather-box" style={{ opacity: 0.5, pointerEvents: 'none' }}>
        <div className="top">
          <div className="place-weather">
            <p>Search for a city</p>
            <p>to see weather data</p>
          </div>
          <div className="weather-img">
            <img src="/icons/unknown.png" height={80} width={80} alt="weather" />
          </div>
        </div>
        <div className="bottom">
          <div className="temperature">
            <p>--°C</p>
          </div>
        </div>
      </div>
    );
  }

  const getWeatherClass = (weatherMain) => {
    const weatherMap = {
      'Clear': 'sunny',
      'Clouds': 'cloudy',
      'Rain': 'rainy',
      'Drizzle': 'rainy',
      'Thunderstorm': 'stormy',
      'Snow': 'snowy',
      'Mist': 'cloudy',
      'Smoke': 'cloudy',
      'Haze': 'cloudy',
      'Dust': 'cloudy',
      'Fog': 'cloudy',
      'Sand': 'cloudy',
      'Ash': 'cloudy',
      'Squall': 'stormy',
      'Tornado': 'stormy'
    };

    return weatherMap[weatherMain] || 'cloudy';
  };

  const weatherClass = getWeatherClass(data.weather?.[0]?.main);

  return (
    <div className={`weather-box ${weatherClass}`}>
      <div className="top">
        <div className="place-weather">
          <p>{data.name}</p>
          <p>{data.weather?.[0]?.description || "N/A"}</p>
        </div>
        <div className="weather-img">
          <img
            src={`/icons/${data.weather?.[0]?.icon}.png`}
            height={80}
            width={80}
            alt="weather"
            onError={(e) => {
              e.target.src = '/icons/unknown.png';
            }}
          />
        </div>
      </div>

      <div className="bottom">
        <div className="temperature">
          <p>{Math.round(data.main?.temp)}°C</p>
        </div>
        <div className="details">
          <div className="left">
            <p>Details</p>
            <p>Feels Like:</p>
            <p>Wind</p>
            <p>Humidity</p>
            <p>Pressure</p>
          </div>
          <div className="right">
            <p>{Math.round(data.main?.feels_like)}°C</p>
            <p>{Math.round(data.main?.feels_like)}°C</p>
            <p>{data.wind?.speed} m/s</p>
            <p>{data.main?.humidity}%</p>
            <p>{data.main?.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
