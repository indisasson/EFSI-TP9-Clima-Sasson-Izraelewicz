import "../styles/CurrentWeather.css";

const CurrentWeather = ({ currentWeather }) => {



  return (
    <>
      <h1>{}</h1>
      <div class="weather-app">
        //Clima actual
        <div class="current-weather">
          <div class="temp">-1°</div>
          <div class="city-time">
            <h2>{currentWeather?.city?.name}</h2>
            <p>
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div class="details">
            <p>
              <img 
                src={`http://openweathermap.org/img/wn/${currentWeather?.list?.[0]?.weather?.[0]?.icon}@2x.png`} 
                alt={currentWeather?.list?.[0]?.weather?.[0]?.description} 
              />
            </p>
            <p>{currentWeather?.list?.[0]?.weather?.[0]?.description}</p>
            <p>💨 {currentWeather?.list?.[0]?.wind?.speed} m/s</p>
            <p>Sensación: {currentWeather?.list?.[0]?.main?.feels_like}°C</p>
            <p>
              {currentWeather?.list?.[0]?.main?.temp_min}° a{" "}
              {currentWeather?.list?.[0]?.main?.temp_max}°
            </p>

            
          </div>
        </div>
        //Pronóstico por hora
        <div className="daily-forecast">
        {currentWeather?.list?.map((item, index) => (
            <div className="card" key={index}>
            <p>{new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <img 
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
                alt={item.weather[0].description} 
            />
            <p>{Math.round(item.main.temp - 273.15)}°</p>
            </div>
        ))}
        </div>
        </div>

    </>
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
