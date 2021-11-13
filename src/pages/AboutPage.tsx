import { FC } from 'react';
import technologies from '../assets/data/technologies';
import RogerTakeshita from '../assets/images/profile.jpeg';

const AboutPage: FC = () => {
    return (
        <div className="about-page">
            <div className="container">
                <h1>ABOUT ME</h1>
                <img className="about-page__picture" src={RogerTakeshita} alt="Roger Takeshita" />
                <h2 className="about-page__text">Roger Takeshita</h2>
                <h4 className="about-page__text">Full-Stack Developer</h4>
                <div className="about-page__technologies">
                    {technologies.map((tech, idx) => {
                        return (
                            <div key={`tech_${idx}`} className="about-page__tech-wrap">
                                <img className={tech.class} src={tech.src} alt="Tech" />
                                <p className="about-page__tech-label">{tech.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
