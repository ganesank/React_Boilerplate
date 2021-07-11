import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPopup } from '../../../redux/popup';
import { loginUser } from '../../../redux/user';
import * as Type from '../../../utils/@types/types';
import Input from '../../shared/Input';

const PASSWORD_LEN: number = +process.env.REACT_APP_PASSWORD_LEN!;

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
                children: true,
            })
        );
    };

    const isFormValid: Type.IsFormValidFn = () => {
        return !(form.email.trim() !== '' && form.password.trim() !== '');
    };

    return (
        <div className="user-login-form">
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Email"
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="username"
                    required={true}
                />
                <Input
                    placeholder="Password"
                    label="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="password"
                    required={true}
                    minLength={PASSWORD_LEN}
                    type="password"
                />
                <div className="user-login-form__cta">
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
            <div className="user-login-form__reset-password">
                <a href="/" className="user-login-form__reset-password__link" onClick={handleResetPassword}>
                    Forgot your password?
                </a>
            </div>
        </div>
    );
};

export default UserLoginForm;
