import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi';

export default function NavBar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // For Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
          <div className="container-fluid align-item-center px-2">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" className="ms-lg-3" />
            </a>
            <button className="navbar-toggler hamburger" type="button" onClick={props.toggleMenu}>
              <i><FiMenu /></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav text-uppercase p-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#clients">Clients</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
