import React from "react";

import { ImEye } from "react-icons/im";
import { GiSunglasses, GiProtectionGlasses } from "react-icons/gi";
import { FiTool } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

import cardBackground1 from "../images/glasses-pic.jpg";
import cardBackground2 from "../images/glasses-pic-14.jpg";
import cardBackground3 from "../images/glasses-pic-15.jpg";
import cardBackground4 from "../images/glasses-pic-9.jpg";
import cardBackground5 from "../images/glasses-pic-11.jpg";
import cardBackground6 from "../images/glasses-pic-6.jpg";

const Services = () => {
  return (
    <>
      <div className="service-wrapper">
        <h2>OUR SERVICES </h2>

        <div className="service-cards">
          <div className="card">
            <h4>Lens Consultation</h4>
            <GiSunglasses size={40} />
            <p>
              We carry a variety of contact lenses, from daily, bi-weekly, to
              monthly, so you can choose which ones fit your lifestyle!
            </p>
            <div className="cardBackground">
              <img
                src={cardBackground1}
                alt=""
                className="cardBackground-img"
              />
            </div>
          </div>
          <div className="card">
            <h4>Vision Exam</h4>
            <ImEye size={35} />
            <p>
              Our store is equipped with advanced optometric equipment to
              provide the highest quality examination.
            </p>
            <div className="cardBackground">
              <img
                src={cardBackground2}
                alt=""
                className="cardBackground-img"
              />
            </div>
          </div>
          <div className="card">
            <h4>Frame Adjustment</h4>
            <FiTool size={35} />
            <p>
              Something feels loose on your frames? Come visit us and we can
              have your eyewear adjusted to fit you!
            </p>
            <div className="cardBackground">
              <img
                src={cardBackground3}
                alt=""
                className="cardBackground-img"
              />
            </div>
          </div>
        </div>
        <div className="service-cards">
          <div className="card">
            <h4>Book Appointment</h4>
            <AiOutlineSchedule size={40} />
            <p>
              Stop by our store to book an appointment! Whether vision exam or
              consulting, you are always welcome!
            </p>
            <div className="cardBackground">
              <img
                src={cardBackground4}
                alt=""
                className="cardBackground-img"
              />
            </div>
          </div>
          <div className="card">
            <h4>Tips and Advice</h4>
            <MdOutlineTipsAndUpdates size={35} />
            <p>
              Our number one priority is the health of your vision, and we can
              provide tips on how to maintain it!
            </p>
            <div className="cardBackground">
              <img
                src={cardBackground5}
                alt=""
                className="cardBackground-img"
              />
            </div>
          </div>
          <div className="card">
            <h4>Glasses Cleaning</h4>
            <GiProtectionGlasses size={35} />
            <p>
              Lens got a bit blurry? Come by our store and we can quickly clean
              them for you with our technology.
            </p>
            <div className="cardBackground">
              <img
                src={cardBackground6}
                alt=""
                className="cardBackground-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
