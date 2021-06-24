import React, { useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import * as requestHelper from '../utils/helpers/requestHelper';
import { Link } from 'react-router-dom';
import * as Type from '../utils/@types/types';

import AlertMsg from '../components/shared/AlertMsg';
import { setMsgs } from '../redux/messages';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/users`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const FormSignUp: React.FC = () => {
    const initialState: Type.SignUpForm = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [form, setForm] = useState(initialState);
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const dispatch = useDispatch();

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();
        try {
            const response = await requestHelper.signUpUser(`${URL}/signup`, form);
            if (!response.ok)
                return dispatch(
                    setMsgs({
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );

            if (response.data && response.data.verifyToken) console.log(`${URL}/email/${response.data.verifyToken}`);

            dispatch(
                setMsgs({
                    msgs: [response.data.message],
                    msgColor: 'success',
                    icon: '✓',
                    iconColor: 'success',
                })
            );
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            dispatch(
                setMsgs({
                    msgs: [error.message],
                    msgColor: 'danger',
                    icon: '⚠',
                    iconColor: 'danger',
                })
            );
        }
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
            {msgs.msgs.length > 0 && <AlertMsg />}
        </div>
    );
};

export default FormSignUp;
