import { FC } from 'react';
import socialMedias from '../../assets/data/socialMedias';

const Footer: FC = () => {
    return (
        <div className="footer">
            <div className="footer__footer-container container">
                <div className="footer__left">
                    <ul className="footer__social-media-list">
                        {socialMedias.map((media, idx) => {
                            return (
                                <li key={`social-media_${idx}`} className="footer__social-media-item tooltip">
                                    <a
                                        href={media.url}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="footer__link"
                                    >
                                        <img src={media.src} alt={media.name} className={media.class} />
                                    </a>
                                    <span className="tooltip__text">{media.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer__middle"></div>
                <div className="footer__right">&copy; Roger Takeshita - 2021. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
