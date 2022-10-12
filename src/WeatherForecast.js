import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDayShort from "./FormattedDayShort";
import FormattedDateShort from "./FormattedDateShort";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
