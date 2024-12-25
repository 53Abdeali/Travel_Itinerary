import React from "react";
import "./Journey_Styles/herojourney.css";
import travel from "./Journey_Images/travel.jpg";

function HeroJourney() {
  return (
    <div className="jhero">
      <div className="jmain">
        <div className="transparent">
          <div className="jour-head">
            <h1>Plan A Journey</h1>
          </div>
        </div>
        <img src={travel} alt="Jorney" />
      </div>
    </div>
  );
}

export default HeroJourney;
