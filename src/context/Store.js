import React, { useState, useEffect } from "react";
import { ApiContext } from "./ApiContext";
import axios from "axios";

function Store({ children }) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, []);

  return (
    <ApiContext.Provider value={[weather, setWeather]}>
      {children}
    </ApiContext.Provider>
  );
}

export default Store;
