import { FC } from "react"
import { OpenWeatherMapResponse } from "../../types/weather.types"
import { Card } from "react-bootstrap"

type PropsType = {
    weatherData: OpenWeatherMapResponse
}

export const WeatherCard: FC<PropsType> = ({weatherData}) => {
    const date = new Date()
    const dateToDisplay = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <Card style={{ maxWidth: "300px" }}>
        <Card.Body>
            <Card.Img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
            <Card.Title>{weatherData.name}</Card.Title>
            <Card.Title>{weatherData.main.temp}°C</Card.Title>
            <Card.Text>{dateToDisplay}</Card.Text>
            <Card.Text>Feels like: {weatherData.main.feels_like}°C</Card.Text>
            <Card.Title>{weatherData.weather[0].main}</Card.Title>
            <Card.Text>Pressure: {weatherData.main.pressure}</Card.Text>
        </Card.Body>
    </Card>
  )
}


// Завдання:
// 1. Вивести більше інформації в картку 
// 2. Стилізувати картку під себе
// 3. Записувати історію пошуку ваших міст у LocalStorage (localstorage.setItem("city", "weather object"))
// Кожного разу на клік на кнопку Search треба Записати місто у LS разом з даними
// Після запиту - затирати інпут з містом