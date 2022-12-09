import React from "react";
import "./About.css";
import IMG from "../../assets/students.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="info">
        <h1>Why go to university?</h1>
        <br />
        <h3>
          Every year hundreds of thousands of prospective students choose higher
          education as their next step after school or college.
        </h3>
        <br />
        <p>
          You don’t have to go to university and can build a career without a
          degree - but university can offer so much more than just a career path
          at the end.
        </p>
        <br />
        <h1>Developing employable skills</h1>
        <p>
          A degree will not only give students the opportunity to gain an
          in-depth knowledge of their chosen subject but also to develop
          transferable skills such as communication, presentation and
          problem-solving skills, while enhancing their ability to work as part
          of a team.
        </p>
        <img src={IMG} alt="" />
      </div>
    </div>
  );
}
