import React from "react";
import ProjectCard from "./ProjectCard";
import PortfolioMyWebsite from "../assets/portfolio-mywebsite.png";

import PortfolioNewsMonkey from "../assets/portfolio-newsmonkey.png";
import PortfolioTextUtils from "../assets/portfolio-textutils.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function ProjectsTab() {
  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-prev-arrow" onClick={onClick}>
      <i>
        <FiArrowLeft />
      </i>
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-next-arrow" onClick={onClick}>
      <i>
        <FiArrowRight />
      </i>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => <ul id="slider-dots">{dots}</ul>,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      className="row"
      id="projectsTab"
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-delay="0"
      data-aos-duration="500"
    >
      <Slider {...settings}>
        <ProjectCard
          portfolioImage={PortfolioMyWebsite}
          category="Development"
          portfolioTitle="My Website"
          portfolioDescription="I have created my own website that showcases detailed information about me. Using ReactJS, I have designed this platform to share my background, experiences, and interests. To enhance communication, I have used EmailJS on the contact page, enabling visitors to submit their details, which are then sent directly to my email for further interaction."
          gitHubLink=""
          portfolioLink="/"
          aosDelay="100"
        />

        <ProjectCard
          portfolioImage={PortfolioNewsMonkey}
          category="Development"
          portfolioTitle="News Monkey"
          portfolioDescription="The NewsWave web app is a ReactJS-based application that fetches data from NewsAPI to provide users with up-to-date news articles. It offers a user-friendly interface for browsing and staying informed about various topics."
          gitHubLink="https://github.com/AbhishekTyagiOfficial/newsmonkey"
          portfolioLink=""
          aosDelay="100"
        />

        <ProjectCard
          portfolioImage={PortfolioTextUtils}
          category="Development"
          portfolioTitle="Text Utils"
          portfolioDescription="TextUtils is a versatile tool that provides various text manipulation features. It includes word counting, character counting, line counting, reading time estimation, and the ability to transform text by converting it to uppercase or lowercase, toggling case, alternating case, capitalizing text, removing extra spaces or lines, copying text, and clearing the text."
          gitHubLink="https://github.com/AbhishekTyagiOfficial/TextUtils"
          portfolioLink="https://text-modify.web.app/"
          aosDelay="300"
        />
      </Slider>
    </div>
  );
}
