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

function Rampura() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Rampura");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Syedi Bawa Mulla Khan Saheb (QR), aalim ane fadil hata.
                Islampura na logo aapni ghani izzat karta. Aap khuda ni ibadat
                ma mashgul rehta ane har namaz ehna awwal waqat maj adaa karta
                yaha tak k aap vyapar bhi muki deta. Syedi Bawa Mulla Khan (QR) je bhi
                vyapar se kamawta ehna ma se khumus dai-al-mutlaq ni hazrat ma aapta. Aap
                mumenin ni hajat rawahi krta te waaste aap ye ghoro kharido ane
                je waqat mumnein ne zarurat hoi to aap se lai jata.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedi Abdulqadir Hakimuddin (QR), aapna shehzada, je saheb ne
                quran padhwa ma maharat hasil hati. Islampura na badshah je
                waqat Islam laaya to Syedi Hakimuddin (QR) ye ehne quran padhta
                sikhayu je sabab badshah aap se ghanaj khush thaya ane badshah
                ye aapne ek gaon hadiyah ma aapu.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Syedi Bawa Mulla Khan (QR) ne em khutko thayo k farzand
                  badshah ni khidmat ma na lagi jai to aapiye Syedi Hakimuddin
                  (QR) ne ghanu lihaz si farmayu ane em kahyu k pehla me pehli
                  khidmat dai-al-mutlaq ni khidmat che. Syedi Hakimuddin (QR) ye badshah
                  ne ehni amanat sonpi didi ane dawat ni khidmat kadi.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Syedi Bawa Mulla Khan Saheb (QR) ne khud a ta'ala ye 6 farzand
                  si nawaza, har farzand ye dawat ni khidmat judi judi shakelat
                  si kari. Je waqat aap 35ma Dai, Syedna Abdultayeb Zakiuddin
                  (RA) ni hazrat ma padhara to Syedna ye khumus ni zimmedari pr
                  zor aapo. Tej waqat Syedi Bawa Mulla Khan Saheb (QR) ye Syedi
                  Abdulqadir Hakimuddin (QR) ne khumus ni zimmedari sonpi didi.
                  Syedi Hakimuddin, ye zimmedari ne behtar tarika se lai utha.
                  Syedi Bawa Mulla Khan na atal imaan ane lagan si aapna nasab ma
                  13 Duat Mutlaqeen ni barakat hasil thai che je ma Syedna Mohammed
                  Burhanuddin (RA) ni bhi barakat hasil che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedi Bawa Mulla Khan Saheb (QR), a man of immense knowledge,
                piety, and humility, was deeply respected in Islampura. His
                devotion to faith was evident in his meticulousness with Namaz,
                as he would always pray on time, even while conducting business.
                Syedi Bawa Mulla Khan (QR) would never fail to pay Khumus from
                his earnings, submitting it promptly to the Dai. He also showed
                great concern for the welfare of Mumineen, keeping a horse
                exclusively for their use during times of need.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedi Abdulqadir Hakimuddin (QR), his son, was known for his
                mastery of Quran recitation. When the King of Islampura
                converted to Islam, Syedi Hakimuddin (QR) taught him how to
                recite the Quran, earning the King's admiration and receiving a
                village as a gift.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  However, when Syedi Bawa Mulla Khan (QR) gently reminded his
                  son to prioritize service to the Dai over worldly honors,
                  Syedi Hakimuddin (QR) returned the gift, reinforcing his
                  loyalty to Dawat.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Syedi Bawa Mulla Khan Saheb (QR) had six sons, all of whom
                  were devoted to Dawat. During a visit to the 35th Dai, Syedna
                  Abdultayeb Zakiuddin (RA), the Dai emphasized the obligation
                  of Khumus, prompting Syedi Bawa Mulla Khan (QR) to offer his
                  son, Syedi Abdulqadir Hakimuddin (QR), for the service of
                  Dawat. Syedi Hakimuddin went on to serve with extraordinary
                  devotion. Due to Syedi Bawa Mulla Khan's unwavering faith and
                  dedication, his lineage was blessed with 13 Duat Mutlaqeen,
                  including the esteemed Syedna Mohammed Burhanuddin (RA).
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
                Jaipur International Airport, Jaipur, Rajasthan.
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Bhawani Mandi & Ratlam Junction Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">182.0 Kms from Ratlam</li>
              <li className="animate-on-scroll">198.9 Kms from Banswara</li>
              <li className="animate-on-scroll">235.1 Kms from Ujjain</li>
              <li className="animate-on-scroll">292.2 Kms from Indore</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Rampura Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Rampura")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Rampura Mazar</h2>
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
              <p> Syedi Bawa Mulla Khan Mazar Campus, Rampura, Madhya Pradesh.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic"><span>٢٩</span>شهر شوال المكرم</p>
                <p>29 Shehre-Shawwalul-Mukarram</p>
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

export default Rampura;
