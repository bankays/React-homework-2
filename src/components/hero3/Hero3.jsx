import React from "react";
import "./Hero3.scss";
function Hero3() {
  return (
    <div className="Hero3">
      <div className="container1">
        <p className="hero3-p1">Our Services</p>
        <button className="hero3-btn1">Explore Service</button>
        <div className="hero3-obj1">
          <div className="hero3-card1">
            <img className="hero3-img1" src="assets/hero3-img1.svg" alt="" />
            <p className="hero3-p2">House cleaning</p>
            <p className="hero3-p3">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>

          <div className="hero3-card1">
            <img className="hero3-img2" src="assets/hero3-img2.svg" alt="" />
            <p className="hero3-p2">House cleaning</p>
            <p className="hero3-p3">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>

          <div className="hero3-card1">
            <img className="hero3-img3" src="assets/hero3-img3.svg" alt="" />
            <p className="hero3-p2">House cleaning</p>
            <p className="hero3-p3">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>

        <div className="hero3-obj2">
          <div className="hero3-left1">
            <img src="assets/hero3-obj-img1.svg" alt="" />
          </div>
          <div className="hero3-right1">
            <p className="hero3-p4">Covid-19 sanitization</p>
            <p className="hero3-p5">
              We follow guidelines to keep you safe from the COVID-19 virus
            </p>
            <p className="hero3-p6">
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className="hero3-btn-group">
              <button className="hero1-btn1">Get a free quote</button>
              <button className="hero1-btn2">
                <img
                  className="hero1-img2"
                  src="assets/hero1-img2.svg"
                  alt=""
                />
                <p className="hero1-p3">Call us now</p>
                <p className="hero1-p4" id="hero3-p4">
                  (414) 567 - 2109
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
