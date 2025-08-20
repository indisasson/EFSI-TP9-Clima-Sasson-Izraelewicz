import '../styles/CurrentWeather.css'

const CurrentWeather = ({currentWeather, setCurrentWeather}) => {
    return(
        <>
            <h1>{}</h1>
            <div class="weather-app">
                //Clima actual
                <div class="current-weather">
                <div class="temp">-1°</div>
                <div class="city-time">
                    <h2>{currentWeather.name}</h2>
                    <p>{new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</p>
                </div>
                <div class="details">
                    <p>❄️ Snow</p>
                    <p>💨 5.14 m/s</p>
                    <p>Sensación: -4°C</p>
                    <p>-7° a 3°</p>
                </div>
                </div>

                //Pronóstico por hora
                <div class="hourly-forecast">
                <div class="card">
                    <p>9:00 AM</p>
                    <p>❄️</p>
                    <p>-1°</p>
                </div>
                <div class="card">
                    <p>12:00 PM</p>
                    <p>🌧️</p>
                    <p>0°</p>
                </div>
                <div class="card">
                    <p>3:00 PM</p>
                    <p>☁️</p>
                    <p>1°</p>
                </div>
                <div class="card">
                    <p>6:00 PM</p>
                    <p>☀️</p>
                    <p>3°</p>
                </div>
                <div class="card">
                    <p>9:00 PM</p>
                    <p>🌙</p>
                    <p>2°</p>
                </div>
                <div class="card">
                    <p>12:00 AM</p>
                    <p>🌩️</p>
                    <p>1°</p>
                </div>
                <div class="card">
                    <p>3:00 AM</p>
                    <p>🌧️</p>
                    <p>1°</p>
                </div>
                <div class="card">
                    <p>6:00 AM</p>
                    <p>☁️</p>
                    <p>0°</p>
                </div>
                </div>
            </div>
        </>
    )
}
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