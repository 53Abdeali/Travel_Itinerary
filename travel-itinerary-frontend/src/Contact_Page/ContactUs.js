import React, { useState, useEffect } from "react";
import "./Contact.css";
import {
  FaPhone,
  FaLocationDot,
  FaMessage,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import { BsSendFill } from "react-icons/bs";
import wave from "./white-waves.png";
import MazarCardList from "./MazarCardList";

function ContactUs() {
  const [mazars, setMazars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMazars();
  }, []);
  

  useEffect(() => {
    if (searchTerm) {
      fetchMazarsByName(searchTerm);
      fetchMazarsByCity(searchTerm);
    } else {
      fetchMazars();
    }
  }, [searchTerm]);

  const fetchMazars = async () => {
    try {
      const response = await fetch("http://localhost:8082/api/mazars/all");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMazars(data);
    } catch (error) {
      console.error("Error fetching mazars:", error);
    }
  };

  const fetchMazarsByName = async (name) => {
    try {
      const response = await fetch(
        `http://localhost:8082/api/mazars/search?name=${encodeURIComponent(name)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMazars(data);
    } catch (error) {
      console.error("Error fetching mazars by name:", error);
    }
  };

  const fetchMazarsByCity = async (city) => {
    try {
      const response = await fetch(
        `http://localhost:8082/api/mazars/searchByCity?city=${encodeURIComponent(city)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMazars(data);
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

  return (
    <div>
      <div className="circle">
        <div className="outer">
          <div className="inner"></div>
        </div>
      </div>
      <div className="main-contact">
        <div className="left">
          <div className="cont-head">
            <h3>GET IN TOUCH</h3>
            <h1>
              <span>
                Convey Your
                <br />
              </span>
              Problems to Us
            </h1>
            <p className="para-cont">
              Contact us for any queries, questions, technical assistance, or
              collaboration opportunities via the contact information provided.
            </p>
            <div className="main-hex">
              <div className="hex">
                <FaPhone className="cont-icon" />
              </div>
              <p>+91-7869430953</p>
            </div>
            <div className="main-hex">
              <div className="hex">
                <FaMessage className="cont-icon" />
              </div>
              <p>dawoodibohratravel@gmail.com</p>
            </div>
            <div className="main-hex">
              <div className="hex hex3">
                <FaLocationDot className="cont-icon" />
              </div>
              <p>Ammar Masjid Office, Ammar Nagar, Indore</p>
            </div>
          </div>
        </div>

        <div className="right">
          <form className="contact-form">
            <div className="contact-input">
              <label className="label">Name</label>
              <input type="text" name="name" autoComplete="off" required />
            </div>

            <div className="cont-its">
              <div className="contact-input w-100">
                <label className="label">ITS ID</label>
                <input type="number" name="itsId" autoComplete="off" required />
              </div>

              <div className="contact-input">
                <label className="label">Phone Number</label>
                <input type="number" name="phone" autoComplete="off" required />
              </div>
            </div>

            <div className="contact-input">
              <label className="label">Message</label>
              <textarea name="message" autoComplete="off" required />
            </div>

            <div className="buttons">
              <button className="sub-btn upload w-100">
                <span>
                  <GrAttachment className="cont-icon" />
                  Add Attachment
                </span>
                <input type="file" name="attachment" />
              </button>
              <div className="sub-btn send">
                <BsSendFill className="cont-icon" />
                <input type="submit" value="Send Query" className="send" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>

      <div className="mazar-cont">
        <div className="txt">
          <h1>Mazaar Support Team</h1>
          <p>
            Our working hours are 9AM - 6PM as per the timezone of your country.
          </p>
        </div>
        <div className="cont-cards">
          <div className="search">
            <input
              type="search"
              placeholder="Search Mazaar Here"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaMagnifyingGlass onClick={handleSubmit} className="search-icon" />
          </div>
          <div className="mcards">
            <MazarCardList mazars = {mazars}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
