import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import logo from "./images/vane.svg";

export default function Weather(props) {
	//initially the object is empty, except for one property - ready - which means that response was not received yet
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	//this function runs when we received an API response
	function handleResponse(response) {
		//setting weather parameters according to the response received
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			temperature: Math.round(response.data.main.temp),
			city: response.data.name,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			pressure: response.data.main.pressure,
			date: new Date(response.data.dt * 1000),
			icon: response.data.weather[0].icon,
		});

		//displaying fact of the day
		let apiFactUrl = `https://uselessfacts.jsph.pl/random.json?language=en`;
		fetch(apiFactUrl, { headers: { "Content-Type": "application/json" } })
			.then(async function (response) {
				let { text } = JSON.parse(await response.text());
				document.querySelector("#day-fact").innerHTML = text;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function search() {
		const apiKey = "5f88737082e422aa9d05e764356880e9";
		let units = "metric";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		//search for a city
		search();
	}

	function handleCityChange(event) {
		//everytime we type something in search field, it is being updated
		setCity(event.target.value);
	}

	//displaying the app if the response from API was received
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

									<form
										className="d-flex"
										role="search"
										onSubmit={handleSubmit}
									>
										<input
											className="form-control me-2"
											type="search"
											placeholder="Enter city..."
											aria-label="Search"
											autoComplete="off"
											onChange={handleCityChange}
										/>
										<button className="btn search-button" type="submit">
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
						</div>
						<div className="all-days-weather">
							<WeatherForecast coordinates={weatherData.coordinates} />

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
													<div className="day-big-icon">
														<WeatherIcon code={weatherData.icon} size={60} />
													</div>
													<strong>
														<span>{weatherData.temperature}</span>
														<span className="unit"> ??C</span>
													</strong>
													<br />
													<span className="text-capitalize">
														{weatherData.description}
													</span>
													<br />

													<span>
														<FormattedDate date={weatherData.date} />
													</span>
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
														<p className="card-text" id="day-fact"></p>
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
						Coded by{" "}
						<a
							href="https://www.linkedin.com/in/olena-moody/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Olena Kravchuk
						</a>
					</div>
				</div>
			</div>
		);
	}
	//displaying "Loading..." and not showing the app if the response was not received
	else {
		search();
		return "Loading...";
	}
}
