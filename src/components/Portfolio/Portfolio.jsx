import React from "react";
import elearningpic from "../../assets/imgs/elearningpic.png";
import courseicon from "../../assets/imgs/courseicon.png";
import shoeicon from "../../assets/imgs/shoe.png";
import usericon from "../../assets/imgs/user.png";
import shoeshoppic from "../../assets/imgs/shoeshoppic.png";
import portfoliopic from "../../assets/imgs/portfoliopic.png";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h2 className="section__title">Portfolio</h2>
        <div className="portfolio__list">
          <div className="portfolio__item row align-items-center">
            <div className="portfolio__img col-6">
              <img src={elearningpic} alt="" />
            </div>
            <div className="portfolio__info text-center col-6">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <h3 className="section__subtitle mb-0">ELEARNING CYBERSOFT</h3>
                <img src={courseicon} alt="" />
              </div>
              <p className="portfolio__desc mt-4 mb-3">
                The website describes the learning system including how features
                such as Register, Login, Search, Filter, Sign Up for Courses.
              </p>
              <div className="portfolio__languages mt-4 mb-5 d-flex justify-content-center gap-4">
                <span>React</span>
                <span>SCSS</span>
                <span>Antd Design</span>
              </div>
              <div className="portfolio__action d-flex justify-content-center gap-5">
                <a href="https://github.com/nhuminh24122000/Elearning_Capstone_Group1" className="d-flex align-items-center gap-1">
                  <span>Code</span>
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://elearning-capstone-group1.vercel.app/" className="d-flex align-items-center gap-1">
                  <span>Live Demo</span>
                  <i class="bx bx-chevrons-right arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio__item row align-items-center">
            <div className="portfolio__img col-6">
              <img src={shoeshoppic} alt="" />
            </div>
            <div className="portfolio__info text-center col-6">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <h3 className="section__subtitle mb-0">SHOE SHOP</h3>
                <img src={shoeicon} alt="" />
              </div>
              <p className="portfolio__desc mt-4 mb-3">
                The website describes shoe products, including functions such as
                Login, Register an account, Add, Delete, Search, Filter
                products.
              </p>
              <div className="portfolio__languages mt-4 mb-5 d-flex justify-content-center gap-4">
                <span>React</span>
                <span>SCSS</span>
                <span>Bootstrap</span>
              </div>
              <div className="portfolio__action d-flex justify-content-center gap-5">
                <a href="https://github.com/nhuminh24122000/Capstone_Group1_Buoi45" className="d-flex align-items-center gap-1">
                  <span>Code</span>
                  <i class="bx bxl-github"></i>
                </a>
                <a href="https://capstone-group1-buoi45.vercel.app/" className="d-flex align-items-center gap-1">
                  <span>Live Demo</span>
                  <i class="bx bx-chevrons-right arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio__item row align-items-center">
            <div className="portfolio__img col-6">
              <img src={portfoliopic} alt="" />
            </div>
            <div className="portfolio__info text-center col-6">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <h3 className="section__subtitle mb-0">PORTFOLIO</h3>
                <img src={usericon} alt="" />
              </div>
              <p className="portfolio__desc mt-4 mb-3">
                The website describes My portfolio where you can get my
                information and my done projects
              </p>
              <div className="portfolio__languages mt-4 mb-5 d-flex justify-content-center gap-4">
                <span>React</span>
                <span>SCSS</span>
              </div>
              <div className="portfolio__action d-flex justify-content-center gap-5">
                <a href="" className="d-flex align-items-center gap-1">
                  <span>Code</span>
                  <i class="bx bxl-github"></i>
                </a>
                <a href="" className="d-flex align-items-center gap-1">
                  <span>Live Demo</span>
                  <i class="bx bx-chevrons-right arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
