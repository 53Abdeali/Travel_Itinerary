import React, { useState } from "react";
import "./mazar.css";

const MazarCards = ({
  mazar,
  city,
  name,
  contactNumber,
  location,
  showContactDetails,
  toggleContactDetails,
}) => {
  return (
    <div className="mazar-cards">
      {showContactDetails ? (
        <div className="contact-details">
          <h3>{name || "No Name Available"}</h3>
          <p className="cont-para">{contactNumber || "No Name Available"}</p>
          <p className="cont-para1">{location || "No Name Available"}</p>
        </div>
      ) : (
        <div className="mazar-info">
          <div className="pentagon">
            <img src={mazar.image} alt="Mazar" />
          </div>
          <h3>{city}</h3>
        </div>
      )}
      <div className="button1">
        <button onClick={toggleContactDetails}>
          {showContactDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </div>
  );
};

function MazarCardList({ mazars }) {
  const [visibleCards, setVisibleCards] = useState(5);
  const [showDetails, setShowDetails] = useState(mazars.map(() => false));

  const loadMore = () => {
    setVisibleCards((prev) => prev + 5);
  };

  const showLess = () => {
    setVisibleCards((prev) => (prev > 5 ? prev - 5 : 5));
  };

  const toggleContactDetails = (index) => {
    setShowDetails((prev) => {
      const newShowDetails = [...prev];
      newShowDetails[index] = !newShowDetails[index];
      return newShowDetails;
    });
  };
  return (
    <div>
      <div className="card-list">
        {mazars.slice(0, visibleCards).map((mazar, index) => (
          <MazarCards
            key={mazar.id}
            mazar={mazar}
            city={mazar.city}
            name={mazar.name}
            contactNumber={mazar.contactNumber}
            location={mazar.location}
            showContactDetails={showDetails[index]}
            toggleContactDetails={() => toggleContactDetails(index)}
          />
        ))}
      </div>
      <div className="buttons1">
        {visibleCards < mazars.length && (
          <button onClick={loadMore}>Load More</button>
        )}
        {visibleCards > 5 && <button onClick={showLess}>Show Less</button>}
      </div>
    </div>
  );
}

export default MazarCardList;
