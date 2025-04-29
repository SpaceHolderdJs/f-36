import { useState } from "react";
import { Nav } from "react-bootstrap";
import { WeatherSearch } from "./components/screens/WeatherSearch";
import { WeatherForecast } from "./components/screens/WeatherForecast";
import { WeatherHistory } from "./components/screens/WeatherHistory";
import "./App.css";

type TabsType = "search" | "forecast" | "history";

export const App = () => {
  const [tab, setTab] = useState<TabsType>("search");

  const mappedTabs = {
    search: <WeatherSearch />,
    forecast: <WeatherForecast />,
    history: <WeatherHistory />,
  };

  return (
    <div className="d-flex flex-column align-items-center gap-5 p-5">
      <h1>Weather App</h1>
      <Nav variant="tabs" className="flex justify-content-center ">
        <Nav.Item
          className={`btn ${
            tab === "search" ? "btn-primary" : "btn-outline-primary"
          } m-1`}
          onClick={() => setTab("search")}
        >
          Search
        </Nav.Item>
        <Nav.Item
          className={`btn  ${
            tab === "forecast" ? "btn-success" : "btn-outline-success"
          } m-1`}
          onClick={() => setTab("forecast")}
        >
          Forecast
        </Nav.Item>
        <Nav.Item
          className={`btn ${
            tab === "history" ? "btn-warning" : "btn-outline-warning"
          } m-1`}
          onClick={() => setTab("history")}
        >
          History
        </Nav.Item>
      </Nav>

      <div className="flex flex-column w-50">{mappedTabs[tab]}</div>
    </div>
  );
};
