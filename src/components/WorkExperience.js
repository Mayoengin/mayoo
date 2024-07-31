import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/WorkExperience.css";
import headstarterLogo from "../images/bel.jpeg";
import favoriteFlyerLogo from "../images/host.jpg";
import schulichIgniteLogo from "../images/rhu.jpeg";

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <div className="work-experience-container">
      <h2 className="work-experience-header" data-aos="fade-up">
        Work Experience
      </h2>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">Oct 2023 – Jan 2024 </div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={headstarterLogo}
              alt="Headstarter AI Logo"
              className="company-logo"
            />
            <h3>Belsante Soins infirmiers</h3>
          </div>
          <p>Software Developer Intern</p>
          <ul>
            <li>
            Worked as a full-stack mobile application developer with React Native and Flutter.

            </li>
            <li>
            Developed an app with features such as real-time communication, location-based services, and appointment scheduling.
            </li>
            <li>
            Integrated secure payment systems and dynamic databases of sensitive datasets, including medical records, client information, and employee information.            </li>

          </ul>
        </div>
      </div>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">Mar 2021 – Aug 2021</div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={favoriteFlyerLogo}
              alt="Favorite Flyer Inc. Logo"
              className="company-logo"
            />
            <h3>Tripoli Governmental Hospital </h3>
          </div>
          <p>IT Intern</p>
          <ul>
            <li>
            Worked as an IT intern at one of the biggest hospitals in Lebanon.

            </li>
            <li>
            Tasks included troubleshooting system and network problems, diagnosing and solving hardware and software faults.
            </li>
            <li>Ensured routine safety checks.
              
            </li>
          </ul>
        </div>
      </div>
      <div className="work-experience-item" data-aos="fade-up">
        <div className="work-experience-dates">
        Oct 2020 -Feb 2021
        </div>
        <div className="work-experience-content">
          <div className="company-header">
            <img
              src={schulichIgniteLogo}
              alt="Schulich Ignite Logo"
              className="company-logo"
            />
            <h3>Rafic Harriri University</h3>
          </div>
          <p>Programming Intern</p>
          <ul>
            <li>
            Worked with various microcontrollers (STM32, Arduino, Raspberry Pi) and sensors to develop a prototype for automated homes, including a solar panel following the sunlight.
            </li>
            <li>
            Conducted research and prepared documentation about home automation.            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
