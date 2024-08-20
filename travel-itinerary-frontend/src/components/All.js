import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Hero from "./Hero";
import Community from "./Community";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Feedback from "./Feedback";
import Footer from "./Footer";
import AboutUs from "../About_Page/AboutUs";

function Home() {
  return (
    <div>
      <Hero />
      <Community />
      <Features />
      <Testimonials />
      <Feedback />
      <Footer />
    </div>
  );
}

function All() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default All;
