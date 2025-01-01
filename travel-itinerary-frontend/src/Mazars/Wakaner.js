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

function Wakaner() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Wakaner");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Moulai Looqmanji Saheb (QS) Ujjain si Wankaner wvayapar na
                wasste tashreef laaya, namkeen ane mithai na wyapar no irada
                kido ane irada mutabiq ek duka kholi. Aani fitart ghani sakhi
                hati ane je waqat aap wyapar karta to ye jhalakti ane logo ne
                aapna saathe waat karvu pasand aawtu. Aapna sakhi nature na
                wajah si logo ma aapni izzat wadhi gai.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Aap ni kaik numaya khaslato ma se ek khaslat ye hati k aap
                tuberculosis (T.B.) na marizo ne chana aapta taake ye logo ne
                shifa thai.
                <span>
                  {" "}
                  <br />
                  Je waqat ilaj na asbab mohaiyyan nota thai sakta tha ya
                  limited hata to Maulai Looqmanji na ishara mojizan bimari
                  shifa karwa waaste kaafi tha. Je bhi marizo aapsse chana lai
                  jaata ye logo e ghanu jaldi shifa nu asar khabar padtu. Aa
                  amal shifa nu asbab bani gayu ane aapne roohani barkat wala
                  saheb se mashhoor thai gayu.
                </span>
                <br /> <br />
                <span>
                  Aaj bhi j bhi mumenin ya ger-mumin je T.B. ni bimari se
                  tangadast hoi ane Moulai Looqmanji Saheb (QS) ni ziyarat ni
                  niyat kare che take ye logo ne bhi mojizan shifa thai. Jo koi
                  b sachcha dil si ziyarat ane wankaner ma namaz ni niyat kare
                  che to mojizan ee logo ne shifa thai che. Mumenin aapni turbat
                  par si chana pheri ne lai jai ane bimar ne khilawe che to ehne
                  shifa thai che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Moulai Looqmanji Saheb (QS) relocated from Ujjain to Wankaner to
                pursue business opportunities and established a confectionery
                shop. The shop specialized in selling various sweets and snacks,
                which quickly became popular in the region. His confectionery
                not only served as a source of livelihood but also as a place
                where he extended his compassion to those in need. Moulai
                Looqmanji's kind-heartedness and generosity were reflected in
                his daily interactions with customers, earning him great respect
                in the community.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                One of the most remarkable acts of benevolence attributed to
                Moulai Looqmanji Saheb (QS) was his tradition of distributing
                chana (gram) to patients suffering from tuberculosis (T.B.).{" "}
                <span>
                  {" "}
                  During a time when treatment options for such ailments were
                  limited, Moulai Looqmanji's gesture became known for its
                  miraculous effects. Many patients who received chana from him
                  experienced unexpected recoveries, leading to a deep sense of
                  reverence for him. This act of charity became a symbol of
                  healing, and his name spread as someone with profound
                  spiritual blessings.
                </span>
                <br /> <br />
                <span>
                  To this day, individuals afflicted with T.B. continue to visit
                  the Ziyarat of Moulai Looqmanji Saheb (QS) in hopes of
                  receiving similar healing. They believe that performing
                  Ziyarat at his Maqam and offering prayers can bring relief
                  from their illness. Countless patients have testified to the
                  positive outcomes following their visits, keeping the legacy
                  of Moulai Looqmanji Saheb's (QS) compassion and miraculous aid
                  alive for generations.
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
                Rajkot Commercial Airport, Rajkot, Gujarat.
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Wankaner Junction Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">27.6 Kms from Morbi</li>
              <li className="animate-on-scroll">58.8 Kms from Halvad</li>
              <li className="animate-on-scroll">61.6 Kms from Rajkot</li>
              <li className="animate-on-scroll">111.3 Kms from Jamnagar</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Wakaner Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Wakaner")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Wakaner Mazar</h2>
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
              <p> Wankaner Mazar Campus, Wankaner, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p classname="arabic">
                  <span>١٤</span>شهر ربيع الاول
                </p>
                <p>14 Shehre-Rabiul-Awwal</p>
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

export default Wakaner;
