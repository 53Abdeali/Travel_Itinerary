import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";
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

  const fetchMazarsByName = async (name) => {
    try {
      const response = await axios.get(
        `http://192.168.181.65:8082/api/mazars/search?name=${encodeURIComponent(
          name
        )}`
      );
      setMazars(response.data);
    } catch (error) {
      console.error("Error fetching mazars by name:", error);
    }
  };

  const fetchMazarsByCity = async (city) => {
    try {
      const response = await axios.get(
        `http://192.168.181.65:8082/api/mazars/searchByCity?city=${encodeURIComponent(
          city
        )}`
      );
      setMazars(response.data);
    } catch (error) {
      console.error("Error fetching mazars by city:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMazarsByName(searchTerm);
    fetchMazarsByCity(searchTerm);
  };

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      fetchMazarsByName(searchTerm);
      fetchMazarsByCity(searchTerm);
    } else {
      fetchMazars();
    }
  }, [searchTerm]);

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
      <div className="exploreSearch animate-on-scroll">
          <input
            type="search"
            placeholder="Search Mazar By Name or By City"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FaMagnifyingGlass onClick={handleSubmit} className="caro-icon" />
        </div>
      <div className="alld animate-on-scroll">
        <img className="alld-img" src={design} alt="design" />
        <h2>
          <Link to="/allDestination" className="caro-link">
            All Destinations
          </Link>
        </h2>
        <img src={design} alt="design" />
      </div>
      <DestinationCards mazars={mazars} />
      <div className="note animate-on-scroll">
        <p>
          Note: To explore more mazars and their significance either{" "}
          <Link className="note-link" to="/allDestination">
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
