import React, { useEffect, useState } from "react";

const Weather = (props) => {
  
  console.log(props)
    
  const [WeatheState,setWeatheState] = useState(props.weatherDataObjProp.weathermood)
    // converting the seconds into time
    let sec = props.weatherDataObjProp.sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    useEffect(() => {
      if (props.weatherDataObjProp.weathermood) {
        switch (props.weatherDataObjProp.weathermood) {
          case "Clouds":
            setWeatheState("wi-day-cloudy");
            break;
          case "Haze":
            setWeatheState("wi-fog");
            break;
          case "Clear":
            setWeatheState("wi-day-sunny");
            break;
          case "Mist":
            setWeatheState("wi-dust");
            break;
  
          default:
            setWeatheState("wi-day-sunny");
            break;
        }
      }
    }, [props.weatherDataObjProp.weathermood]);
  return (
    <div>
    <article className="widget">
      <div className="weatherIcon">
        <i className={`wi ${WeatheState}`}></i>
      </div>

      <div className="weatherInfo">
        <div className="temperature">
          <span>{props.weatherDataObjProp.temp}&deg;</span>
        </div>

        <div className="description">
          <div className="weatherCondition">{props.weatherDataObjProp.weathermood}</div>
          <div className="place">
          {props.weatherDataObjProp.name}, {props.weatherDataObjProp.country}
          </div>
        </div>
      </div>

      <div className="date"> {new Date().toLocaleString()} </div>

      {/* our 4column section  */}
      <div className="extra-temp">
        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info-leftside">
            {timeStr} PM <br />
              Sunset
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
            {props.weatherDataObjProp.humidity} <br />
              Humidity
            </p>
          </div>
        </div>

        <div className="weather-extra-info">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p className="extra-info-leftside">
              {props.weatherDataObjProp.pressure} <br />
              Pressure
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className="extra-info-leftside">
            {props.weatherDataObjProp.speed} <br />
              Speed
            </p>
          </div>
        </div>
      </div>
    </article>
    </div>
  );
};

export default Weather;
