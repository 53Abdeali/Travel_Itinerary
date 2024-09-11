import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./ExploreStyle/triporquery.css";

function TripOrQuery() {
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
    <div className="toq">
      <div className="trip-or-query">
        <div className="trip-circle animate-on-scroll">
          <h1 className="animate-on-scroll">Explored The Mazars?</h1>
          <h2 className="animate-on-scroll">Want to plan a Journey?</h2>
          <p className="animate-on-scroll">
            Let us plan a journey and make an itinerary for the better travel
            experience.
          </p>
          <div className="trip-link animate-on-scroll">
            <Link to="/journey" className="tlink">
              Plan a Journey
            </Link>
          </div>
        </div>
        <div className="query-circle animate-on-scroll">
          <h1 className="animate-on-scroll">How we got this idea?</h1>
          <h2 className="animate-on-scroll">Excited to know about us?</h2>
          <p className="animate-on-scroll">
            Just click below to get a better understanding about us and
            Rehlat-Ul-Mumenin.
          </p>
          <div className="query-link animate-on-scroll">
            <Link to="/about" className="qlink">
              About Us
            </Link>
          </div>
        </div>
        <div className="trip-circle animate-on-scroll">
          <h1 className="animate-on-scroll"> Query Regarding Mazars?</h1>
          <h2 className="animate-on-scroll">Ask us we are here to help you!</h2>
          <p className="animate-on-scroll">
            Ask anything without any hesitation either to us or take support
            from mazar team.
          </p>
          <div className="query-link animate-on-scroll">
            <Link to="/contact" className="tlink">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripOrQuery;
