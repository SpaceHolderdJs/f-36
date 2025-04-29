import axios from "axios";
import {
  ForecastWeatherData,
  OpenWeatherMapResponse,
} from "../types/weather.types";

const appid = "6409ee75b6ffc020adb31a565296a4bb";

export class WeatherService {
  static searchByCity = async (city: string) => {
    try {
      const { data } = await axios.get<OpenWeatherMapResponse>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
      );
      return data;
    } catch {
      alert("Error while getting the weather data");
    }
  };

  static forecastByCity = async (city: string) => {
    try {
      const { data } = await axios.get<ForecastWeatherData>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&units=metric`
      );
      return data;
    } catch {
      alert("Error while getting the weather data");
    }
  };
}
