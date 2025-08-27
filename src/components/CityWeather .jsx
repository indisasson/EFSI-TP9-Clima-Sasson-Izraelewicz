import { useEffect, useState } from "react";
import axios from "axios";
import { useUnit } from "../context/UnitContext";
import "../styles/CityWeather.css";

const cities = [
	{ name: "New York", country: "US" },
	{ name: "Copenhagen", country: "DK" },
	{ name: "Ho Chi Minh City", country: "VN" },
];

const CityWeather = () => {
	const { unit } = useUnit();
	const [data, setData] = useState([]);

	useEffect(() => {
		cities.forEach((city) => {
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=f58c23f9cb9a680007eb17d913aa7b8c`
				)
				.then((response) => {
					setData((prevData) => [...prevData, response.data]);
				})
				.catch((error) => {
					console.error(`Error loading weather for ${city.name}:`, error);
				});
		});
	}, []);

	const toTemp = (k) =>
		unit === "C" ? Math.round(k - 273.15) : Math.round((k - 273.15) * 9 / 5 + 32);

		return (
			<div className="city-weather glass-bg">
			  <h3 className="cw-title">Other large cities</h3>
			  <div className="cw-list">
				{data.map((city, i) => (
				  <div className="cw-card" key={i}>
					<div className="cw-city-country">
					  <div className="cw-city">{city.name}</div>
					  <div className="cw-country">{city.sys.country}</div>
					</div>
					<div className="cw-icon">
					  <img
						src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
						alt={city.weather[0].description}
					  />
					</div>
					<div className="cw-temp">
					  {toTemp(city.main.temp)}°{unit}
					</div>
					<div className="cw-desc">{city.weather[0].main}</div>
				  </div>
				))}
			  </div>
			</div>
		  );
		  
};

export default CityWeather;
