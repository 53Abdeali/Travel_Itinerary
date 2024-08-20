import React from "react";
import { useEffect,useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import "./Styles/Community.css";

function Community() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="main-section">
      <div className="about">
        <div className="heading">
          <h1 className={`fadeInDown ${isVisible ? "visible" : ""}`}>
            About Dawoodi Bohra Community
          </h1>
        </div>
        <div className="about-content">
          <img
            className={`fadeIn ${isVisible ? "visible" : ""}`}
            src={process.env.PUBLIC_URL + "/Images/Moula_TUS.jpg"}
            alt="Moula Tus"
          ></img>
          <div className="Paragraph">
            <p className={`fadeInUp ${isVisible ? "visible" : ""}`}>
              The Dawoodi Bohra community is a subsect of Shia Islam, known for
              its strong emphasis on education, business acumen, and community
              service. Originating from Yemen, they have a global presence, with
              significant populations in India, Pakistan, East Africa, and the
              Middle East. The community is led by a spiritual leader Dr.Syedna
              Mufaddal Saifuddin successor and the son of Dr.Syedna Mohammad
              Burhanuddin and, who provides guidance on religious and social
              matters. Dawoodi Bohras are distinguished by their unique cultural
              practices, including their traditional attire, cuisine, and the
              practice of communal living, which fosters a close-knit community
              environment. Their values of peace, unity, and respect for other
              faiths are deeply ingrained, making them a harmonious and
              industrious group.
            </p>
            <p className={`fadeInUp ${isVisible ? "visible" : ""}`}>
              At the heart of the Dawoodi Bohra community is a strong sense of
              unity and social responsibility. They are actively involved in
              various philanthropic activities, from providing food and shelter
              to the needy to supporting healthcare and educational initiatives.
              Their values of peace, respect for other faiths, and communal
              harmony make them an integral part of the diverse societies in
              which they live, contributing to their reputation as a peaceful
              and industrious community.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.thedawoodibohras.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More{" "}
                  <span>
                    <IoMdArrowRoundForward
                      style={{ cursor: "pointer", fontSize: 30, color: "#fff" }}
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="analysis">
        <ul>
          <li  className={`fadeInDown ${isVisible ? "visible" : ""}`}>
            100+ <br />
            <span className={`fadeInDown ${isVisible ? "visible" : ""}`}>Mazaar Mubaraka</span>
          </li>
          <div className="Line"></div>
          <li  className={`fadeInDown ${isVisible ? "visible" : ""}`}>
            5K+ <br />
            <span className={`fadeInDown ${isVisible ? "visible" : ""}`}>Zaereen</span>
          </li>
          <div className="Line"></div>
          <li className={`fadeInDown ${isVisible ? "visible" : ""}`}>
            10K+ <br />
            <span className={`fadeInDown ${isVisible ? "visible" : ""}`}>Zaereen To Be Expected</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Community;
