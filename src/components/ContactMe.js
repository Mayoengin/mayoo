import React, { useEffect } from "react";
import "../css/ContactMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import linkedinIcon from "../images/linkedin.png";
import githubIcon from "../images/github.png";
import emailIcon from "../images/email.png";
import phoneIcon from "../images/phone-call.png";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="contactme-container">
      <h2 className="contactme-header">GET IN TOUCH</h2>
      <h1 className="contactme-title">Contact Me</h1>

      <div className="contactme-content" data-aos="fade-right">
        <div className="contactme-info">
          <h2>Just Say Hi</h2>
          <p>
            I am actively seeking new opportunities. If you have any questions or are interested in working with
            me, please feel free to reach out!
          </p>

          <div className="contactme-details">
            <div className="contactme-item">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="contactme-icon"
              />
              <span>Mayo</span>
            </div>
            <div className="contactme-item">
              <img src={emailIcon} alt="Email" className="contactme-icon" />
              <span>Mayo.engin@gmail.com</span>
            </div>
            <div className="contactme-item">
              <img src={phoneIcon} alt="Phone" className="contactme-icon" />
              <span>+32 471 42 67 04</span>
            </div>
          </div>

          <div className="contactme-social-links">
            <a
              href="https://www.linkedin.com/in/mayo-engin-75154a205/"
              target="_blank"
              rel="noopener noreferrer"
              className="contactme-social-icon"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Mayoengin"
              target="_blank"
              rel="noopener noreferrer"
              className="contactme-social-icon"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="mailto:Mayo.engin@gmail.com"
              className="contactme-social-icon"
            >
              <img src={emailIcon} alt="Email" />
            </a>
          </div>
        </div>

        <div className="contactme-form">
          <h2>Get In Touch</h2>
          <form>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="contactme-copyright">
        <p>
          &copy; {new Date().getFullYear()} Mayo
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
