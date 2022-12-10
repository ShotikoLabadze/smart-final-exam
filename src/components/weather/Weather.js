import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="cont">
      <p>{data.name}</p>
      <p>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null} </p>
    </div>
  );
}
