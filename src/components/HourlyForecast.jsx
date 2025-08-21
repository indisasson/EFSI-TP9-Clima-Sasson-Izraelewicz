

import "../styles/HourlyForecast.css";
import { useUnit } from "../context/UnitContext";

const HourlyForecast = ({ forecastList }) => {
	const { unit } = useUnit();
	const toTemp = (k) =>
		unit === "C" ? Math.round(k - 273.15) : Math.round((k - 273.15) * 9/5 + 32);
	return (
		<div className="hourly-forecast glass-bg">
			<h3 className="hf-title">Next 24h</h3>
			<div className="hf-list">
				{forecastList.slice(0, 8).map((item, i) => (
					<div className="hf-card" key={i}>
						<div className="hf-hour">{new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
						<img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
						<div className="hf-temp">{toTemp(item.main.temp)}°{unit}</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default HourlyForecast;
