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
    <div className="contacto-container">
      <div className="form-container">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or concerns, please don't hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>
        <form className="contact-form">
          <label>
            Your Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Your Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Your Message:
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="info-container">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <FaEnvelope size={24} className="contact-icon" />
          <a href="mailto:abusaid7388@gmail.com">abusaid7388@gmail.com</a>
        </div>
        <div className="contact-info">
          <FaPhone size={24} className="contact-icon" />
          <a href="tel:+8801608797655">+8801608797655</a>
        </div>
        <div className="contact-info">
          <FaMapMarkerAlt size={24} className="contact-icon" />
          <p>Middle Badda, Dhaka, Bangladesh - 1212</p>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://wa.me/+8801608797655"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
