import { Dispatch, SetStateAction, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { WeatherService } from "../../services/weather";

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
