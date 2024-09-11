import React from 'react'
import Carousel from "./carousel";
import AllDestinations from "./AllDestination"
import MostVisited from "./MostVisited"
import TripOrQuery from "./TripOrQuery"

function explore() {
  return (
    <div>
      <Carousel/>
      <AllDestinations/>
      <MostVisited/>
      <TripOrQuery/>
    </div>
  )
}

export default explore
