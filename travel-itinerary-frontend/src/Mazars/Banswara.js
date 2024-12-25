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

function Banswara() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Banswara");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Moulaya Abdul Rasul Shahid (QS) ye 35 ma Dai-Al-Mutlaq Syedna
                Abdul Taiyeb Zakiuddin (R.A.) na zaman ma dawat ni khidmat kidi
                ane mumeenin ni dushmano si hifazat kidi. Syedna na zamaan ma
                Moulaya Abdul Rasul, Maulaya Sheikh Adam ane Syedi Hasanji
                Badshah, Burhanpur si Aurangabad padhara. Ane waha si Dongaon
                Moulaya Nooruddin Saheb (QS) ni ziyarat karva padhara. Ane pachi
                pacha Burhanpur tashreef laya. Thora arsa baad aap Sahebo
                Ahemdabad padhari gaya.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Te waqat ma Mumineen par ghani mehnato utri. Syedna Zakiuddin
                (RA) ye dawat nu maal kharchi ne mumeenin ni musibat na waqat ma
                madad kidi ane Maulaya Abdul Rasul ye mumeenin ni hifazat kidi.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Jivare Moulaya Abdul Rasul waghar na bilaad na waali hata, aap
                  galyakot tashreef lai gaya. Te douraan rasta ma aap nu guzar
                  lovapali naam na gaam si thayu. Waha par dushmano ye aap par
                  ane aap ma sath na logo par hamlo kido. Aap ghana bahaduri si
                  dushmano si lara take apne barchi lagi and aap shahid thaya.
                  Aap ne 10mi Rabi-ul-Akhar, 1120 hijri ma shahadat hasil thai.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Syedi Fakhruddin Shaheed (RA) na jem, aap na dar par bhi
                  lokhand mom thai jai. Ghana mumeenin musibat na waqat ma aap
                  na dar par asro lai che and shifa hasil kare che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Moulaya Abdul Rasul Shaheed (QS) served in the era of the 35th
                Dai-al-Mutlaq, Syedna Abdul Tayeb Zakiuddin (RA), he worked to
                protect our community. During Syedna Abdul Tayeb Zakiuddin's
                time, Moulaya Abdul Rasul, along with Moulaya Sheikh Adam and
                Syedi Hasanji Badshah, left from Burhanpur and traveled to
                Aurangabad. From there, they went to Dongaon for the ziyarat of
                Moulaya Nooruddin Saheb (QS) and then returned to Burhanpur.
                Later, they went to Ahmedabad.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                At that time, Mumineen were facing many troubles, but Moulaya
                Abdul Rasul stood strong to protect the faith. Syedna Zakiuddin
                (RA) used much of Dawat's wealth to help Mumineen during these
                difficult times, and Moulaya Abdul Rasul played an important
                role in defending them.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  While Moulaya Abdul Rasul was serving in Waghar district, he
                  traveled to Galiyakot. On his way, he passed through the
                  village of Lovapali, where enemies attacked him and his
                  companions. He fought bravely but was eventually killed by a
                  spear. His shahadat (martyrdom) happened on the 10th of
                  Rabi-ul-Akhar, 1120H.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Moulaya Abdul Rasul's resting place is known for the miracle
                  of the "breaking of the beri" similar to the miracle of
                  Moulana Fakhruddin Shaheed (QS) in Galiyakot. Many people
                  visit his Roza for blessings, especially during tough times.
                  His life and sacrifice continue to inspire the our community.
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
                Maharana Pratap Airport, Udaipur 160 Kms from Banswara
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Ratlam Junction 85 Kms from
                Banswara
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">35 Kms from Partapur</li>
              <li className="animate-on-scroll">68.2 Kms from Galiakot</li>
              <li className="animate-on-scroll">102.3 Kms from Dahod</li>
              <li className="animate-on-scroll">163.4 Kms from Udaipur</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Banswara Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img
                key={(item.city = "Banswara")}
                src={item.image}
                alt="Mazar"
              />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Mazar Sayedi Abdul Rasool Shaheed</h2>
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
              <p>Mazar e Fakhri campus, Galiakot, Rajasthan.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>١٠</span> شهر ربي الاخر
                </p>
                <p>10 Shehre-Rabiul-Akahar</p>
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

export default Banswara;
