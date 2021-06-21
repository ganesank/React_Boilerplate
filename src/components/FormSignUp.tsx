import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Type from '../utils/@types/types';

const FormSignUp: React.FC<Type.FormSignUpComponent> = ({ onSubmit, onSuccessCleanForm }) => {
    const initialState: Type.SignUpForm = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        if (onSuccessCleanForm === 'success') {
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }
    }, [onSuccessCleanForm]);

    const handleSubmit: Type.HandleSubmitFn<{}> = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    const handleChange: Type.HandleChangeFn = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const isFormValid: Type.IsFormValidFn = () => {
        return !(
            form.firstName.trim() !== '' &&
            form.lastName.trim() !== '' &&
            form.email.trim() !== '' &&
            form.password.trim() !== '' &&
            form.confirmPassword.trim() !== '' &&
            form.confirmPassword.trim() === form.password.trim()
        );
    };

    return (
        <div className="form-login-signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-login-signup__input-container">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="form-login-signup__input"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="firstName" className="form-login-signup__label">
                        First Name
                    </label>
                </div>
                <div className="form-login-signup__input-container">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="form-login-signup__input"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastName" className="form-login-signup__label">
                        Last Name
                    </label>
                </div>
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
                    <label htmlFor="Password" className="form-login-signup__label">
                        Password
                    </label>
                </div>
                <div className="form-login-signup__input-container">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="form-login-signup__input"
                        required
                        value={form.confirmPassword}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <label htmlFor="confirmPassword" className="form-login-signup__label">
                        Confirm Password
                    </label>
                </div>
                <div className="form-login-signup__cta">
                    <Link className="btn btn--warning" to="/login">
                        Login
                    </Link>
                    <button
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormSignUp;
