import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMsg } from '../../../redux/msg';
import { showPopup } from '../../../redux/popup';
import * as Type from '../../../utils/@types/types';
import * as requestHelper from '../../../utils/helpers/requestHelper';
import Input from '../../shared/Input';

const PASSWORD_LEN: number = +process.env.REACT_APP_PASSWORD_LEN!;
const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.REACT_APP_ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/users`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const UserSignUpForm: React.FC = () => {
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
                    setMsg({
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );

            if (response.data && response.data.verifyToken)
                dispatch(
                    showPopup({
                        title: 'Verify Email',
                        custom: `${URL}/email/${response.data.verifyToken}`,
                        children: true,
                    })
                );

            dispatch(
                setMsg({
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
                setMsg({
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
        <div className="user-signup-form">
            <form onSubmit={handleSubmit}>
                <div className="user-signup-form__split">
                    <Input
                        placeholder="First Name"
                        label="First Name"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required={true}
                    />
                    <Input
                        placeholder="Last Name"
                        label="Last Name"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <Input
                    placeholder="Email"
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="username"
                    required={true}
                />
                <div className="user-signup-form__split">
                    <Input
                        placeholder="Password"
                        label="Password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        minLength={PASSWORD_LEN}
                        type="password"
                    />
                    <Input
                        placeholder="New Password"
                        label="New Password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                        minLength={PASSWORD_LEN}
                        type="password"
                    />
                </div>
                <div className="user-signup-form__cta">
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

export default UserSignUpForm;
