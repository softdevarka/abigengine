import "./footbar.scss";
import React, { useState } from "react";

const Footbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbox">
        <div className="navbar">
          <div className="logo">
            <a href="#">A Big Engine</a>
          </div>
          <ul className="links">
            <li>
              <a href="#">+91-9679975441</a>
            </li>
            <li>
              <a href="#">support@abigengine.com</a>
            </li>
            {/* <li>
              <a href="#">Privacy policies</a>
            </li>
            <li>
              <a href="#">Clientele</a>
            </li>
            <li>
              <a href="#">Learn more</a>
            </li> */}
          </ul>
          <a href="#" className="action_btn">
            Contact Us
          </a>
          <button onClick={toggleNavbar} className="toggle_btn">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown_menu">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Consulting</a>
          </li>
          <li>
            <a href="#">Industries</a>
          </li>
          <li>
            <a href="#">Learn More</a>
          </li>
          <li>
            <a href="#" className="action_btn">
              Contact Us
            </a>
          </li>
        </div>
      )}
    </header>
  );
};

export default Footbar;
