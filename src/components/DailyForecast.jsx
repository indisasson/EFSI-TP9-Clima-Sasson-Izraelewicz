import "../styles/DailyForecast.css";
import { useUnit } from "../context/UnitContext";
import DailyForecastItem from "./DailyForecastItem";

const DailyForecast = ({ forecastList }) => {
  const { unit } = useUnit();

  const days = [];
  const usedDates = new Set();
  forecastList.forEach((item) => {
    const date = new Date(item.dt_txt).toLocaleDateString();
    if (!usedDates.has(date)) {
      days.push(item);
      usedDates.add(date);
    }
  });

  const fiveDays = days.slice(0, 5);

  const toTemp = (k) =>
    unit === "C"
      ? Math.round(k - 273.15)
      : Math.round((k - 273.15) * 9/5 + 32);

  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className="five-day-forecast glass-bg">
      <h3 className="fdf-title">5-day forecast</h3>
      <div className="fdf-list">
        {fiveDays.map((item, idx) => (
          <DailyForecastItem
            key={idx}
            dayLabel={idx === 0 ? "Today" : getDayName(item.dt_txt)}
            icon={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            desc={item.weather[0].main}
            tempMin={toTemp(item.main.temp_min)}
            tempMax={toTemp(item.main.temp_max)}
            unit={unit}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
