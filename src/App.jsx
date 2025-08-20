import { useState, useEffect } from 'react'
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
  /*const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");*/

  const [selectedCity, setSelectedCity] = useState("salta");
  
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=f58c23f9cb9a680007eb17d913aa7b8c`)
      .then((res) => setCurrentWeather(res.data))
      .catch((err) => console.error("Error al cargar el clima:", err));
  }, [selectedCity]);

  /*const handleCitySearch = (city) => {
    // Update selected city
  };

  const handleTemperatureUnitChange = (unit) => {
    // Update temperature unit (Celsius or Fahrenheit)
  };

  const handleSearchQueryChange = (event) => {
    // Update search query
  };

  const handleSearch = () => {
    // Trigger city search
  };*/

  return (
    <>
      <div className="weather-app">{/* Render weather app components */}</div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/CurrentWhether' element={<CurrentWeather currentWeather={currentWeather} />}></Route>
            <Route path='/DailyForecast' element={<DailyForecast/>}></Route>
            <Route path='/HourlyForecast' element={<HourlyForecast/>}></Route>
            <Route path='/CityWeather' element={<CityWeather/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
    
  );
  
}

export default App
