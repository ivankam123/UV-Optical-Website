import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer">
          <div className="footer-heading footer-1">
            <h2>About Us</h2>
            <a href="#contact">Location</a>
            <a href="#collections">Products</a>
            <a href="about">Hours</a>
            <a href="services">Services</a>
          </div>
          <div className="footer-heading footer-2">
            <h2>Contact Us</h2>
            <a href="#contact">Appointment</a>
            <a
              target="blank"
              href="https://www.facebook.com/people/%E8%A6%96%E8%A6%BA-%E7%84%A1%E9%99%90-Unlimited-Vision-Optical/100057696769525/"
            >
              Support
            </a>
            <a href="#contact">Contact</a>
            <a
              target="blank"
              href="https://api.whatsapp.com/send?phone=%2B12368861689&fbclid=IwAR0T_q87Omlu8G-zvqAHbugdsJ7XPrpzmkahdH5h4P7-xNKWz6CMkDDWL_c"
            >
              What's App
            </a>
          </div>
          <div className="footer-heading footer-3">
            <h2>Social Media</h2>
            <a
              target="blank"
              href="https://www.facebook.com/people/%E8%A6%96%E8%A6%BA-%E7%84%A1%E9%99%90-Unlimited-Vision-Optical/100057696769525/"
            >
              Facebook
            </a>
            <a
              target="blank"
              href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCusMjWpKjIyYLRSNagwNbEwMzc1NjK2TLVIMjFIsgIKmRtapKaZJSWbmZhYWiaaeUmU5uVk5maWpKYolGUWZ-bnKeQXlGQmJ-YAAIMWGD0&q=unlimited+vision+optical&rlz=1C1CHBF_enHK857CA857&oq=un&aqs=chrome.1.69i59j46i39i175i199j69i59l2j69i61l3j69i60.937j0j7&sourceid=chrome&ie=UTF-8"
            >
              Google
            </a>
            <a target="blank" href="https://www.xiaohongshu.com/">
              Xiao Hong Shu
            </a>
            <a target="blank" href="https://www.instagram.com">
              Instagram
            </a>
          </div>
          <div className="footer-email-form">
            <h2>Join our community</h2>
            <input
              type="email"
              placeholder="Enter your email address"
              id="footer-email"
            ></input>
            <input
              type="submit"
              placeholder="Sign Up"
              id="footer-email-btn"
            ></input>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
