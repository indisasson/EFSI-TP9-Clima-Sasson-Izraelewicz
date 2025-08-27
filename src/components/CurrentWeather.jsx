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
