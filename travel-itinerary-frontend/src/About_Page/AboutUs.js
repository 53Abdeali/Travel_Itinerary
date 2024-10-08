import React, { useEffect } from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

function AboutUs() {
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
  const teamMembers = [
    {
      picture: "",
      fullName: "Ammar bs Mudreka bs Zakiuddin",
      designation: "Aamil Sahab / Mentor",
      bio: "Ammar Nagar, Indore",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
    {
      picture: "",
      fullName: "Abdeali Bhai Kota Wala",
      designation: "Team Lead, Led Developer",
      bio: "Ammar Nagar, Indore",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
    {
      picture: "",
      fullName: "Murtaza Bhai Kannod Wala",
      designation: " Led UI/UX Designer",
      bio: "Ammar Nagar, Indore",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
    {
      picture: "",
      fullName: "Taher Bhai Badwani Wala",
      designation: "Co-UI/UX Designer,Marketing Head",
      bio: "Ammar Nagar, Indore",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
    {
      picture: "",
      fullName: "Mufaddal Bhai Bhopal Wala",
      designation: "Full Stack Developer",
      bio: "Ammar Nagar, Indore",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
    {
      picture: "",
      fullName: "Taha Bhai Sanawad Wala",
      designation: "Co-Content Writer",
      bio: "Ammar Nagar, Indore",
      socialLinks: [
        { icon: faFacebookF, href: "#" },
        { icon: faLinkedinIn, href: "#" },
        { icon: faTwitter, href: "#" },
        { icon: faBehance, href: "#" },
      ],
    },
  ];

  const TeamMemberItem = ({ member }) => (
    <div className="d-flex">
      <div className="me-3">
        <img
          src={member.picture}
          alt={member.fullName}
          className="img-fluid rounded"
          width={120}
        />
      </div>
      <div className="ezy__team3-content">
        <h4 style={{ fontSize: "2rem" }} className="mb-2">
          {member.fullName}
        </h4>
        <h6>{member.designation}</h6>
        <p className="opacity-50 mb-0">{member.bio}</p>
        <div className="ezy__team3-social-links mt-4">
          {member.socialLinks.map((link, i) => (
            <a href={link.href} className={classNames({ "ms-3": i })} key={i}>
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
  };

  return (
    <div className="about-main">
      <div className="welcome">
        <div className="abt-head">
          <h1 className="animate-on-scroll">
            Welcome To Rehlat-Ul-Mumenin
          </h1>
        </div>
        <div className="abt-p">
          <p className="animate-on-scroll">
            Dive into the vibrant world of the Dawoodi Bohra community. Connect
            with us, explore our rich heritage, and make your journey
            unforgettable. We are excited to have you here!
          </p>
        </div>
      </div>
      <div className="about-us">
        <div className="about-question animat-on-scroll">
          <h1>ABOUT US</h1>
          <div className="para1 animate-on-scroll">
            <h2 className="animate-on-scroll">
              What is Rehlat-Ul-Mumenin?
            </h2>
            <p className="animate-on-scroll">
              The Rehlat-Ul-Mumenin is thoughtfully designed to focus on
              spiritual enrichment and community bonding. It often includes
              visits to significant masjids, shrines of revered saints, and
              historical sites associated with our faith. These journeys, known
              as "ziyarat," provide opportunities for reflection, prayer, and
              connection with fellow community members. Along with spiritual
              activities, the itinerary may also include cultural experiences
              and visits to local Dawoodi Bohra centers, reinforcing our values
              of faith, tradition, and unity.
            </p>
          </div>
          <div>
            <h2 className="animate-on-scroll">
              What is the mission and objective of the platform?
            </h2>
            <p className="animate-on-scroll">
              The Rehlat-Ul-Mumenin project aims to bridge the gap
              by offering a platform that not only helps Zaereen plan their
              visits to major pilgrimage sites but also guides them to smaller,
              nearby sites of significance. The proposed solution includes
              detailed information about these lesser-known sites, such as the
              cemeteries and the historical or spiritual importance of the
              individuals buried there. This will ensure that Zaereen can make
              informed decisions and enrich their pilgrimage experience. The
              platform will be designed to provide a comprehensive understanding
              of the heritage of the community, making it a valuable tool for
              preserving and promoting Dawoodi Bohra history and spirituality.
            </p>
          </div>
          <div>
            <h2 className="animate-on-scroll">
              What are the features of this platform?
            </h2>
            <ul>
              <li className="animate-on-scroll">
                Personalized Itinerary Planning:
              </li>
              <p className="animate-on-scroll">
                Users can create custom travel itineraries tailored to Dawoodi
                Bohra religious and cultural sites, ensuring visits to important
                masjids, shrines, and historical landmarks.
              </p>
              <li className="animate-on-scroll">Explore nearby Places:</li>
              <p className="animate-on-scroll">
                A feature that allows users to discover nearby religious and
                cultural destinations, making it easy to include them in their
                travel plans.
              </p>
              <li className="animate-on-scroll">
                Secure Login and Registration:
              </li>
              <p className="animate-on-scroll">
                Secure access to personalized features, including saved
                itineraries and booking history, using the ITS 52 API for
                authentication.
              </p>
              <li className="animate-on-scroll">Destination Information:</li>
              <p className="animate-on-scroll">
                Detailed information about each destination, including
                historical significance, prayer timings, and available
                amenities, ensuring users are well-informed.
              </p>
              <li className="animate-on-scroll">Feedback Submission:</li>
              <p className="animate-on-scroll">
                A feedback mechanism where users can share their travel
                experiences and suggestions to help improve the platform and
                assist other travelers.
              </p>
            </ul>
          </div>
        </div>
        <div className="back-images animat-on-scroll">
          <div className="box-image1"></div>
          <div className="box-image2"></div>
        </div>
      </div>
      <div className="our-story">
        <div className="story animate-on-scroll">
          <h1 className="animate-on-scroll">OUR STORY</h1>
          <div className="story-para animate-on-scroll">
            <p className="animate-on-scroll">
              Discover the purpose behind our platform: a seamless blend of
              tradition and modern convenience. Learn why it was created to
              cater to the unique needs of Dawoodi Bohras, making every journey
              spiritually enriching and effortlessly planned.
            </p>
          </div>
        </div>
        <div className="our-main">
          <div className="first">
            <h2 className="animate-on-scroll">Problem Faced</h2>
            <div className="first-para">
              <div className="actual-para">
                <p className="animate-on-scroll">
                  One of our team members, along with his family, visited Surat
                  and Ahmedabad and planned a trip to Denmal (Hasanpir) from
                  Ahmedabad. They booked a cab from a local tours and travels
                  agency in Ahmedabad. On the way to Denmal, they visited Selavi
                  and Dhinoj, both of which were new to them. Additionally, they
                  were unaware of the Madfunin (Sahebs) in these locations.
                  After visiting Denmal, they asked their driver, who was also a
                  Bohra, to take them to Patan. The driver advised against
                  visiting Patan, stating that women are not allowed at the
                  Patan Mazar and that locals might pose a threat. Instead, he
                  suggested they visit Maujpur, known for its spiritual
                  significance. They agreed and visited Maujpur. However, upon
                  arrival, they encountered a problem: the guide was on lunch,
                  and no one was available to assist them. Being their first
                  visit, they were unfamiliar with the names of the Madfunin
                  there. After some time, a local guide appeared unexpectedly
                  and explained the spiritual importance of Maujpur and the
                  presence of the community there.
                </p>
              </div>
              <div className="image-para animate-on-scroll"></div>
            </div>
          </div>

          <div className="second">
            <h2 className="animate-on-scroll">Solution Proposed</h2>
            <div className="second-para">
              <div className="image-second-para animate-on-scroll"></div>
              <div className="actual-second-para">
                <p className="animate-on-scroll">
                  After encountering this challenge, that team member was
                  determined to create a platform that would provide essential
                  information about Mazars and the Dawoodi Bohra community.
                  Recognizing the importance of such a resource, he knew it had
                  the potential to greatly benefit Mumineen travelers. However,
                  the journey to develop the platform was not without its
                  hurdles. The lack of clear requirements and an experienced
                  team led to significant delays. Initially, he found it
                  difficult to discuss his vision with friends and family,
                  fearing they might not fully grasp the idea. Yet, driven by
                  the platform's potential, he meticulously planned a roadmap on
                  his own. Through extensive research and perseverance, he
                  eventually devised the concept of an itinerary platform that
                  would empower Mumineen to plan their journeys efficiently. The
                  platform would offer detailed information about the Saheb and
                  Mazars with profound spiritual significance, ensuring that no
                  traveler would miss out on the rich heritage and spiritual
                  value embedded in these sacred sites.
                </p>
              </div>
            </div>
          </div>

          <div className="third">
            <h2 className="animate-on-scroll">Solution Acception</h2>
            <div className="third-para">
              <div className="actual-third-para">
                <p className="animate-on-scroll">
                  Nothing great can be achieved without potential. He embraced
                  the mindset that "Those who dare to take risks and seize
                  initiative either triumph or learn. Success lies in the
                  boldness of their actions." With this conviction, he first
                  shared his thoughts with a Toloba colleague, seeking his
                  perspective on the idea. The colleague recognized the concept
                  as a promising initiative, and together, they decided to
                  embark on the project. However, they realized that they needed
                  to obtain Raza Mubarak before proceeding further. A few days
                  later, the team member approached the Jamaat Aamil Sahab to
                  seek Raza Mubarak. With utmost respect, he presented the
                  initiative to Aamil Sahab, who acknowledged it as a valuable
                  effort for the Mumineen community, he granted the necessary
                  Raza Mubarak and become the mentor for this project.
                  Interestingly, on the morning of the day he planned to seek
                  Raza Mubarak, just before and after Fajr Namaz, he had a dream
                  in which Syedna Mufaddal Saifuddin Moula (T.U.S.) appeared,
                  seemingly giving him a form of Raza Mubarak. This dream only
                  strengthened his resolve, reassuring him that he was on the
                  right path.
                </p>
              </div>
              <div className="image-third-para animate-on-scroll"></div>
            </div>
          </div>

          <div className="fourth">
            <h2 className="animate-on-scroll">Result</h2>
            <div className="fourth-para">
              <div className="image-fourth-para animate-on-scroll"></div>
              <div className="actual-fourth-para">
                <p className="animate-on-scroll">
                  Inspired by a challenging family trip to sacred sites, one of
                  our team members recognized the need for a comprehensive
                  platform to guide Mumineen on their pilgrimages. The idea was
                  born out of the challenges they faced during their journey,
                  where they lacked crucial information about the sites they
                  visited. Despite initial struggles to communicate the idea and
                  gather support, his unwavering conviction led him to partner
                  with a Toloba colleague who shared his vision. Together, they
                  realized the potential of this initiative, not just as a
                  practical tool but as a means to enhance the spiritual
                  experiences of the Dawoodi Bohra community. Understanding the
                  importance of spiritual approval, they sought and received
                  Raza Mubarak from the Jamaat Aamil Sahab, further reinforced
                  by a dream of Syedna Mufaddal Saifuddin Moula (T.U.S.)
                  granting Raza. With this divine endorsement and a renewed
                  sense of purpose, they embarked on creating an itinerary
                  platform that would not only help Mumineen plan their journeys
                  but also deepen their connection to these sacred sites and
                  their spiritual heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ezy__team3 light">
        <Container>
          <Row className="justify-content-center mb-4 mb-md-5">
            <Col lg={6} xl={5} className="text-center">
              <h2 className="ezy__team3-heading mb-3 animate-on-scroll">
                Our Experts Team
              </h2>
              <p className="ezy__team3-sub-heading mb-0 animate-on-scroll">
                Dedicated professionals with extensive experience, committed to
                delivering excellence and innovation in every project.
              </p>
            </Col>
          </Row>
          <Row className="animate-on-scroll">
            {teamMembers.map((member, i) => (
              <Col md={6} lg={4} className="mt-5" key={i}>
                <TeamMemberItem member={member} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AboutUs;
