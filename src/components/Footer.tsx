import React from 'react';
import socialMedias from '../assets/data/socialMedias';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer__footer-container container">
                <div className="footer__left">
                    <ul className="footer__social-media-list">
                        {socialMedias.map((media, idx) => {
                            return (
                                <li key={idx} className="footer__social-media-item tooltip">
                                    <a
                                        href={media.url}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer__link"
                                    >
                                        <img src={media.src} alt={media.name} className={media.class} />
                                    </a>
                                    <span className="tooltip__tooltip-text">{media.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer__middle"></div>
                <div className="footer__right">&copy; Roger Takeshita - 2020. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
