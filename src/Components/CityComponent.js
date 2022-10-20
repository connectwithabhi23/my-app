import React from "react";

function CityComponent(props) {
  const { setCity, fetchWeatherInfo } = props;
  return (
    <>
      <img src="images/perfect-day.svg"></img>
      <span className="sub-heading">Find weather of your city</span>
      <form onSubmit={fetchWeatherInfo}>
        <input
          type={"text"}
          id="inp-City"
          placeholder={"Enter city name"}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button type="submit" id="search-City">
          search
        </button>
      </form>
    </>
  );
}

export default CityComponent;
