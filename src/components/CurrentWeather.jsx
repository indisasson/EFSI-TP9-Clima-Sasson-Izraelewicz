import "../styles/CurrentWeather.css";
import { useUnit } from "../context/UnitContext";

const CurrentWeather = ({ currentWeather }) => {
  const { unit } = useUnit();
  const toTemp = (k) =>
    unit === "C" ? Math.round(k - 273.15) : Math.round((k - 273.15) * 9/5 + 32);
  return (
    <div className="current-weather glass-bg">
      <div className="cw-left">
        <div className="temp">{toTemp(currentWeather?.list?.[0]?.main?.temp)}°{unit}</div>
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather?.list?.[0]?.weather?.[0]?.icon}@2x.png`}
            alt={currentWeather?.list?.[0]?.weather?.[0]?.description}
          />
        </div>
      </div>
      <div className="cw-center">
        <div className="city">{currentWeather?.city?.name}</div>
        <div className="time">{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
        <div className="desc">{currentWeather?.list?.[0]?.weather?.[0]?.description}</div>
      </div>
      <div className="cw-right">
        <div className="detail-row">
          <span className="detail-icon">💨</span>
          <span>{currentWeather?.list?.[0]?.wind?.speed} m/s</span>
        </div>
        <div className="detail-row">
          <span className="detail-icon">🌡️</span>
          <span>Sensación: {toTemp(currentWeather?.list?.[0]?.main?.feels_like)}°{unit}</span>
        </div>
        <div className="detail-row">
          <span className="detail-icon">🔻</span>
          <span>{toTemp(currentWeather?.list?.[0]?.main?.temp_min)}°{unit}</span>
          <span className="detail-icon">🔺</span>
          <span>{toTemp(currentWeather?.list?.[0]?.main?.temp_max)}°{unit}</span>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
//para representar el clima actual de una ubicación.

/*
import '../styles/CurrentWeather.css'

const CurrentWeather = ({ currentWeather }) => {
  // función para pasar de Kelvin a °C
  const kelvinToCelsius = (k) => (k - 273.15).toFixed(1);

  return (
    <>
      <div className="weather-app">
      
        <div className="current-weather">
          <div className="temp">
            {kelvinToCelsius(currentWeather.main.temp)}°
          </div>
          <div className="city-time">
            <h2>{currentWeather.name}</h2>
            <p>{new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</p>
          </div>
          <div className="details">
            <p>
              <img 
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} 
                alt={currentWeather.weather[0].description} 
              />
              {currentWeather.weather[0].description}
            </p>
            <p>💨 {currentWeather.wind.speed} m/s</p>
            <p>Sensación: {kelvinToCelsius(currentWeather.main.feels_like)}°C</p>
            <p>
              {kelvinToCelsius(currentWeather.main.temp_min)}° a{" "}
              {kelvinToCelsius(currentWeather.main.temp_max)}°
            </p>
          </div>
        </div>

   
        <div className="hourly-forecast">
    
          <div className="card">
            <p>9:00 AM</p>
            <p>☀️</p>
            <p>{kelvinToCelsius(currentWeather.main.temp)}°</p>
          </div>
          <div className="card">
            <p>12:00 PM</p>
            <p>🌙</p>
            <p>{kelvinToCelsius(currentWeather.main.temp)}°</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;

*/
