import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AppNavbar from "./AppNavbar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Community from "./Community";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Feedback from "./Feedback";
import Footer from "./Footer";
import AboutUs from "../About_Page/AboutUs";
import ContactUs from "../Contact_Page/ContactUs";
import Explore from "../ExploreDestination/explore";
import AllDest from "../ExploreDestination/AllDest";
import MazarDetails from "../ExploreDestination/MazarDetails";

function Home() {
  return (
    <div>
      <Hero />
      <Community />
      <Features />
      <Testimonials />
      <Feedback />
    </div>
  );
}

function All() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/allDestination" element={<AllDest />}/>
          <Route path="/mazars/:mazarName/:city" element={<MazarDetails />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default All;
