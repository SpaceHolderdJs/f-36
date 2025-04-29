import { useEffect, useState } from "react";
import { OpenWeatherMapResponse } from "../../types/weather.types";
import { WeatherCard } from "../shared/WeatherCard";

export const WeatherHistory = () => {
  const [weatherHistory, setWeatherHistory] = useState<
    OpenWeatherMapResponse[]
  >([]);

  useEffect(() => {
    const historyFromLs = localStorage.getItem("history");

    if (historyFromLs) {
      const parsedHistory = JSON.parse(historyFromLs);
      setWeatherHistory(parsedHistory);
    }
  }, []);

  console.log(weatherHistory, "weatherHistory");

  // Завдання:
  // 1. Вивести інформацію про історію з LocalStorage на базі weatherHistory
  // 2. Стилізувати вивід у вигляді списку карток (на ваш розсуд)
  // 3. Завершити попереднє ДЗ (зберігати історію на кожен пошук)

  return (
    <div className="d-flex flex-direction-row flex-wrap w-100 align-items-center justify-content-center gap-2">
      {weatherHistory.map((weatherData) => (
        <WeatherCard weatherData={weatherData} expandable />
      ))}
    </div>
  );
};
