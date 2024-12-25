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

function Halvad() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Halvad");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Syedi Kazi Khan Saheb (Q.A) ne Syedna Yusuf Najmuddin RA ane
                duat kiram (R.A.) ni khidmat krwa na mawaqe naseeb thaya che.
                Syedna Dawood Bin Ajab Shah Burhanuddin RA ye aapne mukasir na
                rutba ma qayim kida che ane te baad Syedna Dawood Bin Qutub Shah
                Burhanuddin ye aapne mazoon na rutba si nawaza.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedna Dawood Bin Qutub Shah Burhanuddin RA ye aapne halaar
                mauze ma dawat and dawat na sabaq phelawa waste mokla.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Aap lamba arsa lag Khatiyawad mauze ma raya che ane ghana
                  nashad na saathe islam ane imaan no pegaam pohchayo che je
                  sabab mumenin na ilm zyada thayu che ane aqida mazboot thaya
                  che.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Ek Arsa baad kathiyawad si Syedi Kazi Khan Saheb QS halvad
                  padhara. Umar(age) na takaza na saathe aapni tabiyat nasaaz
                  thai. Syedi Taj bin Khan QR ane Maulai Dawood Bin Hasan QR
                  aapno khayal rakhta ane timardaari karta. Syedi Kazi Khan
                  Saheb QS wafat thaya ane aapne halvad mauze ma dafan karwa ma
                  aaya che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedi Kazi Khan Saheb (Q.R.) had the honor of serving the Duat
                Kiraam (R.A.) during the time of Syedna Yusuf Najmuddin (R.A.).
                He was appointed as Mukasir by Syedna Dawood Bin Ajabshah
                (R.A.), and later, Syedna Dawood Bin Qutubshah (R.A.) elevated
                him to the position of Mazoon-e-Dawat, making him one of the key
                figures in Dawat.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedna Dawood Bin Qutubshah (R.A.) sent Syedi Kazi Khan Saheb
                (Q.R.) to the Haalar region to spread the teachings of the
                Dawat.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  He stayed in the Kathiyawaad area for a long time, where he
                  worked tirelessly to spread the message of Islam and Emaan,
                  helping many people gain knowledge and strengthen their faith.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Later, Syedi Kazi Khan Saheb (Q.R.) moved to Halvad. As he
                  grew older and became ill, Syedi Taj bin Khan (Q.R.) from
                  Nagar and Moulai Dawood Bin Hasan (Q.R.) from Ranpur took
                  great care of him during his final days. Syedi Kazi Khan Saheb
                  (Q.R.) passed away on the 23rd of Rabi-ul-Awwal, leaving
                  behind a legacy of faith and devotion.
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
                Ahmedabad International Airport, Ahmedabad, Gujarat
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Halvad Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">29.2 Kms from Dhrangadhra</li>
              <li className="animate-on-scroll">43.5 Kms from Morbi</li>
              <li className="animate-on-scroll">134.4 Kms from Rajkot</li>
              <li className="animate-on-scroll">151.4 Kms from Ahmedabad</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Halvad Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Halvad")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Halvad Mazar</h2>
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
              <p>Morbi Mazar Campus, Morbi, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>٢٣</span> شهر ربي الاؤل  
                </p>
                <p>23 Shehre-Rabiul-Awwal</p>
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

export default Halvad;
