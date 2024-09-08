import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/Logo.png";
import "./Styles/Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {
  const [showMediaNavElement, setShowMediaNavElement] = useState(false);

  useEffect(() => {
    const handleTouchOutside = (e) => {
      if (showMediaNavElement) {
        setTimeout (() => {
            setShowMediaNavElement(false);
        },300)
      }
    };

    // Add touchstart event listener
    window.addEventListener("touchstart", handleTouchOutside);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [showMediaNavElement]);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="main-nav">
      <div className="nav-comp">
        <div className="left-nav">
          <div className="nav-logo animate-on-scroll">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-text animate-on-scroll">
            <h2>رِحْلَةُ الْمُؤْمِنِيْنْ</h2>
          </div>
        </div>

        <div
          className={
            showMediaNavElement ? "center-nav mobile-center-nav" : "center-nav"
          }
        >
          <div className="nav-link animate-on-scroll">
            <Link className="nav-list animate-on-scroll" to="/">
              Home
            </Link>
          </div>

          <div className="nav-link">
            <Link className="nav-list" to="/explore">
              Explore Destinations
            </Link>
          </div>

          <div className="nav-link">
            <Link className="nav-list" to="/journey">
              Plan a Journey
            </Link>
          </div>

          <div className="nav-link">
            <Link className="nav-list" to="/about">
              About Us
            </Link>
          </div>

          <div className="nav-link">
            <Link className="nav-list" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="right-nav">

          <div className="nav-login">
            <Link className="nav-list" to="/login">
              Login / Register
            </Link>
          </div>

          <div className="ham-menu">
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                setShowMediaNavElement(!showMediaNavElement);
              }}
            >
              <GiHamburgerMenu className="ham-icon" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
