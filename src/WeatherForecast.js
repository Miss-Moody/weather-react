import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  //if the coordinates change (when we search for another city), the forecast should be updated for the new city
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  //looping through all days of the forecast and showing the weather for the first 5 of them
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <ul className="nav nav-tabs" role="tablist">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return <WeatherForecastDay data={dailyForecast} key={index} />;
            }
            return null;
          })}
        </ul>
      </div>
    );
  } else {
    let apiKey = "5f88737082e422aa9d05e764356880e9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiForecastUrl).then(displayForecast);

    return null;
  }
}
