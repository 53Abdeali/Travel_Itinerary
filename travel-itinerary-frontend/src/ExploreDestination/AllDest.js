import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./ExploreStyle/AllDestination.css";
import AllDestCards from "./AllDestCards";

function AllDest() {
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
    <div className="all-dest-main animate-on-scroll">
      <div className="allDestSearch animate-on-scroll">
        <input
          type="search"
          placeholder="Search Mazar"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaMagnifyingGlass onClick={handleSubmit} className="caro-icon" />
      </div>
      <div>
        <AllDestCards mazars={mazars} />
      </div>
    </div>
  );
}

export default AllDest;
