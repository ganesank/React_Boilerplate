import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutUser } from '../../redux/user';
import * as Type from '../../utils/@types/types';

const Navbar: React.FC = () => {
    const user = useSelector((state: RootStateOrAny) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout: Type.HandleClickFn = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        history.push('/');
    };

    const menu =
        user && user.firstName ? (
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/about">
                        About
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/profile">
                        Profile
                    </Link>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/" onClick={handleLogout}>
                        Log Out
                    </a>
                </li>
            </ul>
        ) : (
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/about">
                        About
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/signup">
                        Sign Up
                    </Link>
                </li>
            </ul>
        );

    return (
        <div className="navbar">
            <Link className="navbar__logo" to="/">
                Roger Takeshita
            </Link>
            <div className="navbar__menu-container">{menu}</div>
        </div>
    );
};

export default Navbar;
