import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoTrainSharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import "./MazarStyles/Amreli.css";
import MazarFeedback from "./MazarFeedback";
import MazarReviews from "./MazarReviews";

function Amreli() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Amreli");

  return (
    <div className="amreli-main">
      <div className="amreli">
        <div className="amreli-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Syedi Jafferjee Jivaji (Q.S.) nu akhbar takreeban 200 waras
                puranu che. Aap ye 43rd ma dai Syedna Abdeali Saifuddin (R.A.)
                ni khidmat kidi che. Aap ye mumeenin na din ane duniya na umoor
                ma ghani saaye kidi che.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Aap ni shaan ghani azim che. Aap mumeenin ni hajat ravai kare
                che. Aap na roza mubaraka ma ghana mojizao bhi thai che.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  Ye ghana mojizao ma si ek mojiza em che k aapna dar pr arwa
                  khabisa na waqeah hal thaya che ane thai che. Arwa khabisa su
                  che k ehvi bad rooh k je mumenin ane ehna ehal pr asar kare
                  che.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Je koi mumneenin ne kai taklif pesh ave che to ye aapna dar
                  par avi ne aasro lai che ane ehni mushkil asaan thai j jai
                  che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedi Jafferjee Jivaji's (Q.S.) history, spanning over two
                centuries, holds great significance in the Dawoodi Bohra
                community. He was one of the Hudud Fozala, a distinguished rank
                in the spiritual hierarchy, during the era of the 43rd Dai
                al-Mutlaq, Syedna Abdeali Saifuddin (R.A.). Syedi Jafferjee
                Saheb's contributions during Syedna Abdeali Saifuddin's tenure
                were of immense value to the community, both in spiritual
                guidance and addressing societal needs.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                One particularly remarkable aspect of Syedi Jafferjee Saheb's
                legacy is the long-held belief that numerous incidences of
                Arwa-Khabisa were resolved at his Roza Mubaraka.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  The term "Arwa-Khabisa" refers to cases of spiritual
                  disturbances, possession, or negative influences affecting
                  individuals or families. These instances, rooted in cultural
                  and religious beliefs, are viewed as afflictions that require
                  divine intervention and spiritual remedies.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  It is said that, over the years, individuals suffering from
                  such afflictions have visited Syedi Jafferjee Saheb's mazar,
                  seeking relief from their suffering. Through prayers,
                  blessings, and the barakat of Syedi Jafferjee Saheb, many have
                  reported miraculous recoveries. The Roza Mubaraka became
                  synonymous with such cures, adding to the reverence for this
                  sacred place.
                </span>
              </p>
            </>
          )}

          <span className="amreli-span" onClick={() => setShowMore(!showMore)}>
            {showMore ? (
              <IoIosArrowDropup className="drop-up-down" />
            ) : (
              <IoIosArrowDropdown className="drop-up-down" />
            )}
          </span>

          <div className="la">
            <div className="amreli-lisan">
              <span
                className="lisan-btn"
                onClick={() => setShowLisanDawat(!showLisanDawat)}
              >
                {showLisanDawat ? "Read In English" : "Read in Lisan-Ud-Dawat"}
              </span>
            </div>
            <Link className="link-amreli" to="/">
              Plan Journey
            </Link>
          </div>
        </div>

        <div className="amreli-ways">
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
                Rajkot International Airport 111.2 Kms from Amreli
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Amreli Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">111.2 Kms from Rajkot</li>
              <li className="animate-on-scroll">116.4 Kms from Ranpur</li>
              <li className="animate-on-scroll">201.9 Kms from Jamnagar</li>
              <li className="animate-on-scroll">250.3 Kms from Ahmedabad</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="amreli-gallery">
        <h1>About Mazar</h1>
        <div className="amreli-abt">
          <div className="amreli-image">
            <h2>Amreli Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Amreli")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="amreli-all">
            <div className="amr-abt">
              <h2>About Jaafri Mazar</h2>
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

            <div className="amr-acc-nearby">
              <h2>Nearby Accomodations</h2>
              <p>
                Jaafri Mazar Musafirkhana, Near Roza Mubaraka, Amreli, Gujarat.
              </p>
            </div>

            <div className="amr-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>٢٣</span> شهر جمادي الاولى
                </p>
                <p>23 Shehre-Jumadil-Ula</p>
              </div>
            </div>

            <div className="amr-mannat">
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

export default Amreli;
