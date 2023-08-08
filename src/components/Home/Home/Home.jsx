import React from "react";
import Social from "../Social/Social";
import Content from "../Content/Content";
import ava1 from "../../../assets/imgs/ava1.jpg";
import "./Home.scss";

function Home() {
  return (
    <section className="section home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <Social />
          </div>
          <div className="col-6">
            <Content />
          </div>
          <div className="col-4 home__ava"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
