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

function Denmal() {
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
    (item) => item.city === "Denmal(Hasanfir)"
  );

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Je misal Syedna Qutbuddin Shaheed (R.A) pehla dai che je ne
                shahdat naseeb thai che yej misal Syedi Hasanfeer (Q.R) Hudud
                Kiram ma si pehla che je ne shahdat naseeb thai che take Islam
                nu din bachi sake. Aap Maulaya Abdullah (Q.R) a nasab ma si che
                ane aapne Syedna Abdullah Fakhruddin (R.A) ye Wali e Hind banaya
                che.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedi Hasanfeer (Q.R) aapna ilm waaste ghana izzatmand ane
                mashhoor hata, yaha tak ke Sultan E Patan kaik umoor par aap se
                mashwara ane rai leta. Ek waqat Sultan ne quran ni ek aayat jema
                em che ke "Koi bhi Jannat ma dakhil nahi thai yaha tak ke
                oot(Camel) sui na cheda se nahi nikle" tema uljhan aawi, kaik
                aalimo ne bulaya par koi bhi Sultan ne samjhawi na saku. Syedi
                Hasanfeer (Q.R) tashreef laaya ane aapiye ghanaj behtar tarika
                si Sulatan ne jawab aapo ane hikamto na bhed kholi dida. Sulatan
                aap si ghana khush thaya ane aapne Denmal na Jagir no rutba si
                nawaza.
                <span>
                  {" "}
                  <br />
                  Syedi Hasanfeer(Q.R) ane Sulatan na wach ma waato ne badhta
                  dekh sulatn na darbar na logo na aankh ma rai pisai gai ane
                  aapne shaheed karwa ni sazish rachi ane aapne qatal kari
                  nakha. Em kehwa ma aawe che k aapna qatal ni khabar aapna
                  tota(parrot) ye mumenin ne aapi che.
                </span>
                <br /> <br />
                <span>
                  Guzarta waqt na sathe hazaro mumenin Syedi Hasanfeer's (Q.R)
                  na Qabar Mubarak ni talakki waaste aawe che ane je ummedo hoi
                  che te waaste dua kare che. Syedi Abdulqadir Hakimuddin (Q.R)
                  waram waar aapni ziyarat waaste padharta. Lamba Arsa pachi
                  Syedna Taher Saifuddin (R.A) Roza Mubarak ni niv 1339H ma
                  rakhi che ane qubba nu iftetah 8 waras pachi Syedna Taher
                  Saifuddin (R.A) 1345H ma karu che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedi Hasanfeer (Q.R) was the first amongst the Hudud Kiram to
                sacrifice his life for the sake of Islam and Dawat, just as
                Syedna Qutbuddin Shaheed (R.A) was the first Dai to be martyred.
                He came from the noble lineage of Maulaya Abdullah (Q.R) and was
                appointed as the Wali of Hind by Syedna Abdullah Fakhruddin
                (R.A).
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedi Hasanfeer (Q.R) was highly respected for his knowledge and
                wisdom, and even the Sultan of Patan often sought his counsel on
                various matters. Once, the Sultan was confused by the Quranic
                verse that mentioned how "one cannot enter Jannat unless a camel
                passes through the eye of a needle." After consulting many,
                Syedi Hasanfeer (Q.R) provided a unique and insightful answer,
                demonstrating that true submission and devotion to a spiritual
                leader is the key to entering Jannat. Impressed by his wisdom,
                the Sultan gifted him the Jagir of Denmal.{" "}
                <span>
                  {" "}
                  However, Syedi Hasanfeer's (Q.R) growing influence and
                  closeness to the Sultan made some of the Sultan's ministers
                  jealous. They plotted against him, and tragically, he was
                  martyred. It is said that after his death, his parrot flew to
                  inform Mumineen of the loss of its master. The parrot is also
                  buried beside Syedi Hasanfeer.
                </span>
                <br /> <br />
                <span>
                  Over the centuries, countless people have visited Syedi
                  Hasanfeer's (Q.R) Qabar Mubarak seeking solace and blessings.
                  Syedi Abdulqadir Hakimuddin (Q.R) was among those who
                  frequently visited for Ziyarat and even composed a Qasida in
                  his honor. Later, Syedna Taher Saifuddin (R.A) laid the foundation of his Roza Mubarak (mausoleum) in 1339 H, which was completed in eight years and inaugurated in 1345 H. Today, his Roza stands as a symbol of his enduring legacy and devotion to Islam.
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
                Ahmedabad International Airport, Ahmedabad, Gujarat.
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Ahmedabad Junction Railway
                Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">31.6 Kms from Mujpur</li>
              <li className="animate-on-scroll">32.7 Kms from Patan</li>
              <li className="animate-on-scroll">35.8 Kms from Dhinoj</li>
              <li className="animate-on-scroll">36.5 Kms from Selavi</li>
              <li className="animate-on-scroll">56.2 Kms from Radhanpur</li>
              <li className="animate-on-scroll">118.0 Kms from Ahmedabad</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Denmal Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img
                key={(item.city = "Denmal(Hasanfir)")}
                src={item.image}
                alt="Mazar"
              />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Denmal Mazar</h2>
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
              <p>Mazar-E-Hasani Campus, Denmal, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>٢٣</span>شهر محرم الحرام
                </p>
                <p>23 Shehre-Moharramul-Haram
                </p>
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

export default Denmal;
