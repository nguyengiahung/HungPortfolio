import React from "react";
import "./Info.scss";

function Info() {
  return (
    <div>
      <div>
        <div className="info">
          <h2 className="section__title d-none d-md-block">About Me</h2>
          <span className="section__subtitle mb-3 mt-4 mt-md-0">
            A dedicated Front-End Developer based in Da Nang, Viet Nam
          </span>
          <p className="info__para">
            I'm extremely passionate about web development especially Frontend
            Development, I have graduated at Da Nang University of Economics and
            finished Frontend Development Course at CyberSoft Academy. Now I
            have experience about creating responsive website by using languages
            which I had learnt, so I want to contribute and help businesses and
            improve their online presence.
          </p>
        </div>
        <button className="button">
          View CV
          <i className="bx bx-file button__icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Info;
