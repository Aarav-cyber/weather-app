import "./weather.css";

export default function WeatherBox({ data }) {
  if (!data) {
    return <p style={{ textAlign: "center" }}>Search for a city to see weather data</p>;
  }

  return (
    <div className="weather-box">
      <div className="top">
        <div className="place-weather">
          <p>{data.name}</p>
          <p>{data.weather?.[0]?.description || "N/A"}</p>
        </div>
        <div className="weather-img">
          <img src={`/icons/${data.weather?.[0]?.icon}.png`} height={100} width={100} alt="weather" />
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
