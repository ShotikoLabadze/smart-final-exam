import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.css";
import Card from "../card/Card";

export default function Homepage() {
  const [country, setCountry] = useState([]);
  const [data, setData] = useState([]);
  //   const [university, setUniversity] = useState([]);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=Georgia")
      .then(function (res) {
        console.log(res.data);
        setCountry(res.data);
      });
  }, []);

  //   const submitHandler = () => {
  //     axios
  //       .get(`http://universities.hipolabs.com/search?country=${data}}`)
  //       .then(function (response) {
  //         console.log(response.data.university);
  //         setUniversity(response.data.university);
  //       });
  //   };

  //   const changeHandler = (event) => {
  //     setData(event.target.value);
  //   };
  return (
    <div className="homepageContainer">
      <div className="homepageInfo">
        <h1>Let's Check Universities Around the World</h1>

        {country.slice(0, 10).map((e, index) => (
          <Card
            key={index}
            name={e.name}
            country={e.country}
            webPage={e.web_pages}
          />
        ))}
        {/*============================================================================== */}
        {/* <select onChange={changeHandler}>
          <option disabled>category</option>
          {country.slice(0, 5).map((post, index) => (
            <option key={index} value={post}>
              {post.country}
            </option>
          ))}
        </select>
        <br /> */}
        {/* <button className="btn" onClick={submitHandler}>
          SEARCH
        </button> */}
      </div>
    </div>
  );
}
