import React from "react";
import PortfolioMyWebsite from "../assets/portfolio-mywebsite.png";

import PortfolioNewsMonkey from "../assets/portfolio-newsmonkey.png";
import PortfolioTextUtils from "../assets/portfolio-textutils.png";

import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <div
      className="container section-separator section-gap"
      id="portfolio"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="row">
        <span className="subtitle text-uppercase">
          Visit my portfolio and keep your feedback
        </span>
        <h2 className="title">My Portfolio</h2>
        <div className="row content mt-5 mx-auto">
          <PortfolioCard
            portfolioImage={PortfolioMyWebsite}
            category="Development"
            portfolioTitle="My Website"
            portfolioDescription="I have created my own website that showcases detailed information about me. Using ReactJS, I have designed this platform to share my background, experiences, and interests. To enhance communication, I have used EmailJS on the contact page, enabling visitors to submit their details, which are then sent directly to my email for further interaction."
            gitHubLink=""
            portfolioLink="/"
            aosDelay="100"
          />

          <PortfolioCard
            portfolioImage={PortfolioNewsMonkey}
            category="Development"
            portfolioTitle="News Money"
            portfolioDescription="The NewsWave web app is a ReactJS-based application that fetches data from NewsAPI to provide users with up-to-date news articles. It offers a user-friendly interface for browsing and staying informed about various topics."
            gitHubLink="https://github.com/AbhishekTyagiOfficial/newsmonkey"
            portfolioLink=""
            aosDelay="100"
          />

          <PortfolioCard
            portfolioImage={PortfolioTextUtils}
            category="Development"
            portfolioTitle="Text Utils"
            portfolioDescription="TextAlter is a versatile tool that provides various text manipulation features. It includes word counting, character counting, line counting, reading time estimation, and the ability to transform text by converting it to uppercase or lowercase, toggling case, alternating case, capitalizing text, removing extra spaces or lines, copying text, and clearing the text."
            gitHubLink="https://github.com/AbhishekTyagiOfficial/"
            portfolioLink="https://text-modify.web.app//"
            aosDelay="300"
          />
        </div>
      </div>
    </div>
  );
}
