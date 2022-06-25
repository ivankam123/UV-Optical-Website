import React from "react";
import bannerImg from "../images/glasses-pic-8.jpg";
import Header from "./Header";
import HeaderBar from "./HeaderBar";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="banner-image-wrapper" id="home">
        <motion.img
          src={bannerImg}
          alt=""
          className="banner-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <Header></Header>
        <div className="banner-text">
          <motion.p
            className="welcome-text"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Welcome to <br></br>Unlimited Vision Optical
          </motion.p>

          <div className="banner-buttons">
            <a href="#collections" className="banner-button">
              Collections
            </a>
            <a href="#contact" className="banner-button">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
