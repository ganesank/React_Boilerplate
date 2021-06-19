import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as requestHelper from '../utils/helpers/requestHelper';
import * as alertMsgHelper from '../utils/helpers/alertMsgHelper';
import * as Type from '../utils/@types/types';
import { setMsg } from '../redux/modal';

import AlertMsg from '../components/AlertMsg';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const HTTP: string = PORT === 3001 ? 'http://' : 'https://';
const URL: string = `${HTTP}${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const FormProfile: React.FC = () => {
    const [alertMsg, setAlertMsg] = useState<string[]>([]);
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
                const profile = await requestHelper.getData(`${URL}/profile`);
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
                setAlertMsg(alertMsgHelper.msgArray(error.message));
            }
        })();
    }, []);

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();

        try {
            await requestHelper.updateData(`${URL}/profile`, form);
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
            setAlertMsg(alertMsgHelper.msgArray(error.message));
        }
    };

    const handleDelete: Type.HandleClickFn = (e) => {
        e.preventDefault();
        dispatch(setMsg('Are you sure you want to delete your account?'));
    };

    const handleChange: Type.HandleChangeFn = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const cleanMsg = (): void => {
        setAlertMsg([]);
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
                            autoComplete="password"
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
                            autoComplete="password"
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
                        autoComplete="current-password"
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
            <AlertMsg msgs={alertMsg} msgColor={'danger'} cleanMsg={cleanMsg} icon={'⚠'} iconColor={'danger'} />
        </div>
    );
};

export default FormProfile;
