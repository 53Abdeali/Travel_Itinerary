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

function Kamlapur() {
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

  const filteredMazars = mazar.filter((item) => item.city === "Kamlapur");

  return (
    <div className="mazarat-main">
      <div className="mazarat">
        <div className="mazarat-text">
          {showLisanDawat ? (
            <>
              <h1 className="animate-on-scroll">Mazar ni Akhbar</h1>
              <p className="animate-on-scroll">
                Khuda ta'la ye Syedi Shamas Khan (Q.R.) ne 3 dikra farzand ni
                dolat si nawaza. Syedi Hasan Ji Badshah (Q.R.), Syedi Yusuf Khan
                (Q.R.), Syedi Aliji Shahid (Q.R.). Dia-al-Mutlaq na farman ane
                raza si Syedi Aliji travelled Wajebat adaa karwa waaste Ujjain
                si kamlapur tashreef laya. Kmalapur se ujjain walti waqat
                sonkutch ma bhilrao ye aapne luta ane qatal kari nakha. Je jagah
                aapne dushmano ye qatal kida te jagah Shahad Gaah si janwa ma
                aawe che. Je waqat Mumenin ne aa khabar aawi to aapne kamlapur
                maj dafan kara.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                Syedi Aliji shahid ni shahadat har mumenin ne aaj lag yaad che
                ane qayamat na din lag yaad rehse. Aapnu Urs Mubarak ghanuj
                behter shakelat se ane dhum dhaam si manawa ma aawe che.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  <br />
                  Syedna Muffadal Saifuddin(T.U.S) na raza mubaraka si yaha pr
                  rest room jaman na izan dewa ma aawe che. Jaman waaste members
                  ni information authorities ne pehla sej aapi de.
                </span>
              </p>
            </>
          ) : (
            <>
              <h1 className="animate-on-scroll">History of Mazar</h1>
              <p className="animate-on-scroll">
                Syedi Shamas Khan (Q.R.) was having sons. Syedi Hasan Ji
                Badshah, Syedi Yusuf Khan, Syedi Aliji. With the order and
                permission of Dia-al-Mutlaq Aliji travelled from Ujjain to
                Kamlapur. While returning from there on the way of sonkutch Bhil
                dacoited, looted him and killed him. The place where Syedi Aliji
                was killed is known as Shahadat Gaah. When Mumenin got to know
                about this incidence they buried him in here at Kamlapur.
              </p>

              <p className={!showMore ? "blur-text" : ""}>
                The sacrifice done by Syedi Aliji is being remembered by mumenin
                till today and it will be remembered till the day of judgement.
                The Urs Mubarak of Syedi Aliji Shahid is celebrated with
                grandeur in kamlapur.{" "}
                <span className="animate-on-scroll">
                  {" "}
                  With the permission of Syedna Muffadal Saifuddin(T.U.S) the
                  facility of lodging and food is available. For the lunch prior
                  information should be given to the authorities.
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
                Indore International Airport, Indore, Madhya Pradesh.
              </span>
            </div>
            <br />

            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <IoTrainSharp className="icon-ways animate-on-scroll" /> By
                Railways
              </li>
              <li className="animate-on-scroll">
                Nearest Railway Station <br /> Indore Junction Railway Station
              </li>
            </div>
            <br />
            <div className="ways animate-on-scroll">
              <li className="heading animate-on-scroll">
                <FaRoad /> By Roadways
              </li>
              <li className="animate-on-scroll">68.0 Kms from Indore</li>
              <li className="animate-on-scroll">100.7 Kms from Ujjain</li>
              <li className="animate-on-scroll">148.8 Kms from Bhopal</li>
              <li className="animate-on-scroll">241.8 Kms from Burhanpur</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="mazarat-gallery">
        <h1>About Mazar</h1>
        <div className="mazarat-abt">
          <div className="mazarat-image">
            <h2>Kamlapur Mazar Gallery</h2>
            {filteredMazars.map((item) => (
              <img key={(item.city = "Kamlapur")} src={item.image} alt="Mazar" />
            ))}
          </div>

          <div className="mazarat-all">
            <div className="maz-abt">
              <h2>About Kamlapur Mazar</h2>
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
              <p>Mazar-E-Najmi Campus, Ujjain, Madhya Pradesh.</p>
            </div>

            <div className="maz-urs-date">
              <h2>Urs Mubaraka</h2>
              <div className="ar-para">
                <p className="arabic">
                  <span>١٥</span> شهر جمادي الاخرى
                </p>
                <p>15 Shehre-Jumadil-Ukhra</p>
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

export default Kamlapur;
