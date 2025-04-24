import { FC } from "react";
import { ForecastWeatherData } from "../../types/weather.types";
import { Carousel } from "react-bootstrap";
import { adaptForecastData } from "../../utils/forecast";
import { WeatherCard } from "./WeatherCard";

type PropsType = {
  weatherData: ForecastWeatherData;
};

export const WeatherForecastCards: FC<PropsType> = ({ weatherData }) => {
  const data = adaptForecastData(weatherData);

  return (
    <div className="w-100 d-flex flex-direction-column align-items-center">
      <Carousel className="w-100" style={{height: "650px"}}>
        {data.map((hourlyForecastElements, index) => (
          <Carousel.Item
            key={`forecast-slider-${index}`}
            className="w-100 justify-content-center gap-5"
          >
            {hourlyForecastElements.slice(0, 1).map((forecast) => (
            <div className="m-auto">
                <WeatherCard weatherData={forecast} />
              </div>
            ))}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
