import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import * as type from '../utils/@types/types';

const FormLogin: React.FC<type.FormComponentProps> = ({ onSubmit }) => {
    const initialState: type.LoginForm = {
        email: '',
        password: '',
    };
    const [form, setForm] = useState(initialState);

    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <div className="form-login-signup__container">
            <h2>Login</h2>
            <form onSubmit={handleClick}>
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
                    <label
                        htmlFor="Password"
                        className="form-login-signup__label"
                    >
                        Password
                    </label>
                </div>
                <div className="form-login-signup__cta">
                    <Link className="btn btn--warning" to="/signup">
                        Sign Up
                    </Link>
                    <button className="btn">Login</button>
                </div>
            </form>
        </div>
    );
};

export default FormLogin;
