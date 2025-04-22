import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { WeatherService } from "../../services/weather";
import { OpenWeatherMapResponse } from "../../types/weather.types";

type PropsType = {
    setWeatherData: Dispatch<SetStateAction<OpenWeatherMapResponse | null>>
}

export const Search: FC<PropsType> = ({ setWeatherData }) => {

  const [value, setValue] = useState<string>("");

  const onSearch = async () => {
    const weatherData = await WeatherService.searchByCity(value);
    setWeatherData(weatherData);
  }

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
