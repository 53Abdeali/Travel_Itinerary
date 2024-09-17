import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./ExploreStyle/destinationcards.css";
import useWindowSize from "../Contact_Page/useWindowSize";

function DestinationCardsList({mazar, city, name}) {
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const mazarSlug = name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="destination">
      <div className="dest-image">
        <img src={mazar.image} alt="destination" />
        <div className="dest">
          <h2>{name}</h2>
          <h3>{city}</h3>
          <div className="dest-link">
            <Link className="main-dest-link" to={`/mazars/${mazarSlug}/${citySlug}`}>
              Explore Mazar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DestinationCards({ mazars }) {

    const [visibleCards, setVisibleCards] = useState(5); 
    const { width } = useWindowSize();
    
    useEffect(() => {
        if (width <= 998) {
          setVisibleCards(3); 
        } else {
          setVisibleCards(5); 
        }
      }, [width]);
    return(
        <div className="dest-card-list">
        {mazars.slice(0, visibleCards).map((mazar) => (
          <DestinationCardsList
            key={mazar.id}
            mazar={mazar}
            city={mazar.city}
            name={mazar.name}
          />
        ))}
      </div>
    )
}

export default DestinationCards;
