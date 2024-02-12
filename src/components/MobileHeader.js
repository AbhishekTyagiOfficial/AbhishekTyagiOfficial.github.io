import React, { useEffect, useRef } from "react";
import RotatingText from "react-rotating-text";
import logo from "../assets/logo.png";
import { FiX } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function MobileHeader(props) {
  const rotatingTexts = [
    "Web Developer",
    "Professional Coder",
    "Software Tester",
    // "Freelancer (Currently Unavailable)",
  ];
  const interval = 1000; // 1 seconds

  const outsideMenuRef = useRef(null);
  const insideMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outsideMenuRef.current.contains(event.target) &&
        !insideMenuRef.current.contains(event.target)
      ) {
        props.toggleMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props]);

  return (
    <div
      className={`popup-mobile-menu ${props.menuOpen ? "menu-open" : ""}`}
      ref={outsideMenuRef}
    >
      <div className="inner-mobile-menu" ref={insideMenuRef}>
        <div className="menu-header">
          <div className="menu-top">
            <a className="logo" href="index.html">
              <img src={logo} alt="logo" />
            </a>
            <div className="close-menu" onClick={props.toggleMenu}>
              <button className="close-button">
                <i>
                  <FiX />
                </i>
              </button>
            </div>
          </div>
          <p className="description">
            Hi, I'm <span className="highlight-name">Abhishek Tyagi</span>
            <br />
            a <RotatingText items={rotatingTexts} pause={interval} />
          </p>
        </div>
        <div className="menu-content">
          <ul className="primary-menu nav">
            <li className="nav-item">
              <a
                className="nav-link smoth-animation"
                href="#home"
                onClick={props.toggleMenu}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link smoth-animation"
                href="#features"
                onClick={props.toggleMenu}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link smoth-animation"
                href="#portfolio"
                onClick={props.toggleMenu}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link smoth-animation"
                href="#resume"
                onClick={props.toggleMenu}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link smoth-animation"
                href="#clients"
                onClick={props.toggleMenu}
              >
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link smoth-animation"
                href="#pricing"
                onClick={props.toggleMenu}
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link smoth-animation"
                href="#contact"
                onClick={props.toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="social">
          <span className="tiny-title text-uppercase">Find With Me</span>
          <div className="icon-list">
            <a
              href="https://www.linkedin.com/in/Iamabhishektyagi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com/abhinavtyagi2918/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/abhityagi2918/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
