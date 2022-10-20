import React from "react";
import "./weatherComponent.css";

export const WeatherInfoIcons = {
  Humidity: "images/humidity.svg",
  WindDirection: "images/wind.svg",
  Windspeed: "images/wind.svg",
  Pressure: "images/pressure.svg",
};

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function WeatherComponent(props) {
  const { weather } = props;
  const forcastday = new Date(weather?.location.localtime);
  const day = days[forcastday.getDay()];

  const WeatherInfoComponent = (props) => {
    const { name, value } = props;
    return (
      <>
        <div className="info-container">
          <img src={WeatherInfoIcons[name]}></img>
          <span className="info-label">
            {value}
            <span>{name}</span>
          </span>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="weather-container">
        <span className="condition">
          <span>{`${weather?.current.temperature}°C`}</span>
          {`  |  ${weather?.current.weather_descriptions[0]}`}
        </span>
        <img
          className="weathericon"
          src={`${weather?.current.weather_icons[0]}`}
        ></img>
      </div>
      <span className="time">{`${weather?.location.localtime.slice(11)}`}</span>
      <span className="condition">
        <span>{day}</span>
        {`  |  ${weather?.location.localtime.slice(0, 10)}`}
      </span>

      <span className="location">{weather?.location.name}</span>
      <span className="label">Weather Info</span>

      <div className="weatherInfo-container">
        <WeatherInfoComponent
          name={"Humidity"}
          value={`${weather?.current.humidity}`}
        ></WeatherInfoComponent>
        <WeatherInfoComponent
          name={"Pressure"}
          value={`${weather?.current.pressure}`}
        ></WeatherInfoComponent>
        <WeatherInfoComponent
          name={"Windspeed"}
          value={`${weather?.current.wind_speed} mi/h`}
        ></WeatherInfoComponent>
        <WeatherInfoComponent
          name={"WindDirection"}
          value={`${weather?.current.wind_dir}`}
        ></WeatherInfoComponent>
      </div>
    </>
  );
}

export default WeatherComponent;
