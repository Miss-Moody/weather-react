import React from "react";

//formatting JS day and month
export default function FormattedDate(props) {
  //converting months' indexes to their names
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let dateNumber = props.date.getDate();

  return (
    <div>
      {dateNumber} {month}
    </div>
  );
}
