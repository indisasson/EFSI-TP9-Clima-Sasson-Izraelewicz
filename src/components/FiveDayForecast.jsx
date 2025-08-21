import "../styles/CurrentWeather.css";

const FiveDayForecast = ({ forecastList }) => {
  // Agrupa por día (tomando el primer registro de cada día)
  const days = [];
  const usedDates = new Set();
  forecastList.forEach((item) => {
    const date = new Date(item.dt_txt).toLocaleDateString();
    if (!usedDates.has(date)) {
      days.push(item);
      usedDates.add(date);
    }
  });
  // Solo 5 días
  const fiveDays = days.slice(0, 5);

  // Utilidades para mostrar día de la semana
  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="five-day-forecast glass-bg">
      <h3 className="fdf-title">5-day forecast</h3>
      <div className="fdf-list">
        {fiveDays.map((item, idx) => (
          <div className="fdf-row" key={idx}>
            <div className="fdf-day">{idx === 0 ? 'Today' : getDayName(item.dt_txt)}</div>
            <div className="fdf-icon">
              <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
            </div>
            <div className="fdf-desc">{item.weather[0].main}</div>
            <div className="fdf-temp-bar">
              <span className="fdf-temp-min">{Math.round(item.main.temp_min - 273.15)}°</span>
              <div className="fdf-bar-bg">
                <div className="fdf-bar-fill" style={{width: `${(item.main.temp_max-item.main.temp_min)*3}px`}}></div>
              </div>
              <span className="fdf-temp-max">{Math.round(item.main.temp_max - 273.15)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
