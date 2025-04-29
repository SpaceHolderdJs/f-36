import { OpenWeatherMapResponse } from "../types/weather.types";

export const removeHistoryDuplicates = (weatherHistory: OpenWeatherMapResponse[]) => {
    return weatherHistory.reverse().filter((weatherData, index) => {
        const foreignIndex = weatherHistory.findIndex((w) => w.name === weatherData.name);
        return index === foreignIndex;
    })
}