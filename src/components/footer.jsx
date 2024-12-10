import React from "react";
import { FaInstagram, FaGithub, FaLinkedin  } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/terrencethe1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/terrence-johnson-3033b3341" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
