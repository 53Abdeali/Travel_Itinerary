import React, { useState, useEffect, useCallback } from 'react';
import './Styles/Hero.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";

function Hero() {
  // Array of image URLs
  const images = [
    process.env.PUBLIC_URL + '/Images/Ahmedabad_Mazar.jpg',
    process.env.PUBLIC_URL + '/Images/Ujjian_Mazar.jpg',
    process.env.PUBLIC_URL + '/Images/Burhanpur_Mazar.jpg',
    process.env.PUBLIC_URL + '/Images/Galiyakot_Mazar.webp',
    process.env.PUBLIC_URL + '/Images/Ahmedabad_Mazar.jpg',
    process.env.PUBLIC_URL + '/Images/Ujjian_Mazar.jpg',
    process.env.PUBLIC_URL + '/Images/Burhanpur_Mazar.jpg',
    process.env.PUBLIC_URL + '/Images/Galiyakot_Mazar.webp'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAutoPlay(false); // Stop autoplay when manually navigating
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setAutoPlay(false); // Stop autoplay when manually navigating
  }, [images.length]);

  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(nextSlide, 3000); // Change image every 3 seconds
      return () => clearInterval(intervalId);
    }
  }, [autoPlay, nextSlide]);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
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
    <div className='main-div'>
      <div className='image-gallery animate-on-scroll'>
        <IoArrowBackCircle style={{cursor:'pointer', fontSize: 50, color: '#3a5a40' }} onClick={prevSlide} className='carousel-arrow left-arrow' />
        <div className='gallery-container'>
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img key={index} src={image} alt={`gallery-image-${index}`} className='gallery-image' />
          ))}
        </div>
        <IoArrowForwardCircle style={{cursor:'pointer', fontSize: 50, color: '#3a5a40' }} onClick={nextSlide} className='carousel-arrow right-arrow' />
      </div>

      <div className='heading-para animate-on-scroll'>
        <h1>Discover,<br />Plan,<br />And Explore</h1>
        <p>Journey with Mumineen, Return with Peace & Barakat.</p>
        <div className='call-to-action'>
          <ul>
            <li><a href='/'>Login / Register</a></li>
            <li><a href='/'>Explore Destinations</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
