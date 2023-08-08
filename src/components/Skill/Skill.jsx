import React from "react";
import "./Skill.scss";
import htmlicon from "../../assets/imgs/html5.svg";
import reacticon from "../../assets/imgs/reacticon.svg";
import cssicon from "../../assets/imgs/css-3.svg";
import bootstrapicon from "../../assets/imgs/bootstrap-4.svg";
import sassicon from "../../assets/imgs/sass-1.svg";
import typesripticon from "../../assets/imgs/typescripticon.svg";
import giticon from "../../assets/imgs/giticon.svg";
import jsicon from "../../assets/imgs/jsicon.svg";

function Skill() {
  return (
    <section className="section skill" id="skill">
      <div className="container">
        <h2 className="section__title text-center">Skill</h2>
        <span className="section__subtitle text-center mt-2 mb-5">
          My skill level
        </span>
        <ul className="d-flex flex-wrap align-items-center justify-content-between">
          <li>
            <img src={htmlicon} alt="" />
          </li>
          <li>
            <img src={cssicon} alt="" />
          </li>
          <li>
            <img src={sassicon} alt="" />
          </li>
          <li>
            <img src={bootstrapicon} alt="" />
          </li>
          <li>
            <img src={jsicon} alt="" />
          </li>
          <li>
            <img src={reacticon} alt="" />
          </li>
          <li>
            <img src={typesripticon} alt="" />
          </li>
          <li>
            <img src={giticon} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skill;
