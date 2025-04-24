import { useState } from "react"
import { Search } from "../shared/Search"
import { OpenWeatherMapResponse } from "../../types/weather.types";
import { WeatherCard } from "../shared/WeatherCard";

export const WeatherSearch = () => {

  const [weatherData, setWeatherData] = useState<OpenWeatherMapResponse | null>(null);

  return (
    <div className="d-flex flex-column align-items-center gap-5">
        <Search<OpenWeatherMapResponse> requestType="city" setWeatherData={setWeatherData} />
        {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  )
}
