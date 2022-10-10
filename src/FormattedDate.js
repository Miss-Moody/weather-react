import React from "react";

//formatting JS day and time
export default function FormattedDate(props) {
  //converting days' indexes to their names (for today)
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <div>{day}</div>
      <div>
        <strong>
          {hours}:{minutes}
        </strong>
      </div>
    </div>
  );
}
