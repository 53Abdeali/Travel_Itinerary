import React, { useEffect, useState } from "react";
import axios from "axios";
import DestinationCards from "./DestinationCards";
import "./ExploreStyle/mostvisited.css";
import design1 from "./ExploreStyle/design1.png";

function MostVisited() {
  const [mazars, setMazars] = useState([]);

  useEffect(() => {
    fetchMazarsByVisited();
  }, []);

  const fetchMazarsByVisited = async () => {
    try {
      const response = await axios.get(
        "http://192.168.181.65:8082/api/mazars/visited"
      );
      setMazars(response.data);
    } catch (error) {
      console.error("Error fetching mazars:", error);
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
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
    <div className="main-mv">
      <div className="mv">
        <div className="mv-head animate-on-scroll">
          <h1>Most Visited Mazar</h1>
        </div>
      </div>
      <DestinationCards className="mv-des animate-on-scroll" mazars={mazars} />
      <div className="mv-img animate-on-scroll">
        <img className="design animate-on-scroll" src={design1} alt="design" />
      </div>
    </div>
  );
}

export default MostVisited;
