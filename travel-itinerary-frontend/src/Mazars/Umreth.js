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

function Umreth() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Umreth");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Syedi Miyanji Taj Syedna Dawood bin Ajabshah Burhanuddin (RA)
                and Syedna Dawood bin Qutubshah Burhanuddin (RA) na zaman ma
                aamil ane hudud fodola ma si hata. Aapna 3 biradar hata: Syedi
                Musanji Taj Saheb jeni qabr mubarak Baroda ma che, Maulai Raj,
                and Maulai Jaffer in jeni qabr mubarak Jamnagar ma che.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Aapni misaq ni rusumat ma gehro aqido hato ke je aapni numaya
                khaslat hati. On the day of Eid-Ghadeer khum na din aap ye niyat
                kidi k aap Umreth se Ahmedabad pedal (walk) jase ane waha Syedna
                Dawood bin Ajabshah (RA) ne misaq aapse, ane te pachi aap Umreth
                ma misaq ni majlis rachse.
                <span>
                  {" "}
                  <br />
                  Je waqat aapna shehzada, Mulla Nuh no shaadi no waqat aayo
                  tyare Syedna Dawood bin Ajabshah (RA) Kapadwanj si Umreth
                  Niqah waaste tashreef laaya ane 10 din Umreth ma raya. Syedna
                  (RA) ye em mehsoos kidu k yaha pr koi evi moaiyyan jagah nathi
                  k jaha mumenaat namaz padhi sake te sabab aape masjid ni
                  taameer nu amar farmayu ane mojezan 3 din ma masjid nu kaam
                  tamam thayu.
                </span>
                <br /> <br />
                <span>
                  Aaj Umreth ehna shifa na asbab waaste janu jai che, khas ye
                  waaste k je b Burz (Leucoderma) ni bimari se guzartu hoi to ye
                  Syedi Miyanji Taj na mazar pr aawi ne shifa waaste aapna dar
                  pr dua kare to ehne Insha-allah shifa thai jase. Je shaks b aa
                  bimari se tangdast hoi to Aqa Moula (TUS) na mashwara mutabiq
                  Umreth ma 40 din rahe ane chitrakh Jhaad na jad(roots) ehne
                  grind kari ne k je mazar na bagicha ma uge che ehne mutasir
                  jagah pr lagawe, Insha-allah shifa thai jase .
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                He served as the Aamil Saheb of Umreth and was among the Hudud
                Fozala during the era of Syedna Dawood bin Ajabshah Burhanuddin
                (RA) and Syedna Dawood bin Qutubshah Burhanuddin (RA). He was
                one of four brothers: Syedi Musanji Taj Saheb in Baroda, Maulai
                Raj, and Maulai Jaffer in Jamnagar.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                One of his remarkable traits was his deep devotion to Meesaq
                rituals. On the day of Eid-Ghadeer, he would walk from Umreth to
                Ahmedabad to give Meesaq in the presence of Syedna Dawood bin
                Ajabshah (RA), after which he would return to Umreth to conduct
                the Meesaq Majlis.{" "}
                <span >
                  {" "}
                  When his son, Mulla Nuh, was to be wed, Syedna Dawood bin
                  Ajabshah (RA) traveled from Kapadwanj to Umreth for the Niqah
                  ceremony, staying for 10 days. During his stay, Syedna (RA)
                  noticed the absence of a designated prayer space for mumenaat
                  and personally funded the construction of a masjid, which was
                  miraculously completed in just three days.
                </span>
                <br /> <br />
                <span>
                  Umreth became known for its healing powers, particularly for
                  those suffering from Burz (Leucoderma). People from around the
                  world visit the Mazaar seeking cures for skin diseases.
                  Following Arz to Aqa Moula (TUS), the afflicted are advised to
                  remain in Umreth for 40 days, grinding the roots of the
                  Chitrakh tree that grows around the Mausoleum, and applying
                  its pulp to their skin as part of the healing process.
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
                Vadodara International Airport, Vadodara, Gujarat.
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Umreth Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">49.2 Kms from Balasinor</li>
              <li className="animate-on-scroll">62.1 Kms from Godhra</li>
              <li className="animate-on-scroll">63.1 Kms from Vadodara</li>
              <li className="animate-on-scroll">76.5 Kms from Ahmedabad</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Umreth Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Umreth")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Umreth Mazar</h2>
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
              <p> Maulai Miyanji Taj Mazar Campus, Umreth, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
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

export default Umreth;
