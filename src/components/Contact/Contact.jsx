import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section__title text-center">Contact</h2>
        <span className="section__subtitle text-center">
          Contact with me by information below
        </span>
        <div className="contact__list mt-5 row align-items-center justify-content-center">
          <div className="col-3">
            <div className="contact__item d-flex align-items-center justify-content-center">
              <i class="bx bxs-home"></i>
              <div className="contact__info ms-2">
                <h5>Location</h5>
                <span>Da Nang, Viet Nam</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="contact__item d-flex align-items-center justify-content-center">
              <i class="bx bx-envelope"></i>
              <div className="contact__info ms-2">
                <h5>Email</h5>
                <span>hung01590159@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="contact__item d-flex align-items-center justify-content-center">
              <i class="bx bxs-phone"></i>
              <div className="contact__info ms-2">
                <h5>Phone Number</h5>
                <span>0899 240 188</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="contact__item d-flex align-items-center justify-content-center">
              <i class="bx bxl-facebook"></i>
              <div className="contact__info ms-2">
                <h5>Facebook</h5>
                <span>@hungnguyen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
