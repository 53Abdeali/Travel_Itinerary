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

function Vadodara() {
  const [mazar, setMazar] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showLisanDawat, setShowLisanDawat] = useState(false);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(
          "https://travel-itinerary-wc37.onrender.com/api/mazars/all"
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
    (item) => item.city === "Vadodara(Baroda)"
  );

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Syedi Musanji (Q.R.) aalim ane shuja hudud fodola ma si che,
                aapye 27 ma Dai-Al-Mutlaq Syedna Dawood Bin Ajab Shah
                Burhanuddin (R.A) na zaman ma dawat ni khidmat kidi. Syedi
                Musanji (Q.R.) ne haj krwa no shoq hato ane aapye em niyat kidi
                hati k jo agr aapno haj tamam thase ane aap watan ne lotse to
                aap baroda ma masjid banawse.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedna ni dua si ane khalis niyat si aapne haj naseeb thai. Ane
                jem niyat kidi tem masjid banawi. Aa amar dushmano se na dekhu
                gayo ane ye logo ye Baroda na subedar, Subedar Salahuddin na
                saathe mili ne Syedi Musanji (Q.R.) ne qed kida.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Aapne bandiwaan kari ne jungle ma lai gaya ane zulm o sitam
                  kida yaha tk ke aapne ane aapna saathe Mian Vaziruddin
                  Bharuchi ne ukalta hua tel ma nakhi dida ane qatal kari nakha.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Thoda arsa pachi Syedi Musanji na dushman Salahuddin ne pith
                  pr chalo utho. Ye chala ma si ghani gandi badbu aawti je na si
                  logo ehna paase aawa si bhi katrata. Ghana arsa lag ye chala
                  na ilaj na waaste kitnok gosht(matan/meat) lagtu pan ye chalo
                  wapas se thai jato. Ane thoda waqat baad emj Salahuddin ne
                  dardnak maut aawi.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedi Musanji (QR) was a person of immense knowledge and deep
                reverence. He had the honor of being one of the esteemed Hudud
                under the 27th Dai-al-Mutlaq, Syedna Dawood bin Ajabsha (RA).
                Syedi Musanji (QR) had a strong desire to perform Hajj, and he
                made a vow (mannat) that if he could safely complete the
                pilgrimage and return home, he would build a masjid in Baroda.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                After safely returning from Hajj, Syedi Musanji (QR) stayed true
                to his vow and constructed a masjid in Baroda. However, this act
                led to jealousy and hatred from the enemies of Dawat. They
                conspired against him and influenced the local ruler, Subedar
                Salahuddin of Baroda, to imprison Syedi Musanji (QR)..{" "}
                <span className="animate-on-scroll">
                  {" "}
                  Under the influence of these dissidents, the authorities took
                  Syedi Musanji (QR) to a jungle, where they tortured him. The
                  cruelty escalated, and in a brutal act of hatred, they pushed
                  him into a vat of boiling oil, leading to his martyrdom.
                  Alongside him, they also killed Mian Vaziruddin Bharuchi.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Soon after this, Salahuddin, the ruler who allowed these
                  atrocities, developed a painful boil on his back. The boil
                  emitted such a foul smell that people avoided being near him.
                  Eventually, he suffered a slow and agonizing death, believed
                  to be divine retribution for his role in the martyrdom of
                  Syedi Musanji (QR).
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
                Nearest Railway Station <br /> Vadodara Junction Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">87.9 Kms from Bharuch</li>
              <li className="animate-on-scroll">116.2 Kms from Ahmedabad</li>
              <li className="animate-on-scroll">149.7 Kms from Dahod</li>
              <li className="animate-on-scroll">155.7 Kms from Surat</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Baroda Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Vadodara(Baroda)")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Habib Mazar</h2>
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
              <p>Syedi Musanji Taj Dargah Campus, Vadodara/Baroda, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>٢٨</span> شهر محرم الحرام
                </p>
                <p>22 Shehre-Moharramul-Haram</p>
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

export default Vadodara;
