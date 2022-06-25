import React from "react";
import Brand1 from "../images/brand-logo-1.svg";
import Brand2 from "../images/brand-logo-2.svg";
import Brand3 from "../images/brand-logo-3.svg";
import Brand4 from "../images/brand-logo-4.svg";
import Brand5 from "../images/brand-logo-5.svg";
import Brand6 from "../images/brand-logo-6.svg";
import Brand7 from "../images/brand-logo-7.svg";
import Brand8 from "../images/brand-logo-8.svg";
import Brand9 from "../images/brand-logo-9.svg";
import Brand10 from "../images/brand-logo-10.svg";
import Brand11 from "../images/brand-logo-11.svg";
import Marquee from "react-fast-marquee";

const Products = () => {
  return (
    <div className="marquee-section">
      {/* <h2>Featured Brands</h2> */}
      <Marquee play speed={70}>
        <div className="marquee-wrapper">
          <div>
            <img src={Brand1} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand2} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand3} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand4} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand5} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand6} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand7} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand8} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand9} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand10} alt="brand 1 marquee" className="brand-card" />
          </div>
          <div>
            <img src={Brand11} alt="brand 1 marquee" className="brand-card" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Products;
