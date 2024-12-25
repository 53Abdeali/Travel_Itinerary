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

function Ranpur() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Ranpur");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Maulai Sheikhpeer Ibn Dawood (QR.) nu watan Kathiawar hatu ane
                aap Syedna Yusuf Najmuddin (RA) and Syedna Jalaal Shamsuddin
                (RA) na zaman ma hudud fodola ma si hata. Maulai Sheikhpeerna
                zaman ma je waqat Humayun ye gujarat pr hamlo kari ne qabzo kido
                te waqat, Bahadur Shah ye Ranpur ane Morbi ne lootu. Maulai Adam
                (QR.) ne gujarat na aamil ye bina koi wajah bandiwaan kra ane
                fitoti mangi. Mumineen sagla ye ghanu thodu jama karu ane Maulai
                Sheikhpeer (QR.) ye bacha hua rupiya aapa.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Ranpur ghana Hudood Fozala (QR.), duat jema Maulai Hasan bin
                Dawood (QR.), Syedna Dawood bin Ajab Shah (RA), and Syedna
                Dawood bin Qutub Shah (RA) nu watan-e-qadim hatu.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Maulai Sheikhpeer Ibn Dawood (QR.) har mahina ma ek qasida
                  tasneef farmavta.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Maulai Tarakhpeer (QR.) ranpur na Wali hata ane aapne ranpur
                  ma dafan karwa ma aaya che. buxurgo na hisab si ek Jhad qabar
                  Mubarak ni hifazat krto thoda arsa waaste ye jhad mojizan
                  gayab thai gayo ane mojizan waps se dikhwa lago. Aaje logo ye
                  jhad ni chaal ane pattiyo si bimai no ilaj kare che. Har jomoa
                  ni raate 5 lamp(lantern) mojizan aa jhhad pr ujagad thai che,
                  ghana mumenin ye mojiza dekha che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Maulai Sheikhpeer Ibn Dawood (QR.), a native of Kathiawar, was a
                key figure among the Hudood during the time of Syedna Yusuf
                Najmuddin (RA) and Syedna Jalaal Shamsuddin (RA). During Maulai
                Sheikhpeer's era, when Gujarat was attacked by Emperor Humayun,
                Bahadur Shah looted Ranpur and Morbi. Maulai Adam (QR.) was
                unjustly arrested by the local governor, who demanded a ransom.
                The Mumineen contributed, and Maulai Sheikhpeer (QR.) led the
                effort to pay the sum.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Ranpur was home to many respected Hudood Fozala (QR.), including
                Maulai Hasan bin Dawood (QR.), Syedna Dawood bin Ajab Shah (RA),
                and Syedna Dawood bin Qutub Shah (RA).{" "}
                <span className="animate-on-scroll">
                  {" "}
                  Maulai Sheikhpeer (QR.) was also known for composing monthly
                  Qasidas.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Maulai Tarakhpeer (QR.) was Wali and was martyred in Ranpur.
                  According to the elders in Ranpur, the tree protecting his
                  Qabar Mubarak was hidden for sometime and reappeared
                  miraculosly. Today people use the paste of the bark and leaves
                  of this tree to cure illness. On Friday night, five lamps glow
                  miraculously on this tree which is witnessed by many.
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
                Nearest Railway Station <br /> Ranpur Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">122.3 Kms from Khambat</li>
              <li className="animate-on-scroll">130.8 Kms from Ahmedabad</li>
              <li className="animate-on-scroll">138.6 Kms from Rajkot</li>
              <li className="animate-on-scroll">
                145.1 Kms from Morbi via Wankaner
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Ranpur Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Ranpur")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Ranpur Mazar</h2>
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
              <p> Mazar-E-Qutbi Campus, Ahmedabad, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p>Maulai Sheikhpeer Ibn Dawood (QR.)</p>
              </div>

              <div className="ar-para">
                <p>Maulai Tarakhpeer (QR.)</p>
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

export default Ranpur;
