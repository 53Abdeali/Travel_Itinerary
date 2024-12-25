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

function Dandi() {
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

  const filteredMazars = mazar.filter(
    (item) => item.name === "Maisaaheba Dargah"
  );

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Noor bibi Saheba 24 ma Dai-Al-Mutlaq Syedna Yusuf Najmuddin
                (R.A.) na ma saheba che ane Fatemabibi Saheba aap maula na behen
                saheba che. Aap beve bibi sahebo ne haj no shoq thayo ane haj no
                irado kido.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Aap beve bibi sahebo ne haj naseeb thai maula ni raza si aap
                beve haj waaste padhara. Haj sukoon ane itminaan se tamam thai.
                Watan aawti waqat ek ivo umoor bano k jena wajah se aap logo na
                jahaz ma shigaaf aaya je wajah se jahaz dubi gayo ane beve bibi
                Saheba samundar ma dubi gaya.{" "}
                <br/><br/>
                <span className="animate-on-scroll">
                  Aap beve maulat ne dandigaon/ dandigaam ma dafan krwa ma aaya
                  che. Waqt na saathe je jagah ma aap beve ne dafan kida che te
                  jagah ne Maisaheba kehwa ma aayu.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Noorbibi Saheba (QS) was the revered mother of the 24th
                Dai-al-Mutlaq, Syedna Yusuf Najmuddin (RA), and Fatemabibi
                Saheba (QS) was his beloved sister. Both these noble women were
                known for their piety and close association with the Dawat.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                During a pilgrimage, after completing Hajj, they were returning
                home by ship. However, tragedy struck when the ship they were on
                was wrecked. In this unfortunate incident, both Noorbibi Saheba
                (QS) and Fatemabibi Saheba (QS) drowned in the sea. <br />{" "}
                <br />
                <span className="animate-on-scroll">
                  Their bodies were later recovered, and they were buried in a
                  place called Dandigaon. Over time, this location became known
                  as Maisaheba in honor of these pious women, whose sacrifices
                  and devotion are remembered by generations of Dawoodi Bohras.
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
                Surat International Airport, Surat, Gujarat
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Navsari Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">22.6 Kms from Navsari</li>
              <li className="animate-on-scroll">47.6 Kms from Surat</li>
              <li className="animate-on-scroll">191.2 Kms from Vadodara</li>
              <li className="animate-on-scroll">307.0 Kms from Ahmedabad</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Maisaheba Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img
                key={(item.city = "Maisaaheba Dargah")}
                src={item.image}
                alt="Mazar"
              />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Maisaheba Mazar</h2>
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
              <p>Maisaheba Dargah Campus, Dandigaon, Dist. Navsari, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>٢٣</span> شهر محرم الحرام
                </p>
                <p>23 Shehre-Moharramul-Haram</p>
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

export default Dandi;
