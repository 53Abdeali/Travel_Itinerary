import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ExploreStyle/alldest.css";
import design from "./ExploreStyle/design-copy.png";
import design1 from "./ExploreStyle/design1.png";
import DestinationCards from "./DestinationCards";

function AllDestination() {
  const [mazars, setMazars] = useState([]);

  useEffect(() => {
    fetchMazars();
  }, []);

  const fetchMazars = async () => {
    try {
      const response = await axios.get(
        "http://192.168.181.65:8082/api/mazars/all"
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
    <div className="main-alld">
      <div className="alld animate-on-scroll">
        <img src={design} alt="design" />
        <h2>
          <Link to="/AllMain" className="caro-link">
            All Destinations
          </Link>
        </h2>
        <img src={design} alt="design" />
      </div>
      <DestinationCards mazars={mazars} />
      <div className="note animate-on-scroll">
        <p>
          Note: To explore more mazars and their significance either{" "}
          <Link className="note-link" to="/#">
            click here
          </Link>{" "}
          or click above on All Destinations.
        </p>
        <img className="design animate-on-scroll" src={design1} alt="design" />
      </div>
    </div>
  );
}

export default AllDestination;
