import React from "react";
import "./Hero2.scss";
function Hero2() {
  return (
    <div className="Hero2">
      <div className="container1">
        <p className="hero2-p1">About us</p>
        <p className="hero2-p2">
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
        <div className="hero2-obj1">
          <div className="hero2-card1">
            <img className="hero2-img1" src="assets/hero2-img1.svg" alt="" />
            <p className="hero2-p3">1. Schedule online</p>
            <p className="hero2-p4">
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>

          <div className="hero2-card1">
            <img className="hero2-img2" src="assets/hero2-img2.svg" alt="" />
            <p className="hero2-p3">2. Pay online easily</p>
            <p className="hero2-p4">
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>

          <div className="hero2-card1">
            <img className="hero2-img2" src="assets/hero2-img3.svg" alt="" />
            <p className="hero2-p3">3. Get your house cleaned</p>
            <p className="hero2-p4">
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
        </div>
        <div className="hero2-group-buttons1">
          <button className="hero2-btn1">Get a free quote</button>
          <button className="hero2-btn2">Explore services</button>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
