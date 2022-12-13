import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.css";
import Card from "../card/Card";

export default function Homepage() {
  const [country, setCountry] = useState([]);
  const [data, setData] = useState("ukraine");
  const [university, setUniversity] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://universities.hipolabs.com/search?country=")
  //     .then(function (res) {
  //       console.log(res.data);
  //       setCountry(res.data);
  //     });
  // }, []);

  const submitHandler = () => {
    axios
      .get(`http://universities.hipolabs.com/search?country=${data}`)
      .then(function (response) {
        console.log(response.data);
        setCountry(response.data);
      });
  };

  const changeHandler = (event) => {
    setData(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="homepageContainer">
      <div className="homepageInfo">
        <h1>Let's Check Universities Around the World</h1>

        {country?.slice(0, 10)?.map((e, index) => (
          <Card
            key={index}
            name={e.name}
            country={e.country}
            webPage={e.web_pages}
          />
        ))}

        <select className="drop" onChange={changeHandler}>
          <option disabled>category</option>
          <option value={"georgia"}>georgia</option>
          <option value={"egypt"}>egypt</option>
          <option value={"Honduras"}>Honduras</option>
          {/* <option key={index} value={georgia}>
            {country.name}
          </option> */}
        </select>
        <br />
        <button className="btns" onClick={submitHandler}>
          SEARCH
        </button>
      </div>
    </div>
  );
}
