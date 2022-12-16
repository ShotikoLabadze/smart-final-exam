import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApiContext } from "../../context/ApiContext";

function Weather() {
  // const [weather, setWeather] = useContext(ApiContext);

  // useEffect(() => {
  //   console.log(weather);
  // }, [weather]);

  const WeatherInF = useSelector((e) => e);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "SET_WEATHER", payload: data.main.temp })
      );
  }, []);
  return (
    <div className="cont">
      {/* <p>{weather.name}</p>
      <p>{weather.main ? <h1>{weather.main.temp.toFixed()}°F</h1> : null} </p> */}
      <p>{WeatherInF}°F</p>
    </div>
  );
}

export default Weather;
