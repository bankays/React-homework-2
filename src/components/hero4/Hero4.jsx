import React from "react";
import "./Hero4.scss";
function Hero4() {
  return (
    <div className="Hero4">
      <div className="container1">
        <p className="hero4-p1">Articles & resources</p>
        <div className="hero4-buttons">
          <button className="hero4-btn1"> Get free a quote</button>
          <button className="hero4-btn2">Browse article</button>
        </div>
        <div className="hero4-obj1">
          <div className="hero4-card1">
            <img className="hero4-img1" src="assets/hero4-img1.svg" alt="" />
            <p className="hero4-p3">
              8 best vacuum cleaners to clean any mess for your home in 2022
            </p>
            <p className="hero4-p4">
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
          </div>
          <div className="hero4-card1">
            <img className="hero4-img1" src="assets/hero4-img2.svg" alt="" />
            <p className="hero4-p3">
              How to properly disinfect your phone and other electronics
            </p>
            <p className="hero4-p4">
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero4;
