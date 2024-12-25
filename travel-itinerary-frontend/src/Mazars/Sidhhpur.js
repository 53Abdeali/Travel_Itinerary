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

function Sidhhpur() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Sidhhpur");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Syedi Qazi Khan Saheb (QR) ne dawat ni khidmat nu sharaf 4 Duat
                Mutlaqeen: Syedna Abdul Taiyeb Zakiuddin(RA), Syedna Moosa
                Kalimuddin (RA), Syedna Noor Mohammed Nooruddin (RA), and Syedna
                Ismail Badruddin (RA) na zaman ma thayu. Aapnu khidmat nu zaman
                6th Mughal badshah, Aurangzeb, se lai ne Shah Jahan II tak no
                che, aa waqat ma Mohammed Rangilo na haath ma saglu hatu. Waqt
                na saathe, ahmedabad ma takreeban Haakim thaya, je ma si kuch ye
                dawaat ne daad aap ane kuch ye na aapi. Te siwa dawant na
                dushmano ye mumenin ne qed kida yah lag k Syedna Noor Mohammed
                Nooruddin (RA) bhi qed ma raya che.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedna Moosa Kalimuddin's (RA) na dor ma, Syedi Qazi Khan Saheb
                no Syedna Noor Mohammed Nooruddin (RA) na sabaq waaste ehem
                kirdar hato. Aap kabhi bhi Salatul Tahajjud ane Salatul Shafa
                watar ne faut nota krta.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Aapne Ahmedabad na Aamil banawa ma aaya ane Imam-uz-Zamaan
                  (SA) na didar nu sharaf sapna ma hasil thayu.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Syedi Qazi Khan Saheb ne Ilmul Haqeeqat and Kitabul Kashf na
                  rutba si nawazwa ma aaya. Syedi Hakimuddin (QR) na wafat na
                  baad, Syedna Badruddin (RA) ye Syedi Qazi Khan Saheb Mazoon na
                  rutba ma qayim kida. Aapye Syedi Qasimkhan (QR), je Mazoon
                  hata hna saathe dawat ni hamyat kidi che.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedi Qazi Khan Saheb (QR) performed exceptional khidmat under
                the reign of four Duat Mutlaqeen: Syedna Abdul Taiyeb Zakiuddin
                (RA), Syedna Moosa Kalimuddin (RA), Syedna Noor Mohammed
                Nooruddin (RA), and Syedna Ismail Badruddin (RA). His era
                spanned from the reign of the 6th Mughal emperor, Aurangzeb, to
                the last days of Shah Jahan II, during which Mohammed Rangilo
                held power. Over this period, Ahmedabad saw the governance of
                around 15 rulers, some of whom supported the Dawat, while others
                opposed it, leading to the imprisonment of Mumineen, including
                Syedna Noor Mohammed Nooruddin (RA).
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                During Syedna Moosa Kalimuddin's (RA) time, Syedi Qazi Khan
                Saheb played a pivotal role in the education of Syedna Noor
                Mohammed Nooruddin (RA). Known for his piety and devotion, he
                regularly performed Salatul Tahajjud and never missed Shafa
                watar namaz.
                <span className="animate-on-scroll">
                  {" "}
                  He was appointed as the Aamil of Ahmedabad and was blessed
                  with the Sharaf of witnessing the Imam-uz-Zamaan (SA) in his
                  dreams. Syedi Qazi Khan Saheb's era was significant, marked by
                  his spiritual insights and his standing as one of the three
                  Qaafs during Syedna Badruddin's (RA) reign.
                </span>
                <br /> <br />
                <span className="animate-on-scroll">
                  Syedi Qazi Khan Saheb was granted the honor of Ilmul Haqeeqat
                  and Kitabul Kashf, a testament to his deep knowledge and
                  faith. After the passing of Syedi Hakimuddin (QR), Syedna
                  Badruddin (RA) appointed Syedi Qazi Khan Saheb as Mazoon. He
                  also worked alongside Syedi Qasimkhan (QR), who served as
                  Mazoon and is buried in Surat. Syedi Qazi Khan's life was a
                  remarkable example of service, devotion, and spiritual
                  accomplishment.
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
                Nearest Railway Station <br /> Sidhhpur Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">100.2 Kms from Radhanpur</li>
              <li className="animate-on-scroll">116.2 Kms from Ahmedabad</li>
              <li className="animate-on-scroll">224.7 Kms from Vadodara</li>
              <li className="animate-on-scroll">257.7 Kms from Morbi</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Sidhhpur Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img
                key={(item.city = "Sidhhpur")}
                src={item.image}
                alt="Mazar"
              />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Sidhhpur Mazar</h2>
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
              <p> Syedi Qazi Khan Mazar Campus, Sidhhpur, Gujarat.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p><span>٠٣</span>شهر جمادي لاولى</p>
                <p>Syedi Qazi Khan Saheb(QS)</p>
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

export default Sidhhpur;
