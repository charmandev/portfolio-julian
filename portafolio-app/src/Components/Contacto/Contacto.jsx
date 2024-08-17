import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-section">
      <div className="contacto-header">
        <h1>Contact With Me</h1>
        <p>
          If you have any questions or concerns, please don't hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>
      </div>
      <div className="contacto-container">
        <div className="form-container">
          <form className="contact-form">
            <div className="input-group">
              <label>Your Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="input-group">
              <label>Your Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="input-group">
              <label>Your Message</label>
              <textarea name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="info-container">
          <div className="contact-info">
            <FaEnvelope size={20} className="contact-icon" />
            <span>abusaid7388@gmail.com</span>
          </div>
          <div className="contact-info">
            <FaPhone size={20} className="contact-icon" />
            <span>+8801608797655</span>
          </div>
          <div className="contact-info">
            <FaMapMarkerAlt size={20} className="contact-icon" />
            <span>Middle Badda, Dhaka, Bangladesh - 1212</span>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/julimax"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/juli-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/543543313903"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
