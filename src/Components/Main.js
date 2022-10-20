import React, { useState } from "react";
import "./main.css";
import CityComponent from "./CityComponent";
import WeatherComponent from "./WeatherComponent";

function Main() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeatherInfo = async (e) => {
    e.preventDefault();
    console.log("fetch called");
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=0d43d4c7fa3aac903b3d145637b70488&query=${city}`
    );
    const data = await res.json();
    console.log(data);
    setWeather(data);
  };
  return (
    <div className="container">
      <span className="heading"> Weather App</span>
      {city && weather ? (
        <WeatherComponent weather={weather}></WeatherComponent>
      ) : (
        <CityComponent
          setCity={setCity}
          fetchWeatherInfo={fetchWeatherInfo}
        ></CityComponent>
      )}
    </div>
  );
}

export default Main;
