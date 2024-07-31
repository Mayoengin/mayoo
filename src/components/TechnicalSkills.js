import React from "react";
import "../css/TechnicalSkills.css"; // Ensure the correct path

// Import your images
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import jsIcon from "../images/javascript.png";
import tsIcon from "../images/typescript.png";
import reactIcon from "../images/react.png";
import nodeIcon from "../images/node.png";
import expressIcon from "../images/express.png";
import mongodbIcon from "../images/mongodb.png";
import pythonIcon from "../images/python.png";
import apiIcon from "../images/api.png";
import tailwindIcon from "../images/tailwind.png";
import bootstrapIcon from "../images/bootstrap.png";
import figmaIcon from "../images/figma.png";
import gitIcon from "../images/git.png";
import ang from "../images/angular.png";
const TechnicalSkills = () => {
  return (
    <div className="technical-skills-container" data-aos="fade-right">
      <h2 className="technical-skills-header">Technical Skills</h2>
      <div className="skills-cards-container">
        <div className="skills-card" data-aos="fade-right">
          <h3 className="skills-card-header">Frontend</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={htmlIcon} alt="HTML" className="skill-icon" /> HTML
            </div>
            <div className="skill-item">
              <img src={cssIcon} alt="CSS" className="skill-icon" /> CSS
            </div>
            <div className="skill-item">
              <img src={jsIcon} alt="JavaScript" className="skill-icon" />{" "}
              JavaScript
            </div>
            <div className="skill-item">
              <img src={tsIcon} alt="TypeScript" className="skill-icon" />{" "}
              TypeScript
            </div>
            <div className="skill-item">
              <img src={reactIcon} alt="React" className="skill-icon" /> React
            </div>
            <div className="skill-item">
              <img src={ang} alt="angular" className="skill-icon" /> Angular
            </div>
          </div>
        </div>
        <div className="skills-card" data-aos="fade-right">
          <h3 className="skills-card-header">Backend</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={nodeIcon} alt="Node" className="skill-icon" /> Node
            </div>
            <div className="skill-item">
              <img src={expressIcon} alt="Express" className="skill-icon" />{" "}
              Express
            </div>
            <div className="skill-item">
              <img src={mongodbIcon} alt="MongoDB" className="skill-icon" />{" "}
              MongoDB
            </div>
            <div className="skill-item">
              <img src={pythonIcon} alt="Python" className="skill-icon" />{" "}
              Python
            </div>
            <div className="skill-item">
              <img src={apiIcon} alt="API" className="skill-icon" /> API
            </div>
          </div>
        </div>
        <div className="skills-card" data-aos="fade-right">
          <h3 className="skills-card-header">Tools & Frameworks</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={tailwindIcon} alt="Tailwind" className="skill-icon" />{" "}
              Tailwind
            </div>
            <div className="skill-item">
              <img src={bootstrapIcon} alt="Bootstrap" className="skill-icon" />{" "}
              Bootstrap
            </div>
            <div className="skill-item">
              <img src={figmaIcon} alt="Figma" className="skill-icon" /> Figma
            </div>
            <div className="skill-item">
              <img src={gitIcon} alt="Git" className="skill-icon" /> Git
            </div>
          </div>
        </div>
      </div>
      <div className="experience-container" data-aos="fade-right">
        <div className="experience-item">
          <h3>2</h3>
          <p>Years Experience</p>
        </div>
        <div className="experience-item">
          <h3>15+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="experience-item">
          <h3>4</h3>
          <p>Teams Managed</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
