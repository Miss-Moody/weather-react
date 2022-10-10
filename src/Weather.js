import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import logo from "./images/vane.svg";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      day: "Tuesday",
      dayShort: "Tue",
      date: "25",
      month: "Oct",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="wrapper">
            <div className="header">
              <nav className="navbar bg-light app-header">
                <div className="container-fluid">
                  <div className="logo">
                    <img src={logo} alt="Cockvane" className="cockvane" />
                    <p className="navbar-brand logo-title">Weazzy</p>
                  </div>

                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Enter city..."
                      aria-label="Search"
                      autoComplete="off"
                    />
                    <button
                      className="btn btn-outline-success search-button"
                      type="submit"
                    >
                      <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    </button>
                  </form>
                </div>
              </nav>
            </div>
            <div className="weather-in-city">
              Weather in
              <span className="current-city">
                <strong> {weatherData.city}</strong>
              </span>
              <button
                className="btn btn-outline-success search-button find-me-button"
                type="submit"
              >
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
            <div className="all-days-weather">
              <div className="forecast">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <div className="nav-link">
                      <div className="day">
                        <span>{weatherData.dayShort}</span>
                        <br />
                        <img
                          className="day-icon"
                          alt={weatherData.description}
                          src={weatherData.imgUrl}
                        />

                        <span>{weatherData.temperature}</span>
                        <span>°</span>
                        <br />
                        <span>
                          {weatherData.date} {weatherData.month}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="day-1-tab"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-3">
                        <div className="day-big">
                          <img
                            className="day-big-icon"
                            src={weatherData.imgUrl}
                            alt={weatherData.description}
                          />
                          <br />
                          <strong>
                            <span>{weatherData.temperature}</span>
                            <a href="/" className="active">
                              {" "}
                              °C
                            </a>{" "}
                            |<a href="/">°F</a>
                          </strong>
                          <br />
                          <span className="text-capitalize">
                            {weatherData.description}
                          </span>
                          <br />
                          <span>{weatherData.day}</span>
                          <br />
                          <strong></strong>
                        </div>
                      </div>
                      <div className="col-4 weather-param">
                        <p>
                          Wind: <span>{weatherData.wind}</span> km/h
                        </p>
                        <p>
                          Pressure: <span>{weatherData.pressure}</span> mm
                        </p>
                        <p>
                          Humidity: <span>{weatherData.humidity}</span>%
                        </p>
                      </div>
                      <div className="col-5 fact">
                        <div className="card text-bg-info mb-3">
                          <div className="card-header">
                            <strong>Fact of the day</strong>
                          </div>
                          <div className="card-body">
                            <p className="card-text" s>
                              Some exciting fact
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <a
              href="https://github.com/Miss-Moody/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by Olena Kravchuk
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f88737082e422aa9d05e764356880e9";
    let city = "Stockholm";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
