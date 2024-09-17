import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoTrainSharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import "./MazarStyles/Ahmednagar.css";
import MazarFeedback from "./MazarFeedback";
import MazarReviews from "./MazarReviews";

function Ahmednagar() {
  const [mazar, setMazar] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLisanDawat, setShowLisanDawat] = useState(false);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(
          "http://192.168.181.65:8082/api/mazars/all"
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

  const filteredMazars = mazar.filter((item) => item.city === "Ahmednagar");

  return (
    <div className="ahmednagar-main">
      <div className="ahmednagar">
        <div className="ahmednagar-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Syedna firkhan shujaddin (R.A.) na zaman ma je waqat Mughal
                badshah laeen Aurangzeb ni hukumat hindustan ma hati, te
                darmiyan apna jad ane pidar ghanij mehant ane mushkil na waqt si
                guzra.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Ghana mumenin ne be wajah satawa ma aaya ane ghanu zulm krwa ma
                aayu yaha tk k ghana mumineen ne shahid karvama aya je aj Ganje
                Shohda na naam si maroof che.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Aurangzeb ke je ghano zalim badshaah hato. Te ye mumineen ne
                  masjid ma qaed kari ne ye sagla par ghana zulm o sitam kida.
                  Ye Masjid aj bhi Ganje Shohda na roza mubaraka na nazdik
                  mojood che.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  {/* The Ganje Shohada are honored and remembered in our prayers,
                  their courage a shining example of how our ancestors held firm
                  to their beliefs in the face of unbearable persecution. Their
                  legacy continues to inspire us to this day, reminding us of
                  the strength and resilience that define the Dawoodi Bohra
                  community. */}
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                During the reign of the Mughal Emperor Aurangzeb, our
                forefathers, endured unimaginable hardship and suffering. Many
                were tortured, and even martyred for their faith. One of the
                most painful chapters of our history unfolded during the era of
                our beloved Syedna Feerkhan Shujauddin (RA), when many of the
                Mumineen gave their lives as martyrs and were later known as
                Ganj-E-Shohoda.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Aurangzeb, known for his cruelty towards religious minorities,
                inflicted great suffering upon the Ganje Shohada. These noble
                souls were unjustly imprisoned and brutally{" "}
                <span className="animate-on-scroll">
                  {" "}
                  tortured within the walls of a masjid—a place meant for peace
                  and prayer. Despite the sanctity of the mosque, their faith
                  was tested in the harshest of ways. Today, that very masjid
                  still stands, close to the Roza Mubarak of Ganj-E-Shohoda. It
                  serves as a solemn reminder of the sacrifices our community
                  made to uphold the values of our faith.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  The Ganje Shohada are honored and remembered in our prayers,
                  their courage a shining example of how our ancestors held firm
                  to their beliefs in the face of unbearable persecution. Their
                  legacy continues to inspire us to this day, reminding us of
                  the strength and resilience that define the Dawoodi Bohra
                  community.
                </span>
              </p>
            </>
          )}

          <span
            className="ahmednagar-span"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <IoIosArrowDropup className="drop-up-down" />
            ) : (
              <IoIosArrowDropdown className="drop-up-down" />
            )}
          </span>

          <div className="la">
            <div className="ahmednagar-lisan">
              <span
                className="lisan-btn"
                onClick={() => setShowLisanDawat(!showLisanDawat)}
              >
                {showLisanDawat ? "Read In English" : "Read in Lisan-Ud-Dawat"}
              </span>
            </div>
            <div>
            <Link className="link-ahmednagar" to="/">
              Plan Journey
            </Link>
            </div>
          </div>
        </div>

        <div className="ahmednagar-ways">
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
                Aurangabad International Airport 113.7 Kms from Ahmednagar
              </span>
              <span className="animate-on-scroll">
                Pune International Airport 121.2 Kms from Ahmednagar
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Ahmednagar Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">113.7 Kms from Aurangabad</li>
              <li className="animate-on-scroll">121.2 Kms from Pune</li>
              <li className="animate-on-scroll">261.5 Kms from Mumbai</li>
              <li className="animate-on-scroll">330.0 Kms from Ranala</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="ahmednagar-gallery">
        <h1>About Mazar</h1>
        <div className="ahmednagar-abt">
          <div className="ahmednagar-image">
            <h2>Ahmednagar Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img
                key={(item.city = "Ahmednagar")}
                src={item.image}
                alt="Mazar"
              />
            ))}
          </div>

          <div className="ahmednagar-all">
            <div className="ahm-abt">
              <h2>About Ganje Shohoda Dargah</h2>
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

            <div className="ahm-acc-nearby">
              <h2>Nearby Accomodations</h2>
              <p>
                Ahmednagar Dargah Musafirkhana, Near Roza Mubaraka, Ahmednagar,
                Mahrashtra.
              </p>
            </div>

            <div className="ahm-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>٢٧</span> شهر زي الحجّة الحرام
                </p>
                <p>27 Shehre-ZilHajjatil-Haram</p>
              </div>
            </div>

            <div className="ahm-mannat">
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

export default Ahmednagar;
