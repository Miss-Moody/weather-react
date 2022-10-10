import React from "react";

export default function FormattedDate(props) {
  //converting days' indexes to their shortened names
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayShort = daysShort[props.date.getDay()];

  return <div>{dayShort}</div>;
}
