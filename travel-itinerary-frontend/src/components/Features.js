import React from "react";
import "./Styles/Features.css";
import {IoMdArrowRoundForward} from 'react-icons/io'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import slide_image_1 from "./Images/Ahmedabad_Mazar.jpg";
import slide_image_2 from "./Images/Burhanpur_Mazar.jpg";
import slide_image_3 from "./Images/Galiyakot_Mazar.webp";
import slide_image_4 from "./Images/Ujjian_Mazar.jpg";
import slide_image_5 from "./Images/Ahmedabad_Mazar.jpg";
import slide_image_6 from "./Images/Burhanpur_Mazar.jpg";
import slide_image_7 from "./Images/Galiyakot_Mazar.webp";
import slide_image_8 from "./Images/Ujjian_Mazar.jpg";

function Features() {
  return (
    <div className="main">
      <div className="feature-heading">
        <h1>Tailored for the Dawoodi Bohra Community</h1>
        <div className="container">
          <div className="para">
            <h2>Overview</h2>
            <p>
              The Dawoodi Bohra Travel Itinerary project is a specialized travel
              planning tool designed to cater to the unique needs and
              preferences of the Dawoodi Bohra community. This application
              provides a personalized travel experience, enabling users to plan
              multi-destination trips efficiently. The tool is tailored to align
              with the community's travel habits, such as visiting nearby places
              and destinations within a particular state during their journeys.
              By incorporating these cultural nuances, the project aims to
              enhance the travel planning experience for Dawoodi Bohras,
              offering a seamless, intuitive, and community-focused solution.
            </p>
            <h2>Purpose</h2>
            <p>
              The primary purpose of the Dawoodi Bohra Travel Itinerary project
              is to provide an easy-to-use platform for planning and organizing
              travel itineraries that resonate with the preferences and
              traditions of the Dawoodi Bohra community. The project seeks to
              simplify travel planning by offering features like
              multi-destination trip planning, real-time traffic and fare
              calculations, and potential future integration of ticket and fare
              payments. This tool is not just a travel planner but a bridge that
              connects users with destinations that hold cultural and spiritual
              significance to the community.
            </p>
          </div>
          <div className="new-swiper">
            <h2>Mazar Gallery</h2>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={true}
              modules={[Autoplay, EffectCoverflow]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slide_image_1} alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_2} alt="Slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_3} alt="Slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_4} alt="Slide 4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_5} alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_6} alt="Slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_7} alt="Slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_8} alt="Slide 4" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="question">
        <div className="Problem">
          <h3>Problem faced by Zaereen</h3>
          <p>
            When Dawoodi Bohra Zaereen embark on pilgrimages, they often focus
            on major religious sites, overlooking smaller and nearby pilgrimage
            destinations that hold significant spiritual value. Even when these
            smaller sites are visited, many Zaereen lack information about the
            specific individuals or historical figures buried there, which
            diminishes the spiritual experience and connection to the heritage
            of their community. Current travel planning tools fail to address
            this gap, leaving Zaereen without the resources to fully appreciate
            and understand the significance of all the sites they could visit
            during their pilgrimage.
          </p>
        </div>

        <div className="Line"></div>

        <div className="Solution">
          <h3>Solution To Zaereen</h3>
          <p>
            The Dawoodi Bohra Travel Itinerary project aims to bridge this gap
            by offering a platform that not only helps Zaereen plan their visits
            to major pilgrimage sites but also guides them to smaller, nearby
            sites of significance. The proposed solution includes detailed
            information about these lesser-known sites, such as the cemeteries
            and the historical or spiritual importance of the individuals buried
            there. This will ensure that Zaereen can make informed decisions and
            enrich their pilgrimage experience. The platform will be designed to
            provide a comprehensive understanding of the heritage of the
            community, making it a valuable tool for preserving and promoting
            Dawoodi Bohra history and spirituality.
          </p>
        </div>
      </div>
      <div className="features">
        <h3>Features</h3>
        <ul>
          <li>
            <IoMdArrowRoundForward style={{color:'#3a5a40', fontSize:'2rem'}}/><h3>Religious Site Locator:</h3><br/>{" "}
            <span>
              Easily find and plan visits to significant religious sites such as
              the Mazars and mosques.
            </span>
          </li>
          <li>
          <IoMdArrowRoundForward style={{color:'#3a5a40', fontSize:'2rem'}}/><h3>Community Centers:</h3><br/>{" "}
            <span>
              Information on community centers where you can connect with local
              Dawoodi Bohra members during your travels.
            </span>
          </li>
          <li>
          <IoMdArrowRoundForward style={{color:'#3a5a40', fontSize:'2rem'}}/><h3>Event Notifications:</h3><br/>
            <span>
              Stay informed about community events happening in the destinations
              you're visiting.
            </span>
          </li>
          <li>
          <IoMdArrowRoundForward style={{color:'#3a5a40', fontSize:'2rem'}}/><h3>Huzurala TUS Update:</h3><br/>{" "}
            <span>
              Get the latest and real time updates on Asfar Mubaraka of Aqa
              Maula TUS.
            </span>
          </li>
          <li>
          <IoMdArrowRoundForward style={{color:'#3a5a40', fontSize:'2rem'}}/><h3>ITS Data Drive Ziyarat Auto Update:</h3><br/>{" "}
            <span>
              When a Journey is planned and all tickets, fare payment is done
              then on the time of arrival to the Mazar Mubaraka data will be
              upadated automatically of that particular ITS.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
