import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import "./ExploreStyle/mazar.css"

// Helper function to capitalize the first letter of each word
function capitalizeWords(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\s+/g, "");
}

function loadMazarComponent(city) {
  try {
    const formattedCity = capitalizeWords(city); // Ensure the city name matches the file case
    const MazarComponent = React.lazy(() =>
      import(`../Mazars/${formattedCity}`)
    );
    return MazarComponent;
  } catch (error) {
    console.error("Error loading component:", error);
    return null;
  }
}

function MazarDetails() {
  const { city, mazarName } = useParams();
  const MazarComponent = loadMazarComponent(city);

  if (!MazarComponent) {
    return <div>Mazar details not found for city: {city}!</div>;
  }

  return (
    <div>
      <div className="mazar">
        <h2>{mazarName.replace(/-/g, " ")}</h2>
        <p>{city.replace(/-/g, " ")}</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MazarComponent />
      </Suspense>
    </div>
  );
}

export default MazarDetails;
