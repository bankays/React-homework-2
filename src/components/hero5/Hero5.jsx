import React from "react";
import "./Hero5.scss";
function Hero5() {
  return (
    <div className="Hero5">
      <div className="container1">
        <div className="hero5-obj1">
          <div className="hero5-left1">
            <p className="hero5-p1">Contact Us</p>
            <p className="hero5-p2">
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <button className="hero1-btn2" id="kkk">
              <img className="hero1-img2" src="assets/hero1-img2.svg" alt="" />
              <p className="hero1-p3">Call us now</p>
              <p className="hero1-p4">(414) 567 - 2109</p>
            </button>
            <p className="hero5-p3">Not convinced yet?</p>
            <p className="hero5-p4">
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <button className="hero5-btn1">Browse our packages</button>
          </div>
          <div className="hero5-right1">
            <div className="hero5-inputs">
              <input
                className="hero5-input1"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="hero5-input2"
                type="text"
                placeholder="Phone Number"
              />
            </div>

            <div className="hero5-inputs">
              <input
                className="hero5-input1"
                type="text"
                placeholder="Adress"
              />
              <input className="hero5-input2" type="text" placeholder="Email" />
            </div>

            <div className="hero5-inputs">
              <input
                className="hero5-input1"
                type="text"
                placeholder="Requested service"
              />
              <input
                className="hero5-input2"
                type="text"
                placeholder="Day of service"
              />
            </div>
            <button className="submoit">Submit message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero5;
