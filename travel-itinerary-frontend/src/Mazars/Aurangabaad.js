import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoTrainSharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import "./MazarStyles/Aurangabaad.css";
import MazarFeedback from "./MazarFeedback";
import MazarReviews from "./MazarReviews";

function Aurangabaad() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Aurangabaad");

  return (
    <div className="aurangabaad-main">
      <div className="aurangabaad">
        <div className="aurangabaad-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                29 ma dai al mutlaq Syedna Abdul Taiyeb Zakiuddin (R.A) k jena
                thanda saaya ma mumenin vasta. Mumenin ni baad arazo pachi aap
                maula ahmedabad padhara. Je waqt aap Ahmedabad aaya to dushmano
                ni aankh ma rai pisai gai ane aapne qed krwa ni sazish rachi. Te
                waqat Aurangzeb ni hukumat hati ane kar talib khan je ahmedabad
                no hakim hato te ne Aurangzeb ye aa amar sopo.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Kaik hikmato na karan syedna ye ahmedabad choru ane aap jamnagar
                padhari gaya. Jam Tamanjee k je sakhi ,imaandar ane jamnagar na
                raja hata, maula ni ghani mohabbat krta.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  Jam Tamanjee ye Syedna ni himayat kidi ane tahffuz si rakha
                  yaha tk k ehna 2 farzand Laka ane Bhaba ne qed krwa ma aaya.
                  Dushmano ye Maulaya Najam Khan Bin Syedna Fir Khan
                  Shujauddin(Q.S.) ane Maulaya Abdul Vahid(Q.S.) ne qed kari ne
                  Aurangzeb na darbar ma pesh kida ane qed ma ghana zulm o sitam
                  kida.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Aa mushkil na waqat ma b ye 2 sahebo na akido mazboot hato
                  take ye beve ne qed se chorwa ma aaya. Ane te baad aap beve ne
                  shahid krwa ma aaya che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedna Abdul Taiyeb Zakiuddin (R.A.), the 29th Dai al-Mutlaq,
                led our community during a time of great hardship and
                persecution. At the request of the Mumineen, Syedna Abdul Taiyeb
                Zakiuddin (R.A.) arrived in Ahmedabad. However, his presence
                attracted the attention of Aurangzeb's deputies. Acting on the
                orders of Aurangzeb, a local ruler named Kar Talib Khan, who was
                the Hakim (governor) of the area, sought to arrest Syedna. Kar
                Talib Khan was driven by greed, hoping to seize Syedna's wealth.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Due to some hikmat Syedna secretly left Ahmedabad and fled to
                Jamnagar.In Jamnagar, the ruler Jam Tamanjee extended his
                protection to Syedna, offering him refuge.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  As a sign of his loyalty and support for Syedna, Jam Tamanjee
                  allowed his two sons, Laka and Bhaba, to be imprisoned. At the
                  same time Maulana Najam Khan and Maulana Abdul Vahid were
                  taken captive and brought to the court of Aurangzeb in
                  Aurangabad. These men were imprisoned and suffered severe
                  hardships as they were interrogated and punished for their
                  faith.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Eventually, they were released, but not without enduring great
                  physical and emotional suffering. And hence this period in
                  history highlights the strength and resilience of Syedna Abdul
                  Taiyeb Zakiuddin (R.A.) and his followers.
                </span>
              </p>
            </>
          )}

          <span
            className="aurangabaad-span"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? (
              <IoIosArrowDropup className="drop-up-down" />
            ) : (
              <IoIosArrowDropdown className="drop-up-down" />
            )}
          </span>

          <div className="la">
            <div className="aurangabaad-lisan">
              <span
                className="lisan-btn"
                onClick={() => setShowLisanDawat(!showLisanDawat)}
              >
                {showLisanDawat ? "Read In English" : "Read in Lisan-Ud-Dawat"}
              </span>
            </div>
            <Link className="link-aurangabaad" to="/">
              Plan Journey
            </Link>
          </div>
        </div>

        <div className="aurangabaad-ways">
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
                Aurangabaad International Airport 8.5 Kms from Dargah Dawoodpura
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Aurangabaad Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">113.7 Kms from Ahmednagar</li>
              <li className="animate-on-scroll">217.4 Kms from Burhanpur</li>
              <li className="animate-on-scroll">232.0 Kms from Ranala</li>
              <li className="animate-on-scroll">234.8 Kms from Pune</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="aurangabaad-gallery">
        <h1>About Mazar</h1>
        <div className="aurangabaad-abt">
          <div className="aurangabaad-image">
            <h2>Aurangabaad Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img
                key={(item.city = "Aurangabaad")}
                src={item.image}
                alt="Mazar"
              />
            ))}
          </div>

          <div className="aurangabaad-all">
            <div className="aur-abt">
              <h2>About Dargah Dawoodpura</h2>
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

            <div className="aur-acc-nearby">
              <h2>Nearby Accomodations</h2>
              <p>
                Jaafri Mazar Musafirkhana, Near Roza Mubaraka, aurangabaad,
                Gujarat.
              </p>
            </div>

            <div className="aur-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p>Syedi Najam Khan(Q.S)</p>
                <p>12 Shehre-Rajabul-Asab</p>
              </div>

              <div className="ar-para">
                <p>Syedi Vali Bhai Shahid(Q.S)</p>
                <p>20 Shehre-Zilqadatil-Haram</p>
              </div>
            </div>

            <div className="aur-mannat">
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

export default Aurangabaad;
