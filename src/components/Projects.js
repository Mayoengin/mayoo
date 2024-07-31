import React, { useState, useRef, useEffect } from "react";
import "../css/Projects.css";

import stockPredictorImage from "../images/stock.png";
import ecgClassification from "../images/ecg.jpg";
import cryptoTrackerImage from "../images/nurslink.PNG";
import employee from "../images/employee.jpeg";
import githubLogo from "../images/github.png";
import game from "../images/game.jpeg";

const projects = [
  {
    title: "Text Adventure Game",
    description:
      "This text adventure game consists of a player that represents a human, who makes certain decisions to achieve their goal. Add controls and different commands to deliver a rich and immersive story.",
    image: game,
    github: "https://github.com/Mayoengin/text_adventure_game",
  },
  {
    title: "Employee Registration App",
    description:
      "Employee Registration App Angular 18.api usage, dynamic entry, inline Editing in Angular",
    image: employee,
    github: "https://github.com/Mayoengin/-Employee-Registration-app",
  },
  {
    title: "Stock Predictor",
    description:
      "Created a stock predictor using Python and Flask for backend framework as well as HTML and CSS for frontend, while also handling real-time data retrieval and LLM model integration.",
    image: stockPredictorImage,
    github: "https://github.com/Mayoengin/stock_prices_prediction",
  },
  {
    title: "ECG Classification Model",
    description:
      "A deep neural network with residual blocks (DNN-RB) for classifying ECG signals into six types of heartbeats. Using the MIT-BIH Arrhythmia dataset, the model inputs segmented ECG signals and outputs 6 types of classifications.",
    image: ecgClassification,
    github: "https://github.com/Mayoengin/ecg_classification",
  },
  {
    title: "Nurse Link Mobile App",
    description:
      "Developing a mobile application that facilitates the connection between the nurses and the people who need them at home on a regular basis. (Uber for nurses).",
    image: cryptoTrackerImage,
    github: "https://github.com/Mayoengin/nurslink_1",
  },
];

const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const projectsWrapperRef = useRef(null);

  const scrollLeft = () => {
    setScrollPosition((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getTransform = () => {
    const cardWidth = 320; // Card width + margin
    return `translateX(-${scrollPosition * cardWidth}px)`;
  };

  useEffect(() => {
    projectsWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
    projectsWrapperRef.current.style.transform = getTransform();
  }, [scrollPosition, getTransform]);

  return (
    <div className="projects-container">
      <h2 className="projects-header">My Portfolio</h2>
      <h3 className="projects-subheader">Awesome Projects</h3>
      <div className="projects-wrapper">
        <button className="scroll-button scroll-button-left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="projects-grid" ref={projectsWrapperRef}>
          {projects.concat(projects.slice(0, 3)).map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <img src={githubLogo} alt="GitHub" className="github-icon" />
                </a>
              </div>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button scroll-button-right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
