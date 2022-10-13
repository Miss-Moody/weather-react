import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDateShort from "./FormattedDateShort";
import FormattedDayShort from "./FormattedDayShort";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  return (
    <li className="WeatherForecastDay nav-item" role="presentation">
      <div className="nav-link">
        <div className="day">
          <div className="WeatherForecast-day ">
            <div className="FormattedDayShort">
              <FormattedDayShort date={date} />
            </div>
            <div className="FormattedDateShort">
              <FormattedDateShort date={date} />
            </div>
          </div>
          <span className="day-icon">
            <WeatherIcon code={props.data.weather[0].icon} size="36" />
          </span>
          <div className="WeatherForecast-temperatures day-temp">
            <span className="WeatherForecast-temperature-max">
              {maxTemperature()}
            </span>
            <span className="WeatherForecast-temperature-min">
              {minTemperature()}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
