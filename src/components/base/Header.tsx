import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/user';
import * as Type from '../../utils/@types';

const Header: FC = () => {
    const user = useSelector((state: RootStateOrAny): Type.User => state.user);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const routes: string[] = ['/api'];
    let removeStyle: string = '';

    const idx: number = routes.indexOf(location.pathname);
    if (idx !== -1) removeStyle = 'remove-style';
    if (visible) removeStyle = '';

    const handleLogout: Type.HandleClickFn = (e) => {
        e!.preventDefault();
        dispatch(logoutUser());
        setVisible(false);
        navigate('/');
    };

    const handleClick: Type.HandleClickFn = () => {
        setVisible((prev) => !prev);
    };

    const menu =
        user && user.firstName ? (
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/" onClick={() => setVisible(false)}>
                        HOME
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/about" onClick={() => setVisible(false)}>
                        ABOUT
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/api" onClick={() => setVisible(false)}>
                        API
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/profile" onClick={() => setVisible(false)}>
                        PROFILE
                    </Link>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/" onClick={handleLogout}>
                        LOG OUT
                    </a>
                </li>
            </ul>
        ) : (
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/" onClick={() => setVisible(false)}>
                        HOME
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/about" onClick={() => setVisible(false)}>
                        ABOUT
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/login" onClick={() => setVisible(false)}>
                        LOGIN
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/signup" onClick={() => setVisible(false)}>
                        SIGN UP
                    </Link>
                </li>
            </ul>
        );

    return (
        <header>
            <div className={`navbar${removeStyle ? ` navbar--${removeStyle}` : ''}`}>
                <div
                    className={`navbar__navbar-container${
                        removeStyle ? ` navbar__navbar-container--${removeStyle}` : ''
                    }`}
                >
                    <div
                        onClick={handleClick}
                        className={visible ? 'navbar__bars navbar__bars--light' : 'navbar__bars navbar__bars--dark'}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="navbar__logo-container">
                        <Link className="navbar__logo" to="/" onClick={() => setVisible(false)}>
                            Roger Takeshita
                        </Link>
                    </div>
                    <div className={`navbar__menu-container ${visible ? 'navbar__menu-container--visible' : ''}`}>
                        {menu}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
