import React from "react";
import footerImg from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="container section-separator section-gap" id="footer">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-area text-center">
            <div className="logo">
              <a href="/">
                <img src={footerImg} alt="" />
              </a>
            </div>
            <div className="description mt-4">
              &copy; 2023. All rights reserved by{" "}
              <a target="_blank" href="/">
                Abhishek Tyagi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
