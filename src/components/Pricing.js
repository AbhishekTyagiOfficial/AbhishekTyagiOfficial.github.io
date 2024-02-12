import React, { useState } from 'react';
import PricingCard from './PricingCard';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabs = () => {
    const tabs = ['Static', 'Standard', 'Premium'];

    return tabs.map((tab, index) => (
      <li
        key={index}
        className="nav-item"
        onClick={() => handleTabClick(index)}
      >
        <h6 className={`nav-link ${activeTab === index ? 'active' : ''} ${index === 1 && activeTab !== 1 ? 'recommended' : ''}`}>{tab}</h6>
      </li>
    ));
  };

  return (
    <div className="container section-separator section-gap" id="pricing">
      <div className="row flex-column flex-xl-row justify-content-xl-between">
        <div className="col-lg-4">
          <div className="subtitle text-uppercase">Pricing</div>
          <div className="title">My Pricing</div>
        </div>
        <div className="col-xl-7 col-12 mt-5 mt-xl-0">
          <div className="tabs">
            <ul className="nav nav-tabs d-flex flex-column flex-sm-row">
              {renderTabs()}
            </ul>
            <div className="tab-content">
              {activeTab === 0 && <PricingCard title='Static Page Service' subtitle='Streamlined Information Presentation' rate='₹2000' description='Basic web pages that convey information or showcase content without dynamic or interactive elements.' featuresArray={[
                'Custom Designed Static Pages',
                'Responsive Layout',
                'Fast Loading Times',
                'Clear And Concise Content',
                'Cross-Browser Compatibility',
                'Maintenance And Updates'
              ]} delivery="2 Days" plan="Static" />}

              {activeTab === 1 && <PricingCard title='Standard Dynamic Site Service' subtitle='Engaging Interactions and Visual Enhancements' rate='₹12,000' description='Enhanced websites with dynamic elements like animating features and interactive components for a more engaging user experience.' featuresArray={[
                'Custom Development With Dynamic Features',
                'Animating Elements',
                'Rotating Text Or Images',
                'Interactive Navigation',
                'Dynamic Content Generation',
                'Interactive Elements',
                'Integration Of External APIs Or Services',
                'Ongoing Maintenance And Support'
              ]} delivery="15 Days" plan="Standard" />}

              {activeTab === 2 && <PricingCard title='Premium Dynamic Site Service' subtitle='Advanced Functionality and Personalized Solutions' rate='₹25,000' description='Advanced websites with features such as database integration, content management system (CMS), user login, e-commerce functionality, and enhanced security measures for more complex requirements.' featuresArray={[
                'Custom Development With Advanced Features',
                'Database Integration',
                'Content Management System',
                'User Login And Authentication',
                'Personalization And Customization Options',
                'Integration With Payment Gateways',
                'Enhanced Security Measures',
                'Maintenance, Support, And Updates'
              ]} delivery="30 Days" plan="Premium" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
