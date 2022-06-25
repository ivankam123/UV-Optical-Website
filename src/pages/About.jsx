import React from "react";
import map from "../images/map.png";
import storePic from "../images/store-pic.jpg";
import aboutBackground from "../images/banner-glasses-2.jpg";

const About = () => {
  return (
    <>
      <img src={aboutBackground} alt="" id="about-background-img" />
      <div className="about-wrapper">
        {/* <div className="about-content">
          <div className="img-wrapper">
            
            <p id="operation-hour">
              EVERY DAY <br></br>11AM - 7PM
            </p>
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src={map} alt="google map" />
          </div>
        </div> */}
        {/* <div className="triangle"></div>
        <p id="operation-hour">
          EVERY DAY <br></br>11AM - 7PM
        </p> */}
        <img src={storePic} alt="front of store" id="storePic" />

        <div className="about-text">
          <h2>ABOUT US</h2>
          <p className="about-p">
            We are located on the 3rd floor of Aberdeen Center, Richmond. Come
            visit us, or call us at 604-330-3143
          </p>
          <table className="desktop-hours">
            <tr>
              <th>Sunday</th>
              <td>11am - 7pm</td>
            </tr>
            <tr>
              <th>Monday</th>
              <td>11am - 7pm</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>11am - 7pm</td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td>11am - 7pm</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>11am - 7pm</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>11am - 7pm</td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>11am - 7pm</td>
            </tr>
          </table>
          <table className="mobile-hours">
            <tr>
              <th>Everyday</th>
              <td>11am - 7pm</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default About;
