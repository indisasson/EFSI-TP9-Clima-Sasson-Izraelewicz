import { useState, useEffect } from 'react'
import { UnitContext } from './context/UnitContext.js';
import { ThemeContext } from './context/ThemeContext.js';
import './App.css'
//import api from './API/api.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'
import DailyForecast from './components/DailyForecast.jsx'
import CityWeather from './components/CityWeather .jsx'
import HourlyForecast from './components/HourlyForecast.jsx'
import axios from 'axios'

function App() {
 

  const [currentWeather, setCurrentWeather] = useState(null);

  const [unit, setUnit] = useState("C");
  const [theme, setTheme] = useState("dark");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCity, setSelectedCity] = useState("salta");
  

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=f58c23f9cb9a680007eb17d913aa7b8c`)
      .then((res) => setCurrentWeather(res.data))
      .catch((err) => setCurrentWeather(null));
  }, [selectedCity]);

  // Cambia la clase del body según el tema
  if (typeof document !== 'undefined') {
    document.body.className = theme === 'dark' ? 'theme-dark' : 'theme-light';
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UnitContext.Provider value={{ unit, setUnit }}>
        <div className="weather-app">
          <div className="wa-header">
            <input
              className="wa-search"
              type="text"
              placeholder="Search city..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && setSelectedCity(searchQuery)}
            />
            <div className="wa-header-controls">
              <div className="wa-units">
                <button className={unit === "C" ? "active" : ""} onClick={() => setUnit("C")}>°C</button>
                <button className={unit === "F" ? "active" : ""} onClick={() => setUnit("F")}>°F</button>
              </div>
              <div className="wa-theme">
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                  {theme === 'dark' ? '🌙' : '☀️'}
                </button>
              </div>
            </div>
          </div>
          <div className="wa-main">
            <div className="wa-left">
              {currentWeather && currentWeather.list && (
                <CurrentWeather currentWeather={currentWeather} />
              )}
              <CityWeather />
            </div>
            <div className="wa-right">
              {currentWeather && currentWeather.list && (
                <>
                  <HourlyForecast forecastList={currentWeather.list} />
                  <DailyForecast forecastList={currentWeather.list} />
                </>
              )}
            </div>
          </div>
        </div>
      </UnitContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
