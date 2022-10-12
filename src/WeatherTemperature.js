import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <strong>
        <span>{props.celsius}</span>
        <span className="unit">
          {" "}
          °C <span>|</span>{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </strong>
    );
  } else {
    return (
      <strong>
        <span>{fahrenheit()}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          <span>|</span> °F
        </span>
      </strong>
    );
  }
}
