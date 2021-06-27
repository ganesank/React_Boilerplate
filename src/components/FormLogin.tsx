import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/user';
import { showPopup } from '../redux/popup';
import * as Type from '../utils/@types/types';

const FormLogin: React.FC = () => {
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
        <div className="form-login-signup">
            <form onSubmit={handleSubmit}>
                <div className="form-login-signup__input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-login-signup__input"
                        required
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                    <label htmlFor="email" className="form-login-signup__label">
                        Email
                    </label>
                </div>
                <div className="form-login-signup__input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-login-signup__input"
                        required
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <label htmlFor="password" className="form-login-signup__label">
                        Password
                    </label>
                </div>
                <div className="form-login-signup__cta">
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
            <div className="form-login-signup__reset-password">
                <a href="/" className="form-login-signup__reset-password__link" onClick={handleResetPassword}>
                    Forgot your password?
                </a>
            </div>
        </div>
    );
};

export default FormLogin;
