import { Dispatch, SetStateAction, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { WeatherService } from "../../services/weather";
import { removeHistoryDuplicates } from "../../utils/history";

type PropsType<TDispatch> = {
  requestType: "city" | "forecast";
  setWeatherData:
    | Dispatch<SetStateAction<TDispatch | null>>
};

export const Search = <T,>({ setWeatherData, requestType }: PropsType<T>) => {
  const [value, setValue] = useState<string>("");

  const onSearch = async () => {
  
    switch (requestType) {
      case "forecast": {
        const weatherData = await WeatherService.forecastByCity(value);
        setWeatherData(weatherData as T);
        break;
      }

      case "city":
      default: {
        const weatherData = await WeatherService.searchByCity(value);
        setWeatherData(weatherData as T);

        //[NOTE] History
        const currentHistory = localStorage.getItem("history") || `[]`;
        const parsedHistory = JSON.parse(currentHistory);

        parsedHistory.push(weatherData);

        const validatedHistory = removeHistoryDuplicates(parsedHistory);

        const jsonHistory = JSON.stringify(validatedHistory);
        localStorage.setItem("history", jsonHistory);

        break;
      }
    }
  };

  return (
    <div className="d-flex gap-1 w-100">
      <Form.Control
        placeholder="Search the weather"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};
