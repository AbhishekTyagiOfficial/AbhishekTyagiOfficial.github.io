import React from "react";
import RotatingText from "react-rotating-text";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";
import main from "../assets/main.png";

export default function Home() {
  const rotatingTexts = [
    "Web Developer",
    "Professional Coder",
    "Software Tester",
    // "Freelancer (Currently Unavailable)",
  ];
  const interval = 1000; // 1 seconds

  return (
    <div className="container" id="home">
      <div className="row flex-column-reverse flex-lg-row">
        <div className="content col-lg-7 pe-lg-5">
          <span className="subtitle text-uppercase">Welcome To My World</span>
          <h1 className="title">
            <span className="text-dark">Hi, I'm</span>{" "}
            <span>Abhishek Tyagi</span>
          </h1>
          <h2 className="rotating-text text-dark">
            a{" "}
            <span>
              <RotatingText items={rotatingTexts} pause={interval} />
            </span>
          </h2>
          <p className="description">
            I specialize in designing and developing modern, responsive websites
            using ReactJS. With a strong passion and unwavering dedication to my
            work, I bring a high level of commitment and professionalism to
            every project.
          </p>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-12 col-sm-6 social">
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
            <div className="col-12 col-sm-6 skills mt-5 mt-sm-0">
              <span className="tiny-title text-uppercase">Best Skill On</span>
              <ul className="icon-list">
                <li className="icon">
                  <FaJava />
                </li>
                <li className="icon">
                  <FaJs />
                </li>
                <li className="icon">
                  <FaReact />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="thumbnail col-lg-5">
          <div className="text-center">
            <img src={main} alt="" style={{ width: "533px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
