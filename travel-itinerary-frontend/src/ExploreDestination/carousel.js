import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import axios from "axios";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./ExploreStyle/carousel.css";

function Carousel({ mazar, city }) {
  const [mazars, setMazars] = useState([]);

  const fetchMazars = async () => {
    try {
      const response = await axios.get(
        "http://192.168.181.65:8082/api/mazars/all"
      );
      const validMazars = response.data.filter((mazar) => mazar.image);
      setMazars(validMazars);
    } catch (error) {
      console.error("Error fetching mazars:", error);
    }
  };

  useEffect(() => {
    fetchMazars();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
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
    <div>
      <div className="carousel">
        <div className="caro-image">
          <div className="Black">
            <div className="caro-head animate-on-scroll">
              <h1>Explore a journey of faith and heritage.</h1>
            </div>
            <div className="caro-para animate-on-scroll">
              <p>
                Each destination holds a unique place in our community's
                history, offering both spiritual growth and a connection to our
                past.
              </p>
            </div>
          </div>
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
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={true}
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper"
          >
            {mazars.map((mazar, index) => (
              <SwiperSlide className="swipe">
                <img src={mazar.image} alt={city} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="exploreSearch animate-on-scroll">
            <input
              type="search"
              placeholder="Search Mazar By Name or By City"
              // value={searchTerm}
              // onChange={handleSearch}
            />
            <FaMagnifyingGlass className="caro-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
