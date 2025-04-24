import { useEffect, useState } from "react"
import { OpenWeatherMapResponse } from "../../types/weather.types";

export const WeatherHistory = () => {
    const [weatherHistory, setWeatherHistory] = useState<OpenWeatherMapResponse[]>([]);

    useEffect(() => {
        const historyFromLs = localStorage.getItem("history");

        if (historyFromLs) {
            const parsedHistory = JSON.parse(historyFromLs);
            setWeatherHistory(parsedHistory);
        }
    }, []);

    // Завдання: 
    // 1. Вивести інформацію про історію з LocalStorage на базі weatherHistory
    // 2. Стилізувати вивід у вигляді списку карток (на ваш розсуд)
    // 3. Завершити попереднє ДЗ (зберігати історію на кожен пошук)

  return (
    <div></div>
  )
}
