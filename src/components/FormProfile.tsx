import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import * as type from '../utils/@types/types';
import * as requestService from '../utils/api/requestService';

import ErrorMsg from '../components/ErrorMsg';

const PORT = +process.env.REACT_APP_BACKEND_PORT!;
const HTTP = PORT! === 3001 ? 'http://' : 'https://';
const URL = `${HTTP}${
    process.env.REACT_APP_BACKEND_URL!.split(':')[0]
}:${PORT}/api/users`;

const FormProfile: React.FC = () => {
    const [error, setError] = useState<string>('');
    const initialState: type.ProfileForm = {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        newPassword: '',
        confirmNewPassword: '',
    };
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profile = await requestService.getData(`${URL}/profile`);
                setForm((prev) => {
                    return {
                        ...prev,
                        _id: profile._id,
                        firstName: profile.firstName,
                        lastName: profile.lastName,
                        email: profile.email,
                    };
                });
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await requestService.updateData(`${URL}/profile`, form);
            setForm((prev) => {
                return {
                    ...prev,
                    password: '',
                    newPassword: '',
                    confirmNewPassword: '',
                };
            });
            alert('Your profile has been updated!');
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            let errorMsg = '';
            for (const key in errorObj) {
                errorMsg += `${key}: ${errorObj[key]} `;
            }
            setError(errorMsg);
        }
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

    const cleanErrorMsg = (): void => {
        setError('');
    };

    const isFormValid = (): boolean => {
        return !(
            form.firstName.trim() !== '' &&
            form.lastName.trim() !== '' &&
            form.email.trim() !== '' &&
            form.password.trim() !== '' &&
            form.newPassword.trim() === form.confirmNewPassword.trim()
        );
    };

    return (
        <div className="form-profile__container">
            <h2>PROFILE</h2>
            <form onSubmit={handleClick}>
                <div className="form-profile__split">
                    <div className="form-profile__input-container">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="form-profile__input"
                            required
                            value={form.firstName}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="firstName"
                            className="form-profile__label"
                        >
                            First Name
                        </label>
                    </div>
                    <div className="form-profile__input-container">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="form-profile__input"
                            required
                            value={form.lastName}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="lastName"
                            className="form-profile__label"
                        >
                            Last Name
                        </label>
                    </div>
                </div>
                <div className="form-profile__input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-profile__input"
                        required
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                    <label htmlFor="email" className="form-profile__label">
                        Email
                    </label>
                </div>
                <div className="form-profile__split">
                    <div className="form-profile__input-container">
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                            className="form-profile__input"
                            minLength={4}
                            value={form.newPassword}
                            onChange={handleChange}
                            autoComplete="password"
                        />
                        <label
                            htmlFor="newPassword"
                            className="form-profile__label"
                        >
                            New Password
                        </label>
                    </div>
                    <div className="form-profile__input-container">
                        <input
                            type="password"
                            name="confirmNewPassword"
                            placeholder="Confirm New Password"
                            className="form-profile__input"
                            minLength={4}
                            value={form.confirmNewPassword}
                            onChange={handleChange}
                            autoComplete="password"
                        />
                        <label
                            htmlFor="confirmNewPassword"
                            className="form-profile__label"
                        >
                            Confirm New Password
                        </label>
                    </div>
                </div>
                <div className="form-profile__cta">
                    <div className="form-profile__input-container">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-profile__input"
                            minLength={4}
                            required
                            value={form.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        <label
                            htmlFor="password"
                            className="form-profile__label"
                        >
                            Password
                        </label>
                    </div>
                    <button
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Update
                    </button>
                </div>
            </form>
            <ErrorMsg errorMsg={error} cleanErrorMsg={cleanErrorMsg} />
        </div>
    );
};

export default FormProfile;
