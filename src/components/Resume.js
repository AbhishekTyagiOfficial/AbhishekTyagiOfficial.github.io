import React, { useState } from "react";
import EducationTab from "./EducationTab";
import ProfessionalSkillsTab from "./ProfessionalSkillsTab";
import ExperienceTab from "./ExperienceTab";
import ProjectsTab from "./ProjectsTab";

export default function Resume() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabs = () => {
    const tabs = ["Education", "Experience", "Professional Skills", "Projects"];

    return tabs.map((tab, index) => (
      <li
        key={index}
        className="nav-item"
        onClick={() => handleTabClick(index)}
      >
        <h6 className={`nav-link ${activeTab === index ? "active" : ""}`}>
          {tab}
        </h6>
      </li>
    ));
  };

  return (
    <div className="container section-separator section-gap pb-0" id="resume">
      <div className="row">
        <span className="subtitle text-uppercase">1+ Years Of Experience</span>
        <h2 className="title">My Resume</h2>
        <div className="tabs my-5">
          <ul className="nav nav-tabs d-flex flex-column flex-md-row">
            {renderTabs()}
          </ul>
          <div className="tab-content my-5">
            {activeTab === 0 && <EducationTab />}
            {activeTab === 1 && <ExperienceTab />}
            {activeTab === 2 && <ProfessionalSkillsTab />}
            {activeTab === 3 && <ProjectsTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
