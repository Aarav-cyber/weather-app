import Img from "../../assets/icons/01d.png";
import './weather.css'
export default function WeatherBox() {
  return (
    <>
      <div className="weather-box">
        <div className="top">
          <div className="place-weather">
            <p>Kathmandu</p>
            <p>Sunny</p>
          </div>
          <div className="weather-img">
            <img src={Img} height={100} width={100} />
          </div>
        </div>
        <div className="bottom">
          <div className="temperature">
            <p>25°C</p>
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
              <p>25°C</p>
              <p>25°C</p>
              <p>10 km/h</p>
              <p>60%</p>
              <p>1013 hPa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
