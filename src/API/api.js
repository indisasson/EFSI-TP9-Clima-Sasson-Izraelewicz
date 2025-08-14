import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
})

//APIKEY: f58c23f9cb9a680007eb17d913aa7b8c

export default api;