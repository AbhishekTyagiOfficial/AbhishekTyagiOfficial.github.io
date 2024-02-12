import React from "react";
import ProgessBar from "./ProgessBar";

export default function ProfessionalSkillsTab() {
  return (
    <div
      className="row"
      id="professionalSkillsTab"
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-delay="0"
      data-aos-duration="500"
    >
      <div className="col-lg-6">
        <div className="content">
          <span className="subtitle my-1 text-start">Features</span>
          <h4 className="title my-0 text-start">Web Development Skills</h4>
          <ProgessBar skill="HTML" percentage="85" />
          <ProgessBar skill="CSS" percentage="80" />
          <ProgessBar skill="JavaScript" percentage="50" />
          <ProgessBar skill="ReactJS" percentage="60" />
        </div>
      </div>
      <div className="col-lg-6 mt-5 mt-lg-0">
        <div className="content">
          <span className="subtitle my-1 text-start">Features</span>
          <h4 className="title my-0 text-start">Languages & Others Skills</h4>
          <ProgessBar skill="Java" percentage="65" />
          <ProgessBar skill="C/C++" percentage="45" />
          <ProgessBar skill="mySQL" percentage="50" />

          <ProgessBar skill="Git/GitHub" percentage="85" />
        </div>
      </div>
    </div>
  );
}
