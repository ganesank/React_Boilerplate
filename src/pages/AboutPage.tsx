import React from 'react';

import RogerTakeshita from '../assets/images/profile_pic.jpeg';
import technologies from '../assets/data/technologies';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page container">
            <h1>ABOUT ME</h1>
            <img
                className="about-page__picture"
                src={RogerTakeshita}
                alt="Roger Takeshita"
            />
            <h2 className="about-page__text">Roger Takeshita</h2>
            <h4 className="about-page__text">Full-Stack Developer</h4>
            <div className="about-page__technologies">
                {technologies.map((tech, idx) => {
                    return (
                        <div key={idx} className="about-page__tech-container">
                            <img
                                className={tech.class}
                                src={tech.src}
                                alt="Tech"
                            />
                            <p className="about-page__tech-label">
                                {tech.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutPage;
