import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import FormattedDayShort from "./FormattedDayShort";
import FormattedDateShort from "./FormattedDateShort";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

  let apiKey = "5f88737082e422aa9d05e764356880e9";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiForecastUrl).then(displayForecast);

  return (
    <div className="WeatherForecast">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <div className="nav-link">
            <div className="day">
              <div className="WeatherForecast-day ">
                <div className="FormattedDayShort">Thu</div>
                <div className="FormattedDateShort">25 Oct</div>
              </div>
              <span className="day-icon">
                <WeatherIcon code="01d" size="36" />
              </span>
              <div className="WeatherForecast-temperatures day-temp">
                <span className="WeatherForecast-temperature-max">19</span>
                <span>°</span>
                <span className="WeatherForecast-temperature-min">10</span>
                <span>°</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
