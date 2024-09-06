import React, { useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";
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
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: true,
    question: "What is the Dawoodi Bohra Travel Itinerary platform?",
    answer:
      "The Dawoodi Bohra Travel Itinerary is a personalized trip-planning service designed for the Dawoodi Bohra community to help members easily visit religious and cultural sites.",
  },
  {
    isActive: false,
    question:
      "Can I plan multiple destinations in one trip using this service?",
    answer:
      "Yes, the platform allows users to plan multiple destinations, optimizing the travel route and providing information on nearby religious sites.",
  },
  {
    isActive: false,
    question: "Does the platform provide real-time travel updates?",
    answer:
      "Yes, the itinerary includes real-time traffic updates and fare estimation to help users plan their travel efficiently.",
  },
  {
    isActive: false,
    question: "Can I book accommodations and transport through the platform?",
    answer:
      "While the itinerary focuses primarily on planning, there are features in development that will allow users to book accommodations and transportation directly through the platform.",
  },
  {
    isActive: false,
    question:
      "How do I find contact details for local representatives at each destination?",
    answer:
      "The itinerary provides contact details for key religious sites, including the mazar and local representatives, ensuring a smooth and connected visit.",
  },
  {
    isActive: false,
    question: "Is this platform available globally?",
    answer:
      "Initially, the service focuses on religious sites within India, but future updates will cover destinations in other countries like Asian countries, Middle East and NATO nations.",
  },
  {
    isActive: false,
    question: "Is there a mobile version of the platform?",
    answer:
      "Yes, the platform is responsive and accessible on mobile devices, ensuring users can plan and track their itineraries on the go.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive || false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className="ezy__faq10-item mt-4">
      <Button
        variant=""
        className={classNames(
          "p-3 p-lg-4 w-100 text-start d-flex justify-content-between align-items-center ezy__faq10-btn-collapse",
          { active: isOpen }
        )}
        type="button"
        onClick={toggleFaq}
      >
        <span
          style={{
            color: "#3a5a40",
            fontFamily: "'Poppins',serif",
            fontSize: "15px",
          }}
          className="animate-on-scroll"
        >
          {faq.question}
        </span>
        <FontAwesomeIcon style={{ color: "#3a5a40" }} icon={faChevronDown} />
      </Button>
      <Collapse in={isOpen}>
        <div>
          <div className="ezy__faq10-content p-3 p-lg-4">
            <p
              style={{
                color: "goldenrod",
                fontFamily: "'Poppins',serif",
                fontSize: "15px",
              }}
              className="opacity-100 mb-0 animate-on-scroll"
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

function ContactUs() {
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

  const [formData, setFormData] = useState({
    name: "",
    itsId: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.itsId) tempErrors.itsId = "ITS ID is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmitContact = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    } else {
      try {
        await axios.post("/api/contact", formData);
        alert("Message sent succesfully!");
        setFormSubmitted(true);
        setFormData({ name: "", itsId: "", phone: "", message: "" });
      } catch (error) {
        console.log("Error sending message!", error);
        alert("Error sending message");
      }
    }
  };

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
            <h3 className="animate-on-scroll">GET IN TOUCH</h3>
            <h1 className="animate-on-scroll">
              <span>
                Convey Your
                <br />
              </span>
              Problems to Us
            </h1>
            <p className="para-cont animate-on-scroll">
              Contact us for any queries, questions, technical assistance, or
              collaboration opportunities via the contact information provided.
            </p>
            <div className="main-hex">
              <div className="hex animate-on-scroll">
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
        {formSubmitted ? (
        <div className="success-message">
          <p>Your query has been sent successfully!</p>
          <button onClick={() => setFormSubmitted(false)}>Send Another Query</button>
        </div>
      ) : (
          <form onSubmit={handleSubmitContact} className="contact-form">
            <div className="contact-input animate-on-scroll">
              <label className="label">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                autoComplete="off"
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="cont-its">
              <div className="contact-input w-100 animate-on-scroll">
                <label className="label">ITS ID</label>
                <input
                  type="number"
                  name="itsId"
                  value={formData.itsId}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
                {errors.itsId && <p className="error">{errors.itsId}</p>}
              </div>

              <div className="contact-input animate-on-scroll">
                <label className="label">Phone Number</label>
                <input
                  value={formData.phone}
                  onChange={handleChange}
                  type="number"
                  name="phone"
                  autoComplete="off"
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>

            <div className="contact-input animate-on-scroll">
              <label className="label">Message</label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                name="message"
                autoComplete="off"
                required
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <div className="buttons animate-on-scroll">
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
      )}
        </div>
      </div>
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>

      <div className="mazar-cont">
        <div className="txt">
          <h1 className="animate-on-scroll">Mazaar Support Team</h1>
          <p className="animate-on-scroll">
            Our working hours are 9AM - 6PM as per the timezone of your country.
          </p>
        </div>
        <div className="cont-cards">
          <div className="search animate-on-scroll">
            <input
              type="search"
              placeholder="Search Mazaar Here"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaMagnifyingGlass onClick={handleSubmit} className="search-icon" />
          </div>
          <div className="mcards animate-on-scroll">
            <MazarCardList className="animate-on-scroll" mazars={mazars} />
          </div>
        </div>
      </div>

      <section className="ezy__faq10 light">
        <Container>
          <Row>
            <Col lg={8} className="mb-5">
              <h2
                style={{ color: "#3a5a4c", fontFamily: "'Poppins',serif" }}
                className="ezy__faq10-heading mb-4 animate-on-scroll"
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{ color: "#3a5a4c", fontFamily: "'Poppins',serif" }}
                className="ezy__faq10-sub-heading mb-0 animate-on-scroll"
              >
                The Dawoodi Bohra Travel Itinerary is a dedicated platform
                designed to simplify pilgrimage planning for the Dawoodi Bohra
                community. It offers detailed itineraries, route optimizations,
                and real-time updates for visiting mazars and religious
                landmarks.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col md={4} className="mb-4 mb-md-0">
              <div
                className="ezy__faq10-bg-holder h-100 animate-on-scroll"
                style={{
                  backgroundImage:
                    "url(https://cdn.easyfrontend.com/pictures/blog/blog_14_1.jpg)",
                }}
              />
            </Col>
            <Col md={8} className="ps-lg-5 animate-on-scroll">
              {faqList.map((faq, i) => (
                <FaqItem faq={faq} key={i} />
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ContactUs;
