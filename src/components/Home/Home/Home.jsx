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
          <div className="home__social col-sm-2 col-5 order-sm-1">
            <Social />
          </div>
          <div className="col-sm-6 col-12 order-sm-2 order-3 mt-4 mt-sm-0">
            <Content />
          </div>
          <div className="col-sm-4 col-7 home__ava order-sm-3 order-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
