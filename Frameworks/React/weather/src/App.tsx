import { useState } from "react";
import { Nav } from "react-bootstrap";
import { WeatherSearch } from "./components/screens/WeatherSearch";
import { WeatherForecast } from "./components/screens/WeatherForecast";
import "./App.css";

export const App = () => {
  const [tab, setTab] = useState<"search" | "forecast">("search");

  return (
    <div className="d-flex flex-column align-items-center gap-5 p-5">
      <h1>Weather App</h1>
      <Nav variant="tabs" className="flex justify-content-center ">
        <Nav.Item
          className="btn btn-outline-primary m-1"
          onClick={() => setTab("search")}
        >
          Search
        </Nav.Item>
        <Nav.Item
          className="btn btn-outline-success m-1"
          onClick={() => setTab("forecast")}
        >
          Forecast
        </Nav.Item>
      </Nav>

      <div className="flex flex-column w-50">{tab === "search" ? <WeatherSearch /> : <WeatherForecast />}</div>
    </div>
  );
};
