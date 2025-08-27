// src/components/DailyForecastItem.jsx
import "../styles/DailyForecastItem.css";

const DailyForecastItem = ({ dayLabel, icon, desc, tempMin, tempMax, unit }) => {
  return (
    <div className="dfi-row">
      <div className="dfi-day">{dayLabel}</div>
      <div className="dfi-icon">
        <img src={icon} alt={desc} />
      </div>
      <div className="dfi-desc">{desc}</div>
      <div className="dfi-temp-bar">
        <span className="dfi-temp-min">{tempMin}°{unit}</span>
        <div className="dfi-bar-bg">
          <div
            className="dfi-bar-fill"
            style={{ width: `${(tempMax - tempMin) * 3}px` }}
          ></div>
        </div>
        <span className="dfi-temp-max">{tempMax}°{unit}</span>
      </div>
    </div>
  );
};

export default DailyForecastItem;
