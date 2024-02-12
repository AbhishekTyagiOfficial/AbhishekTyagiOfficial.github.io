import React from 'react';
import FeaturesCard from './FeaturesCard';
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';
import { VscDebug } from 'react-icons/vsc';
import { SiFuturelearn } from 'react-icons/si';

export default function Features() {
    return (
        <div className="container section-separator section-gap" id="features" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
                <span className="subtitle text-uppercase">Features</span>
                <h2 className="title">What I Do</h2>
                <div className="row content mt-5 mx-auto">

                    <FeaturesCard icon={<FaReact />} title="Front-end Development" description="I am proficient in creating the user-facing portion of websites or web applications, including the layout, design, and interactive features. This involves working with HTML, CSS, JavaScript frameworks like React, and responsive design principles to ensure the website functions well across different devices." aosDelay="100"/>

                    <FeaturesCard icon={<FaNodeJs />} title="Back-end Development" description="I can work on the server-side of websites or web applications. I have the ability to build server logic, handle database interactions, and create APIs using technologies like Node.js." aosDelay="300"/>

                    <FeaturesCard icon={<FaDatabase />} title="Database Management" description="I have experience working with databases to store and retrieve data for websites or applications. I possess knowledge of various database management systems such as MySQL and MongoDB, and can proficiently write queries to manipulate and retrieve data as needed." aosDelay="500"/>

                    <FeaturesCard icon={<FaGithub />} title="Version Control Systems" description="As a web developer, I am familiar with version control systems and regularly utilize tools like Git to track changes, collaborate with team members, and effectively manage code repositories." aosDelay="100"/>

                    <FeaturesCard icon={<VscDebug />} title="Testing and Debugging" description="In terms of testing and debugging, I possess skills in identifying and resolving issues in websites or applications. I am experienced in utilizing tools like Chrome DevTools, browser extensions, and various testing frameworks to ensure optimal functionality and performance of my web projects." aosDelay="300"/>

                    <FeaturesCard icon={<SiFuturelearn />} title="Continuous Learning" description="Continuous learning is an integral part of my journey as a web developer. I have a strong passion for staying updated with the latest technologies, trends, and best practices in the rapidly evolving field of web development." aosDelay="500"/>

                </div>
            </div>
        </div>
    );
}