import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPopup } from '../../../redux/popup';
import { loginUser } from '../../../redux/user';
import * as Type from '../../../utils/@types/types';

const UserLoginForm: React.FC = () => {
    const initialState: Type.LoginForm = {
        email: '',
        password: '',
    };
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const handleSubmit: Type.HandleSubmitFn<Type.LoginForm> = (e) => {
        e.preventDefault();
        dispatch(loginUser(form));
    };

    const handleChange: Type.HandleChangeFn = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleResetPassword: Type.HandleClickFn = (e) => {
        e.preventDefault();
        dispatch(
            showPopup({
                title: 'Reset Password',
                message: 'Enter your email to reset your password.',
            })
        );
    };

    const isFormValid: Type.IsFormValidFn = () => {
        return !(form.email.trim() !== '' && form.password.trim() !== '');
    };

    return (
        <div className="user-login-signup-form">
            <form onSubmit={handleSubmit}>
                <div className="user-login-signup-form__input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                    <label htmlFor="email" className="user-login-signup-form__label">
                        Email
                    </label>
                </div>
                <div className="user-login-signup-form__input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <label htmlFor="password" className="user-login-signup-form__label">
                        Password
                    </label>
                </div>
                <div className="user-login-signup-form__cta">
                    <Link className="btn btn--warning" to="/signup">
                        Sign Up
                    </Link>
                    <button
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className="user-login-signup-form__reset-password">
                <a href="/" className="user-login-signup-form__reset-password__link" onClick={handleResetPassword}>
                    Forgot your password?
                </a>
            </div>
        </div>
    );
};

export default UserLoginForm;
