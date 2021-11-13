import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/user';
import * as Type from '../../utils/@types';

const Navbar: FC = () => {
    const user = useSelector((state: RootStateOrAny): Type.User => state.user);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const routes: string[] = ['/api'];
    let removeShadow: string = '';

    const idx: number = routes.indexOf(location.pathname);
    console.log(idx);
    if (idx !== -1) removeShadow = 'remove-shadow';
    if (visible) removeShadow = '';

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
            <ul className="nav__list">
                <li className="nav__item">
                    <Link className="nav__link" to="/" onClick={() => setVisible(false)}>
                        HOME
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/about" onClick={() => setVisible(false)}>
                        ABOUT
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/api" onClick={() => setVisible(false)}>
                        API
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/profile" onClick={() => setVisible(false)}>
                        PROFILE
                    </Link>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/" onClick={handleLogout}>
                        LOG OUT
                    </a>
                </li>
            </ul>
        ) : (
            <ul className="nav__list">
                <li className="nav__item">
                    <Link className="nav__link" to="/" onClick={() => setVisible(false)}>
                        HOME
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/about" onClick={() => setVisible(false)}>
                        ABOUT
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/login" onClick={() => setVisible(false)}>
                        LOGIN
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/signup" onClick={() => setVisible(false)}>
                        SIGN UP
                    </Link>
                </li>
            </ul>
        );

    const navClass: string = removeShadow ? `nav nav--${removeShadow}` : 'nav';
    const navWrapClass: string = removeShadow ? `nav__wrap nav__wrap--${removeShadow}` : 'nav__wrap';

    return (
        <nav className={navClass}>
            <div className={navWrapClass}>
                <div
                    onClick={handleClick}
                    className={visible ? 'nav__bars nav__bars--light' : 'nav__bars nav__bars--dark'}
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="nav__logo-wrap">
                    <Link className="nav__logo" to="/" onClick={() => setVisible(false)}>
                        Roger Takeshita
                    </Link>
                </div>
                <div className={`nav__menu-wrap ${visible ? 'nav__menu-wrap--visible' : ''}`}>{menu}</div>
            </div>
        </nav>
    );
};

export default Navbar;
