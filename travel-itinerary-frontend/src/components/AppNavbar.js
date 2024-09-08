import React, { useState } from "react";
import "./Styles/AppNavbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "./Images/Logo.png";

function AppNavbar() {
  const [showMediaIcon, setShowMediaIcon] = useState(false);

  return (
    <nav className="main-nav">
      <div className="logo">
        <img style={{ width: "50px", height: "50px" }} src={logo} alt="Logo" />
        <h2>رِحْلَةُ الْمُؤْمِنِيْنْ</h2>
      </div>
      <div
        className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/explore" className="navbar-link">
              Explore Destinations
            </Link>
          </li>
          <li>
            <Link to="/journey" className="navbar-link">
              Plan a Journey
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="login">
        <ul>
          <li>
            <a href="/login" className="navbar-login-link">
              Login/Register
            </a>
          </li>
        </ul>
        <div className="hamburger-menu">
          <a
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              setShowMediaIcon(!showMediaIcon);
            }}
          >
            <GiHamburgerMenu style={{ color: "#3a5a40" }} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
