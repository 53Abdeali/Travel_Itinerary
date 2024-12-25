import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoTrainSharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import "./MazarStyles/Mazarat.css";
import MazarFeedback from "./MazarFeedback";
import MazarReviews from "./MazarReviews";

function Godhra() {
  const [mazar, setMazar] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLisanDawat, setShowLisanDawat] = useState(false);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(
          "http://192.168.64.65:8082/api/mazars/all"
        );
        setMazar(response.data); // Set the image URL
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageUrl();
  }, [mazar]);

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

  const filteredMazars = mazar.filter((item) => item.city === "Godhra");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Syedi Ismail (Q.R.) Maulai bharmal na pisar hata ane aap aamil
                ane faadil hata. Je waqat aap ane aapna bawaji saheb jamnagar ni
                galiyo se guazarta to mumenin ane muslemin aapna pase aawta ane
                dua ni araz karta.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Jamnagar ma Syedna Abdul Taiyeb Zakiuddin RA ye Syedi Ismail ni
                shaadi Fatema Aai Saheba se karawi aapi. Je waqat Burhanpur ma
                Syedna Abdul Taiyeb Zakiuddin RA ye Syedna Yusuf Najmuddin RA pr
                nass kidi te waqat Syedi Ismail ne Syedi Qamruddin na pachi
                tarteeb ma rutbo ata kido ane badruddin laqab ata farmayu.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Te pachi Syedna ye Syedi Ismail ne dawat ni khidmat waste
                  panchmal mauze ma mokla, Syedna aapna pith ane sinah pr haath
                  phirawta kem k yej jagah ma aapne tir lago che.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Saglu kaam tamam kari ne Syedi Ismailji godhra si dohad
                  tashreef lai gaya, aap je waqat namaz ma hata te waqat bhilrao
                  ma si ek tir aapna sina pr lago. Aap ghana josh ma
                  "Allah-o-Akbar" pukara ane appye tir ne jor si khecho je sabab
                  si ghanu khun wayu. Mumenin ye aapni aawaz suni ane madad
                  waate dorta hua aaya take Syedi Ismailji thoda arsa pachi
                  wafat thaya che ane aapne shahdat naseeb thai che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedi Ismailji (QR.) was a descendant of Maulai Bharmal (QR.)
                and was known for his simple, religious, and knowledgeable
                nature. He was so kind and respected that when Syedi Ismailji
                (QR.) and his father, Syedi Abdo Moosa Kalimuddin (QR.), passed
                through the streets of Jamnagar and Kutch, people—both Muslims
                and non-Muslims—would gather around them, asking for blessings.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                In Jamnagar, Syedna Abdul Tayeb Zakiuddin (RA.) married his
                daughter, Fatema Aai Saheba, to Syedi Ismailji (QR.). In the
                year 1199 H, when Syedna appointed Syedna Yusuf Najmuddin (RA.)
                as his successor in Burhanpur, he also gave Syedi Ismailji (QR.)
                the position of Tarteeb after Syedi Qamruddin (QR.) and the
                title of Badruddin. Syedi Ismailji (QR.) was then sent to serve
                the Dawat in Panchmahal district.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  Before Syedi Ismailji (QR.) left, Syedna gently touched his
                  back and chest, suggesting that he might face martyrdom. Syedi
                  Ismailji (QR.) used his knowledge and wisdom to confront many
                  people who opposed the Dawat, exposing their wrong actions.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  After finishing his work in Godhra, Syedi Ismailji (QR.) was
                  traveling to Dohad. While praying along the way, he was
                  attacked by a Bhil who shot an arrow at him. Even though he
                  was wounded, Syedi Ismailji (QR.) shouted "Allah o Akbar!" and
                  pulled out the arrow. Mumineen, hearing his shout, came to
                  help, but after some time, Syedi Ismailji (QR.) passed away.
                </span>
              </p>
            </>
          )}

          <span className="mazarat-span" onClick={() => setShowMore(!showMore)}>
            {showMore ? (
              <IoIosArrowDropup className="drop-up-down" />
            ) : (
              <IoIosArrowDropdown className="drop-up-down" />
            )}
          </span>

          <div className="la">
            <div className="mazarat-lisan">
              <span
                className="lisan-btn"
                onClick={() => setShowLisanDawat(!showLisanDawat)}
              >
                {showLisanDawat ? "Read In English" : "Read in Lisan-Ud-Dawat"}
              </span>
            </div>
            <div>
              <Link className="link-mazarat" to="/">
                Plan Journey
              </Link>
            </div>
          </div>
        </div>

        <div className="mazarat-ways">
          <h1 className="animate-on-scroll">Ways of Travel</h1>
          <ul>
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <GiAirplaneDeparture className="icon-ways animate-on-scroll" />{" "}
                By Airways
              </li>
              <li className="animate-on-scroll">
                Nearest Airport <br />
              </li>
              <span className="animate-on-scroll">
                Vadodara International Airport, Vadodara, Gujarat
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Godhra Junction Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">73.4 Kms from Dahod</li>
              <li className="animate-on-scroll">80.5 Kms from Vadodara</li>
              <li className="animate-on-scroll">129.9 Kms from Ahmedabad</li>
              <li className="animate-on-scroll">232.6 Kms from Surat</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Godhra Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Godhra")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Syedi Ismailji Shahid Mazar</h2>
              <p>
                qubba tameer, campus, shohoda etc. The Ganje Shohada are honored
                and remembered in our prayers, their courage a shining example
                of how our ancestors held firm to their beliefs in the face of
                unbearable persecution. Their legacy continues to inspire us to
                this day, reminding us of the strength and resilience that
                define the Dawoodi Bohra community. unbearable persecution.
                Their legacy continues to inspire us to this day, reminding us
                of the strength and resilience that define the Dawoodi Bohra
                community. define the Dawoodi Bohra community.
              </p>
            </div>

            <div className="maz-acc-nearby">
              <h2>Nearby Accomodations</h2>
              <p>Musafirkhana Godhra Mazar Campus, Godhra, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>١٤</span> شهر ربي الاخر
                </p>
                <p>14 Shehre-Rabiul-Akahar</p>
              </div>
            </div>

            <div className="maz-mannat">
              <h2>Mannat</h2>
              <p>Mannat-1</p>
              <p>Mannat-2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="feedback-form">
        <MazarFeedback />
      </div>

      <div className="feedback-form">
        <MazarReviews />
      </div>
    </div>
  );
}

export default Godhra;
