import React, { useEffect } from "react";
import "./css/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
      once: false,
    });
    AOS.refresh(); // Ensure AOS refreshes after initializing
  }, []);

  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <Contact />
      <section id="skills">
        <TechnicalSkills />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="portfolio">
        <Projects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
