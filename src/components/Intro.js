import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../images/profile-pic.PNG";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="image-and-buttons">
        <img src={profileImage} alt="Profile" className="profile-pic" />
      </div>
      <div>
        <h1 className="intro-text">
          Hi, my name is <span className="highlight">Mayo</span>
        </h1>
        <h2 className="typewriter-container">
          and I'm a{" "}
          <Typewriter
            words={[
              " Software Developer 💻",
              " Tech Enthusiast 📱",
              " Problem Solver 🧠",
              " Lifelong Learner 📚",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
    </div>
  );
};

export default Intro;
