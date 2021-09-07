import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import "./Weather.css";

const WeatherAPI = () => {
  const API_Key = "7f40496fed1ac26dfd2165a16d0d138e";

  const [cityName, setcityName] = useState("kolkata");
  const [myNewWeatherInfo, setmyNewWeatherInfo] = useState([]);

  const cityNameHandler = (e) => {
    setcityName(e.target.value);
  };

  const checkWeatherHandler = async () => {
    try {
      const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_Key}`;
      //console.log(WeatherUrl);
      // window.open(WeatherUrl);
      const res = await fetch(WeatherUrl);
      const weatherData = await res.json();
      console.log(weatherData);

      if(weatherData.cod !== 200){
        alert(weatherData.message + '😔')
      }

      const { temp, humidity, pressure } = weatherData.main;
      const { main: weathermood } = weatherData.weather[0];
      const { name } = weatherData;
      const { speed } = weatherData.wind;
      const { country, sunset } = weatherData.sys;

      const myNewWeatherInfos = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      console.log(myNewWeatherInfos)
      setmyNewWeatherInfo(myNewWeatherInfos);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkWeatherHandler();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={cityName}
            onChange={cityNameHandler}
          />

          <button
            className="searchButton"
            type="button"
            onClick={checkWeatherHandler}
          >
            Search
          </button>
        </div>
      </div>

      <Weather weatherDataObjProp={myNewWeatherInfo} />
    </>
  );
};

export default WeatherAPI;
