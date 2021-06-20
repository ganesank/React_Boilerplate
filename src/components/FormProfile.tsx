import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as requestHelper from '../utils/helpers/requestHelper';
import * as Type from '../utils/@types/types';
import { setModalMsg } from '../redux/modal';
import { setMsgs } from '../redux/messages';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const HTTP: string = PORT === 3001 ? 'http://' : 'https://';
const URL: string = `${HTTP}${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const FormProfile: React.FC = () => {
    const initialState: Type.ProfileForm = {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        newPassword: '',
        confirmNewPassword: '',
    };
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const response = await requestHelper.getData(`${URL}/profile`);
                if (!response.ok)
                    return dispatch(
                        setMsgs({
                            msgs: [response.error.message],
                            msgColor: 'danger',
                            icon: '⚠',
                            iconColor: 'danger',
                        })
                    );

                setForm((prev) => {
                    return {
                        ...prev,
                        _id: response.data._id,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                    };
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
        })();
    }, [dispatch, setForm]);

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();

        try {
            const response = await requestHelper.updateData(`${URL}/profile`, form);
            if (!response.ok) {
                const errors = Object.keys(response.error).map((key) => {
                    return response.error[key];
                });
                return dispatch(
                    setMsgs({
                        msgs: errors,
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );
            }

            setForm((prev) => {
                return {
                    ...prev,
                    newPassword: '',
                    confirmNewPassword: '',
                };
            });
            alert('Your profile has been updated!');
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

    const handleDelete: Type.HandleClickFn = (e) => {
        e.preventDefault();
        dispatch(setModalMsg('Are you sure you want to delete your account?'));
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
            form.newPassword.trim() === form.confirmNewPassword.trim()
        );
    };

    return (
        <div className="form-profile__container">
            <h2>PROFILE</h2>
            <form onSubmit={handleSubmit}>
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
                        <label htmlFor="firstName" className="form-profile__label">
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
                        <label htmlFor="lastName" className="form-profile__label">
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
                            autoComplete="new-password"
                        />
                        <label htmlFor="newPassword" className="form-profile__label">
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
                            autoComplete="new-password"
                        />
                        <label htmlFor="confirmNewPassword" className="form-profile__label">
                            Confirm New Password
                        </label>
                    </div>
                </div>
                <div className="form-profile__cta">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-profile__input"
                        minLength={4}
                        required
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="password"
                    />
                    <button
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Update
                    </button>
                </div>
            </form>
            <div className="form-profile__delete">
                <a href="/" className="form-profile__delete-link" onClick={handleDelete}>
                    Delete Account
                </a>
            </div>
        </div>
    );
};

export default FormProfile;
