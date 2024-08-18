import React from 'react'
import AppNavbar from './AppNavbar';
import Community from './Community';
import Features from './Features';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Feedback from './Feedback';
import Footer from './Footer'

function All() {
  return (
    <div>
        <AppNavbar/>
        <Hero/>
        <Community/>
        <Features/>
        <Testimonials/> 
        <Feedback/>
        <Footer/> 
    </div>
  )
}

export default All
