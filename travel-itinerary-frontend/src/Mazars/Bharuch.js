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

function Bharuch() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Bharuch");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Maulaya Habibullah, 51 ma dai Syedna Taher Saifuddin (RA) na
                nana ji saheb hata. Apno akidat ghano mazboot hato. Aap ye 47 ma
                dai Syedna Abdul Qadir Najmuddin (RA) na zamaan ma dawat ni
                ghani ikhlas na sathe khidmat kidi che.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Maulaya Habibullah ne Bharuch na waali banava ma aya. Aap ye
                ghani lagan si khidmato kidi. Imaan ni hifazat kidi ane mumeenin
                ne ghani hidayato didi.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Bharuch ni khidmat na dauraan aap ni tabiayat nasaz thai take
                  22 mi Rabi-ul-Akhar , 1282 Hijri ma aap wafat thaya.
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
                Maulaya Habibullah was the esteemed grandfather of the 51st
                Dai-al-Mutlaq, Syedna Taher Saifuddin (RA). He was a person of
                great devotion and served the Dawat with sincerity during the
                era of the 47th Dai-al-Mutlaq, Syedna Abdul Qadir Najmuddin
                (RA).
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                In his lifetime, Maulaya Habibullah was given the responsibility
                of serving the Dawat in Bharuch, a significant center for our
                community. He carried out his duties with commitment, always
                striving to safeguard the faith and guide the community.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  However, during this period of khidmat in Bharuch, Maulaya
                  Habibullah faced severe health challenges. On 22nd
                  Rabi-ul-Akhar, 1282 Hijri, while continuing his
                  responsibilities in the service of Dawat, he tragically lost
                  his life.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  His martyrdom was a testament to his unwavering dedication to
                  the cause and his deep connection to the Dawat. His passing
                  marked a moment of great sorrow for the Dawoodi Bohra
                  community, and his sacrifice is remembered with reverence to
                  this day.
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
                Nearest Railway Station <br /> Bharuch Junction Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">75.9 Kms from Surat</li>
              <li className="animate-on-scroll">87.9 Kms from Vadodara</li>
              <li className="animate-on-scroll">191.5 Kms from Ahmedabad</li>
              <li className="animate-on-scroll">226.4 Kms from Dahod</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Bharuch Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Bharuch")} src={item.image} alt="Mazar" />
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
              <p>Rooms nearby Mazar E Saifee Campus, Surat, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>٢٢</span> شهر ربي الاخر
                </p>
                <p>22 Shehre-Rabiul-Akahar</p>
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

export default Bharuch;
