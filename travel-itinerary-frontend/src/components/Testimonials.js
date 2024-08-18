import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import './Styles/Testimonials.css'

const testimonialList = [
  {
    author: {
      fullName: "Abdeali Kota Wala",
      picture: "",
      designation: "Founder / CEO",
    },
    rating: 3.5,
    description:
      "My pilgrimage was deeply enriching, and the itinerary made it seamless. The tips on visiting lesser-known sites were invaluable",
  },
  {
    author: {
      fullName: "Murtaza Kannod Wala",
      picture: "",
      designation: "Business Head",
    },
    rating: 3.8,
    description:
      "Traveling as a Zaereen, this itinerary was a blessing. The detailed planning and community insights made my journey smooth.",
  },
  {
    author: {
      fullName: "Taher Badwani Wala",
      picture: "",
      designation: "Business Man",
    },
    rating: 4.5,
    description:
      "This site was a game-changer for my trip. The itinerary was spot on, and the reviews helped me discover hidden gems.",
  },
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p
    className={classNames("mb-4 ezy__testimonial1-rating", className)}
    {...rest}
  >
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = <FontAwesomeIcon icon={faStar} className="me-1 active" />;
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon icon={faStarHalfAlt} className="me-1 active" />
          );
        else if (index > rating)
          content = <FontAwesomeIcon icon={faStar} className="me-1" />;

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
  <div className="ezy__testimonial1-item px-4 py-4">
    <div className="ezy__testimonial1-content mt-3">
      <Rating rating={testimonial.rating} showLabel={false} />
      <p className="opacity-50 mb-4">{testimonial.description}</p>
      <div className="d-flex align-items-center">
        <div className="me-2">
          <img
            src={testimonial.author.picture}
            alt={testimonial.author.fullName}
            className="img-fluid rounded-circle border"
            width="47"
          />
        </div>
        <div>
          <h4 className="mb-0 fs-5">{testimonial.author.fullName}</h4>
          <p className="mb-0 small">
            <i>{testimonial.author.designation}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const Testimonials = () => {
  return (
    <section className="ezy__testimonial1 light">
      <Container>
        <Row className="justify-content-center mb-md-4">
          <Col lg={6} xl={5} className="text-center">
            <h2 className="ezy__testimonial1-heading mb-3">
              Community Reviews
            </h2>
            <p className="ezy__testimonial1-sub-heading mb-0">
            Read heartfelt reviews and insights from fellow Zaereen on their spiritual journeys. Let their experiences and tips guide you in crafting your perfect travel itinerary
            </p>
          </Col>
        </Row>
        <Row>
          {testimonialList.map((testimonial, i) => (
            <Col md={6} lg={4} className="mt-4" key={i}>
              <TestimonialItem testimonial={testimonial} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
