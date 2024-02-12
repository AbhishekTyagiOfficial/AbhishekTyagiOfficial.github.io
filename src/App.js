import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Home from "./components/Home";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
// import Clients from './components/Clients';
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menuOpen]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <MobileHeader menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      {/* <Clients /> */}
      <Pricing />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
