import React from "react";
import HomeButton from "./HomeButton";
import linkedinLogo from "../images/linkedin.png";
import emailLogo from "../images/email.png";
import githubLogo from "../images/github.png";
import "../css/nav.css";
// import Intro from "./Intro";
// import About from "./About";
// import Contact from "./Contact";
// import TechnicalSkills from "./TechnicalSkills";
// import WorkExperience from "./WorkExperience";
// import Projects from "./Projects";
// import ContactMe from "./ContactMe";

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="home-button-container">
          <HomeButton />
        </li>
        <div className="nav-items-container">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </div>
        <div className="nav-icons-container">
          <li>
            <a
              href="https://www.linkedin.com/in/mayo-engin-75154a205/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="nav-icon" />
            </a>
          </li>
          <li>
            <a href="mailto:Mayo.engin@gmail.com">
              <img src={emailLogo} alt="Email" className="nav-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Mayoengin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" className="nav-icon" />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
