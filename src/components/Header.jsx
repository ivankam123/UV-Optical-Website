import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import HeaderBar from "./HeaderBar";
import Logo from "../images/logo-final.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className="nav-wrapper">
          <a href="#home" className="nav-link">
            <img src={Logo} alt="" id="logo" />
            <p>Unlimited Vision Optical</p>
          </a>
          {isOpen ? (
            <ImCross className="bars" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <FaBars className="bars" onClick={() => setIsOpen(!isOpen)} />
          )}
          {isOpen && (
            <div className="mobile-nav-menu">
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </a>
              <a
                href="#about"
                className="mobile-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </a>
              <a
                href="#services"
                className="mobile-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Services
              </a>
              <a
                href="#collections"
                className="mobile-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Collections
              </a>
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </a>
            </div>
          )}

          <div className="nav-menu">
            <a href="#home" className="nav-link desktop-nav-link">
              Home
            </a>
            <a href="#about" className="nav-link desktop-nav-link">
              About
            </a>
            <a href="#services" className="nav-link desktop-nav-link">
              Services
            </a>
            <a href="#collections" className="nav-link desktop-nav-link">
              Collections
            </a>
            <a href="#contact" className="nav-link desktop-nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
