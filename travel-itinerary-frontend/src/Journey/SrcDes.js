// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AWS from "aws-sdk";
import "./Journey_Styles/SrcDes.css";
function SrcDes() {
  // const [source, setSource] = useState("");
  // const [destination, setDestination] = useState("");
  // const [mazars, setMazars] = useState([]);

  // // Fetch Mazar data from the backend API (RDS)
  // useEffect(() => {
  //   const fetchMazar = async () => {
  //     try {
  //       const response = await axios.get(
  //         "hhttps://travel-itinerary-wc37.onrender.com/api/mazars/all"
  //       );
  //       setMazars(response.data);
  //     } catch (error) {
  //       console.error("Error fetching mazar data:", error);
  //     }
  //   };

  //   fetchMazar();
  // }, []); // Fetch once when the component mounts

  // // Function to get user's current location
  // const getUserLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;

  //         AWS.config.update({
  //           accessKeyId: "Abdeali@53",
  //           secretAccessKey: "Abdeali@53",
  //           region: "ap-south-1",
  //         });

  //         const location = new AWS.Location({
  //           region: "ap-south-1", // Replace with your AWS region
  //           credentials: new AWS.CognitoIdentityCredentials({
  //             IdentityPoolId: "ap-south-1:966a6da1-312e-4948-84a8-603d6f4b33d6",
  //           }),
  //         });

  //         // Specify the Place Index Name for the AWS Location Service call
  //         location
  //           .searchPlaceIndexForPosition({
  //             IndexName: "RehlatPlaceIndex", // Replace with the name of your Place Index
  //             Position: [longitude, latitude],
  //           })
  //           .promise()
  //           .then((response) => {
  //             if (response.Results && response.Results.length > 0) {
  //               setSource(response.Results[0].Place.Label); // Set the user's current location
  //             } else {
  //               console.log("No location found for the given coordinates.");
  //             }
  //           })
  //           .catch((error) => {
  //             console.error("Location fetch failed:", error);
  //           });
  //       },
  //       (error) => {
  //         console.error("Geolocation error:", error);
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by your browser.");
  //   }
  // };

  // // Event handlers for input fields
  // const handleSourceChange = (event) => {
  //   setSource(event.target.value);
  // };

  // const handleDestinationChange = (event) => {
  //   setDestination(event.target.value);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Source:", source);
  //   console.log("Destination:", destination);
  // };

  return (
    <div>
      <div className ="integration">
        <h3>Integration for itinerary (planning a journey) is on the way!!!</h3>
      </div>
    </div>
  );
}

export default SrcDes;
