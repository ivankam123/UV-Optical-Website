import React from "react";
import glassPic from "../images/glasses-pic-5.jpg";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineGoogle,
} from "react-icons/ai";
import contactPic from "../images/glasses-pic-17.jpg";
import Map from "../images/map.png";

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
        <h2>CONTACT US</h2>
        {/* <img src={glassPic} alt="eye Exam" className="contact-banner" /> */}
        <div className="contact-section">
          <div>
            <img
              src={contactPic}
              alt="aesthetic glasses"
              className="contact-pic"
            />
          </div>
          <div className="contact-info">
            <div>
              <img src={Map} alt="" />
            </div>
            <div className="store-information">
              <p>
                <h4>Address: </h4>
                <p>
                  Unite 3700-4151 Hazelbridge Way, Aberdeen Centre, Richmond,
                  BC, Canada, V6X 4J7
                </p>
              </p>
              <p>
                <h4>Phone#: </h4>
                (604) 330-3143
              </p>
              <p>
                <h4>Hours: </h4>
                11AM - 7PM
              </p>
            </div>

            <div className="social-media-icons">
              <a
                href="https://www.facebook.com/people/%E8%A6%96%E8%A6%BA-%E7%84%A1%E9%99%90-Unlimited-Vision-Optical/100057696769525/"
                target="blank"
              >
                <AiOutlineFacebook size={63} color="black" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=%2B12368861689&fbclid=IwAR0T_q87Omlu8G-zvqAHbugdsJ7XPrpzmkahdH5h4P7-xNKWz6CMkDDWL_c"
                target="blank"
              >
                <AiOutlineWhatsApp size={61.5} color="black" />
              </a>
              <a
                target="blank"
                href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCusMjWpKjIyYLRSNagwNbEwMzc1NjK2TLVIMjFIsgIKmRtapKaZJSWbmZhYWiaaeUmU5uVk5maWpKYolGUWZ-bnKeQXlGQmJ-YAAIMWGD0&q=unlimited+vision+optical&rlz=1C1CHBF_enHK857CA857&oq=un&aqs=chrome.1.69i59j46i39i175i199j69i59l2j69i61l3j69i60.937j0j7&sourceid=chrome&ie=UTF-8"
              >
                <AiOutlineGoogle size={63} color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
