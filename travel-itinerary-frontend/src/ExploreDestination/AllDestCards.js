import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import useWindowSize from "../Contact_Page/useWindowSize";
import "./ExploreStyle/destinationcards.css";
import "./ExploreStyle/AllDestination.css";
import "../Contact_Page/mazar.css";


function AllDestCardsList({mazar, city, name}){
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const mazarSlug = name.toLowerCase().replace(/\s+/g, '-');
    return(
        <div className="destination">
        <div className="dest-images">
          <img src={mazar.image} alt="destination" />
          <div className="dest1">
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

function AllDestCards({mazars}) {
    const [visibleCards, setVisibleCards] = useState(10);
    const { width } = useWindowSize();
  
    useEffect(() => {
      if (width <= 998) {
        setVisibleCards(6); // Adjust for mobile view
      } else {
        setVisibleCards(10); // Adjust for laptop view
      }
    }, [width]);
  
    const loadMore = () => {
      setVisibleCards((prev) => prev + (width <= 998 ? 6 : 10));
    };
  
    const showLess = () => {
      setVisibleCards((prev) => (prev > (width <= 998 ? 6 : 10) ? prev - (width <= 998 ? 6 : 10) : (width <= 998 ? 6 : 10)));
    };

  
    return (
      <div>
        <div className="dest-card-list">
          {mazars.slice(0, visibleCards).map((mazar) => (
            <AllDestCardsList
              key={mazar.id}
              mazar={mazar}
              city={mazar.city}
              name={mazar.name}
            />
          ))}
        </div>
        <div className="buttons1">
          {visibleCards < mazars.length && (
            <button onClick={loadMore}>Load More</button>
          )}
          {visibleCards > (width <= 998 ? 6 : 10) && (
            <button onClick={showLess}>Show Less</button>
          )}
        </div>
      </div>
    );
}

export default AllDestCards
