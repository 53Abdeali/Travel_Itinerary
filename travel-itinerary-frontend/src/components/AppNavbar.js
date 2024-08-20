import React, { useState } from 'react';
import './Styles/AppNavbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

function AppNavbar() {
  const [showMediaIcon, setShowMediaIcon] = useState(false);

  const navigate = useNavigate();

  const handleAboutClick = (event) => {
    event.preventDefault(); 
    navigate('/about'); 
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        {/* <img src="path-to-your-logo-image" alt="Logo" /> */}
        <h2><span>B</span>ohra
        <span> I</span>tinerary</h2>
      </div>
      <div className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}>
        <ul>
        <li><a href="/" className="navbar-link">Home</a></li>
        <li><a href="/explore" className="navbar-link">Explore Destinations</a></li>
        <li><a href="/journey" className="navbar-link">Plan a Journey</a></li>
        <li><a href="/about" onClick={handleAboutClick} className="navbar-link">About Us</a></li>
        <li><a href="/contact" className="navbar-link">Contact Us</a></li>
        </ul>
      </div>

      <div className="login">
        <ul>
          <li><a href="/login" className="navbar-login-link">Login/Register</a></li>
        </ul>
        <div className='hamburger-menu'>
              <a href='/#' onClick={(e) => { e.preventDefault(); setShowMediaIcon(!showMediaIcon)}}>
                <GiHamburgerMenu style = {{color:'darkgreen'}}/>
              </a>
        </div>
      </div>
      
    </nav>
  );
}

export default AppNavbar;
