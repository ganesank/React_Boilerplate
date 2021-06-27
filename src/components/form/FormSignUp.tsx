import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMsgs } from '../../redux/messages';
import { showPopup } from '../../redux/popup';
import * as requestHelper from '../../utils/helpers/requestHelper';
import { Link } from 'react-router-dom';
import * as Type from '../../utils/@types/types';

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

            if (response.data && response.data.verifyToken)
                dispatch(showPopup({ title: 'Verify Email', custom: `${URL}/email/${response.data.verifyToken}` }));

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
            <form onSubmit={handleSubmit}>
                <div className="form-login-signup__input-container">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="form-login-signup__input-container">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="form-login-signup__input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-login-signup__input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <label htmlFor="Password">Password</label>
                </div>
                <div className="form-login-signup__input-container">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        value={form.confirmPassword}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
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
