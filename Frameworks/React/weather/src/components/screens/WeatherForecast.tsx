import { useState } from "react"
import { ForecastWeatherData } from "../../types/weather.types";
import { Search } from "../shared/Search";
import { WeatherForecastCards } from "../shared/WeatherForecastCards";

export const WeatherForecast = () => {

  const [weatherData, setWeatherData] = useState<ForecastWeatherData | null>(null);

  return (
    <div className="d-flex flex-column align-items-center gap-5">
      <Search<ForecastWeatherData> requestType="forecast" setWeatherData={setWeatherData} />
      {weatherData && <WeatherForecastCards weatherData={weatherData} />}
    </div>
  )
}
