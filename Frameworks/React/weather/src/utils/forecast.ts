import { ForecastWeatherData, OpenWeatherMapResponse } from "../types/weather.types";

export const adaptForecastData = (weatherData: ForecastWeatherData) => {
    const { list } = weatherData;

    const res: Array<OpenWeatherMapResponse[]> = [];

    for (let i = 0; i < list.length / 5; i++) {
        const accumulator: OpenWeatherMapResponse[] = [];
        list.slice(i, i + 5).forEach((el) => accumulator.push(el))
        res.push(accumulator);
    }

    return res;
}