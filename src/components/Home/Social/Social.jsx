import React from "react";
import './Social.scss'

function Social() {
  return (
    <div className="home__social d-flex flex-column gap-2">
      <a href="#" target="_blank">
        <i class="bx bxl-instagram"></i>
      </a>
      <a href="#" target="_blank">
        <i class="bx bxl-facebook"></i>
      </a>
      <a href="#" target="_blank">
        <i class="bx bxl-github"></i>
      </a>
    </div>
  );
}

export default Social;
