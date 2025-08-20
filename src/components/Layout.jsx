import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <nav>
            <Link to='/CurrentWhether'>CurrentWhether</Link>
            <Link to='/DailyForecast'>DailyForecast</Link>
            <Link to='/HourlyForecast'>HourlyForecast</Link>
            <Link to='/CityWeather'>CityWeather</Link>
            <Outlet/>
        </nav>
    )
} 
export default Layout;

