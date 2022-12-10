import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.css";

export default function Homepage() {
  const [country, setCountry] = useState([]);
  const [data, setData] = useState([]);
  const [university, setUniversity] = useState([]);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=")
      .then(function (res) {
        setCountry(res.data);
      });
  }, []);

  const submitHandler = () => {
    axios
      .get(`http://universities.hipolabs.com/search?name=${data}}`)
      .then(function (response) {
        console.log(response.data.university);
        setUniversity(response.data.university);
      });
  };

  const changeHandler = (event) => {
    setData(event.target.value);
  };
  return (
    <div className="homepageContainer">
      <div className="homepageInfo">
        <h1>Let's Check Universities Around the World</h1>

        <select onChange={changeHandler}>
          <option disabled>category</option>
          {country.slice(0, 5).map((post, index) => (
            <option key={index} value={post}>
              {post.country}
            </option>
          ))}
        </select>
        <br />
        <button onClick={submitHandler}>click me</button>
      </div>

      <div>
        {university.map((e, index) => (
          <p key={index}>{e.name}</p>
        ))}
      </div>
    </div>
  );
}
