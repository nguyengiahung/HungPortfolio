import React from "react";
import "./About.scss";
import Info from "../Info/Info";
import ava2 from "../../../assets/imgs/ava2.jpg";
import pattern from "../../../assets/imgs/pattern.png";

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="about__ava">
              <img className="about__image" src={ava2} alt="" />
              <img className="about__bg" src={pattern} alt="" />
            </div>
          </div>
          <div className="col-6">
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
