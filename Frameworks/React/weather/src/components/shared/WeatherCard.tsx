import { FC, useState } from "react";
import { OpenWeatherMapResponse } from "../../types/weather.types";
import { Card, Row, Col, Badge } from "react-bootstrap";

type PropsType = {
  weatherData: OpenWeatherMapResponse;
  unit?: "metric" | "imperial";
  expandable?: boolean;
};

export const WeatherCard: FC<PropsType> = ({
  weatherData,
  unit = "metric",
  expandable = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  // Date formatting
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString(undefined, options);

  // Unit-dependent formatting
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const speedUnit = unit === "metric" ? "m/s" : "mph";

  // Convert timestamp to readable time
  const formatTime = (timestamp: number): string => {
    const time = new Date(timestamp * 1000);
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Format for humidity and cloud cover
  const getHumidityDescription = (humidity: number): string => {
    if (humidity < 30) return "Dry";
    if (humidity < 60) return "Comfortable";
    return "Humid";
  };

  // Get appropriate weather icon background color
  const getWeatherColor = (main: string): string => {
    const colors: Record<string, string> = {
      Clear: "#FDB813",
      Clouds: "#BCBEC0",
      Rain: "#6698FF",
      Snow: "#FFFAFA",
      Thunderstorm: "#616669",
      Drizzle: "#82CAFF",
      Mist: "#C9C9C9",
      Fog: "#969696",
      Haze: "#C9BD8E",
      Dust: "#C9BD8E",
      Smoke: "#969696",
      Tornado: "#616669",
    };
    return colors[main] || "#FFFFFF";
  };

  const cardHeaderBg = getWeatherColor(weatherData.weather[0].main);

  return (
    <Card
      className="shadow-sm"
      style={{
        margin: "auto",
        maxWidth: "400px",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: cardHeaderBg,
          padding: "20px",
          color: weatherData.weather[0].main === "Clear" ? "#333" : "#fff",
          transition: "background-color 0.3s ease",
        }}
      >
        <Row className="align-items-center">
          <Col xs={7}>
            <h2 className="mb-0">{weatherData.name}</h2>
            <small>{weatherData.sys.country}</small>
            <h1 className="display-4 mt-3 mb-1">
              {Math.round(weatherData.main.temp)}
              {tempUnit}
            </h1>
            <p className="mb-1">
              Feels like: {Math.round(weatherData.main.feels_like)}
              {tempUnit}
            </p>
            <Badge bg="light" text="dark" className="mt-1">
              {weatherData.weather[0].description}
            </Badge>
          </Col>
          <Col xs={5} className="text-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
        </Row>
        {expandable && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="my-2 btn btn-sm btn-secondary"
          >
            Show more/less
          </button>
        )}
      </div>

      {(!expandable || isExpanded) && (
        <Card.Body>
          <p className="text-muted mb-3">{formattedDate}</p>

          <Row className="text-center mb-3 g-2">
            <Col xs={4}>
              <div className="p-2 border rounded">
                <small className="d-block text-muted">Min</small>
                <strong>
                  {Math.round(weatherData.main.temp_min)}
                  {tempUnit}
                </strong>
              </div>
            </Col>
            <Col xs={4}>
              <div className="p-2 border rounded">
                <small className="d-block text-muted">Max</small>
                <strong>
                  {Math.round(weatherData.main.temp_max)}
                  {tempUnit}
                </strong>
              </div>
            </Col>
            <Col xs={4}>
              <div className="p-2 border rounded">
                <small className="d-block text-muted">Pressure</small>
                <strong>{weatherData.main.pressure} hPa</strong>
              </div>
            </Col>
          </Row>

          <hr className="my-3" />

          <Row className="g-2">
            <Col xs={6}>
              <small className="text-muted d-block">Humidity</small>
              <p>
                {weatherData.main.humidity}% -{" "}
                {getHumidityDescription(weatherData.main.humidity)}
              </p>
            </Col>
            <Col xs={6}>
              <small className="text-muted d-block">Visibility</small>
              <p>{(weatherData.visibility / 1000).toFixed(1)} km</p>
            </Col>
            <Col xs={6}>
              <small className="text-muted d-block">Wind</small>
              <p>
                {weatherData.wind.speed} {speedUnit}{" "}
                {weatherData.wind.gust
                  ? `(Gusts: ${weatherData.wind.gust} ${speedUnit})`
                  : ""}
              </p>
            </Col>
            <Col xs={6}>
              <small className="text-muted d-block">Cloudiness</small>
              <p>{weatherData.clouds.all}%</p>
            </Col>
            <Col xs={6}>
              <small className="text-muted d-block">Sunrise</small>
              <p>{formatTime(weatherData.sys.sunrise)}</p>
            </Col>
            <Col xs={6}>
              <small className="text-muted d-block">Sunset</small>
              <p>{formatTime(weatherData.sys.sunset)}</p>
            </Col>
          </Row>
        </Card.Body>
      )}
    </Card>
  );
};
