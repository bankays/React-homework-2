import React from "react";
import "./Hero1.scss";

function Hero1() {
  return (
    <div className="Hero1">
      <div className="container1">
        <div className="hero1-obj1">
          <div className="hero1-left1">
            <p className="hero1-p1">Quality cleaning for your home</p>
            <p className="hero1-p2">
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <button className="hero1-btn1">Get a free quote</button>
            <button className="hero1-btn2">
              <img className="hero1-img2" src="assets/hero1-img2.svg" alt="" />
              <p className="hero1-p3">Call us now</p>
              <p className="hero1-p4">(414) 567 - 2109</p>
            </button>
          </div>
          <div className="hero1-right1">
            <img className="hero1-img3" src="assets/Hero1-img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
