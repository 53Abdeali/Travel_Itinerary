import React , {useEffect}from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./Styles/Footer.css";

const quickLinks = [
  { value: "Home", href: "#!" },
  { value: "About Us", href: "#!" },
  { value: "Plan a Journey", href: "#!" },
  {value: "Terms and Conditions", href:"#!"}
];

const socialMedia = [
  { value: "Facebook", href: "#!" },
  { value: "Instagram", href: "#!" },
  { value: "LinkedIn", href: "#!" },
  { value: "Twitter", href: "#!" },
];

const features = [
  { value: "Community Centers", href: "#!" },
  { value: "Community Events", href: "#!" },
  { value: "Huzurala TUS Update", href: "#!" },
  { value: "Nearby Accomodations", href: "#!" },
];

const contactUs = [
  {
    value: "Indore, India",
    href: "#!",
  },
  {
    value: "jamat@ammarnagar.com",
    href: "#!",
  },
  {
    value: "+91-7869430953",
    href: "#!",
  },
];

const navigations = [
  {
    value: "Home",
    href: "#!",
  },
  {
    value: "About",
    href: "#!",
  },
  {
    value: "Privacy Policy",
    href: "#!",
  },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <a href={qLink.href}>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="me-2 small opacity-50"
      />
      {qLink.value}
    </a>
  </li>
);
QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
  <li>
    <a href={media.href}>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="me-2 small opacity-50"
      />
      {media.value}
    </a>
  </li>
);
SocialMedia.propTypes = {
  media: PropTypes.object.isRequired,
};

const JobInfo = ({ job }) => (
  <li>
    <a href={job.href}>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="me-2 small opacity-50"
      />{" "}
      {job.value}
    </a>
  </li>
);
JobInfo.propTypes = {
  job: PropTypes.object.isRequired,
};
const ContactUs = ({ contact }) => (
  <li>
    <a href={contact.href}>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="me-2 small opacity-50"
      />
      {contact.value}
    </a>
  </li>
);
ContactUs.propTypes = {
  contact: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
  <Nav.Item>
    <Nav.Link href={item.href}>{item.value}</Nav.Link>
  </Nav.Item>
);

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Footer = () => {
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
    <section className="ezy__footer3 light">
      <Container>
        <Row className="text-center text-sm-start">
          <Col lg={3}>
            <h2 className="fw-bold animate-on-scroll">Dawoodi Bohra Itinerary</h2>
          </Col>
          <Col sm={6} lg={2} className="mt-4 mt-lg-0 animate-on-scroll">
            <h5
              style={{
                fontSize: "2rem",
                color: "goldenrod",
                fontWeight: "800",
              }}
            >
              Quick Links
            </h5>
            <Nav className="flex-column ezy__footer3-quick-links animate-on-scroll">
              {quickLinks.map((qLink, i) => (
                <QuickLinks qLink={qLink} key={i} />
              ))}
            </Nav>
          </Col>
          <Col sm={6} lg={2} className="mt-4 mt-lg-0 animate-on-scroll">
            <h5 style={{
                fontSize: "2rem",
                color: "goldenrod",
                fontWeight: "800",
              }}>Social Media</h5>
            <Nav className="flex-column ezy__footer3-quick-links animate-on-scroll">
              {socialMedia.map((media, i) => (
                <SocialMedia media={media} key={i} />
              ))}
            </Nav>
          </Col>
          <Col sm={6} lg={2} className="mt-4 mt-lg-0 animate-on-scroll">
            <h5 style={{
                fontSize: "2rem",
                color: "goldenrod",
                fontWeight: "800",
              }}>Features</h5>
            <Nav className="flex-column ezy__footer3-quick-links animate-on-scroll">
              {features.map((job, i) => (
                <JobInfo job={job} key={i} />
              ))}
            </Nav>
          </Col>
          <Col sm={6} lg={3} className="mt-4 mt-lg-0 animate-on-scroll">
            <h5 style={{
                fontSize: "2rem",
                color: "goldenrod",
                fontWeight: "800",
              }}>Contact Us</h5>
            <Nav className="flex-column ezy__footer3-quick-links animate-on-scroll">
              {contactUs.map((contact, i) => (
                <ContactUs contact={contact} key={i} />
              ))}
            </Nav>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-between align-items-center text-center text-lg-start">
          <Col md={6}>
            <p
              style={{ color: "#3a5a40", fontSize: "1.5rem" }}
              className="mb-0 mt-1 animate-on-scroll"
            >
              Copyright &copy; Dawoodi Bohra Itinerary, All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <Nav
              style={{ color: "#3a5a40", fontSize: "1.5rem" }}
              className="ezy__footer3-nav justify-content-center justify-content-md-end mt-1 animate-on-scroll"
            >
              {navigations.map((item, i) => (
                <NavigationItem item={item} key={i} />
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
