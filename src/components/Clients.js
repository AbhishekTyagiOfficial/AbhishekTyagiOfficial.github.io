import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import clientImgDefault from "../assets/client-default.png";
import ClientsCard from "./ClientsCard";

export default function Clients() {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => <ul id="slider-dots">{dots}</ul>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container section-separator section-gap" id="clients">
      <div className="row">
        <div className="subtitle text-uppercase">What Clients Says</div>
        <h2 className="title">Testimonial</h2>
        <Slider {...settings}>
          <ClientsCard
            clientImg={clientImgDefault}
            clientSubtitle="Review 1"
            clientName="Vishal Tyagi"
            clientDesignation="Front-end Web Developer"
            title="Image Compression API"
            date="Apr 2023"
            review="Abhishek Tyagi's expertise in Node.js has been invaluable to my ReactJS project. He developed an efficient image compression API that seamlessly integrates into my application. The API's performance is outstanding, effectively reducing image sizes without compromising quality. "
          />

          <ClientsCard
            clientImg={clientImgDefault}
            clientSubtitle="Review 2"
            clientName="Shushant Sharma"
            clientDesignation="iOS Developer"
            title="Instagram Reels Downloader API"
            date="Jun 2023"
            review="I had the opportunity to use Abhishek Tyagi's Instagram Reels Download API, and I must say it exceeded my expectations. The API was built using Node.js, and it performed flawlessly during my testing"
          />

          <ClientsCard
            clientImg={clientImgDefault}
            clientSubtitle="Review 3"
            clientName="Chaudhary Enterprises"
            clientDesignation="Money Lender"
            title="Loan Management System"
            date="Mar 2023"
            review="The Loan Management System developed by Abhishek Tyagi has significantly improved our daily operations and made our work much easier. It has streamlined our loan processes, ensuring efficiency and accuracy at every step. From managing customer information to automating payment calculations, this system has truly revolutionized the way we handle our loan portfolio."
          />

          <ClientsCard
            clientImg={clientImgDefault}
            clientSubtitle="Review 4"
            clientName="Dushyant"
            clientDesignation="Owner at Day Dream Library"
            title="Day Dream Library"
            date="Sep 2022"
            review="Abhishek Tyagi is an outstanding web developer who has created an exceptional website for my Day Dream Library. The website is visually captivating, user-friendly, and performs flawlessly. Thanks to Abhishek Tyagi's expertise, our library is now reaching more students than ever before. Highly recommended!"
          />
        </Slider>
      </div>
    </div>
  );
}
