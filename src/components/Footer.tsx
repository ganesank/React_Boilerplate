import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer__footer-container container">
                <div className="footer__left">
                    <a
                        href="https://www.linkedin.com/in/roger-takeshita/"
                        className="footer__link"
                        target="_blank"
                    >
                        &copy; Roger Takeshita - 2020. All rights reserved.
                    </a>
                </div>
                <div className="footer__middle">
                    <a
                        href="https://github.com/Roger-Takeshita/React_Boilerplate"
                        className="footer__link"
                        target="_blank"
                    >
                        REPO
                    </a>
                </div>
                <div className="footer__right">
                    This website was developed using React.js, Redux Thunk,
                    JavaScript/TypeScript, CSS/SASS, and BEM.
                </div>
            </div>
        </div>
    );
};

export default Footer;
