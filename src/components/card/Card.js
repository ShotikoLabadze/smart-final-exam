import React from "react";
import "./Card.css";

export default function Card({ name, country, webPage, index }) {
  return (
    <div className="infobody">
      <div key={index} className="user-card" style={{ width: "18rem" }}>
        <div className="user-card-body">
          <h3>{name}</h3>
          <p>{country}</p>
          <button className="btn">
            <a href={webPage} target="_blank">
              Move Page
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
