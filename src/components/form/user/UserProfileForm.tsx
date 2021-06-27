import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMsgs } from '../../../redux/messages';
import { showPopup } from '../../../redux/popup';
import * as Type from '../../../utils/@types/types';
import * as requestHelper from '../../../utils/helpers/requestHelper';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/users`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const UserProfileForm: React.FC = () => {
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

            if (response.data && response.data.verifyToken) console.log(`${URL}/email/${response.data.verifyToken}`);

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
        dispatch(
            showPopup({ visible: true, title: 'Delete Acc', message: 'Are you sure you want to delete your account?' })
        );
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
        <div className="user-profile-form">
            <form onSubmit={handleSubmit}>
                <div className="user-profile-form__split">
                    <div className="user-profile-form__input-container">
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
                    <div className="user-profile-form__input-container">
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
                </div>
                <div className="user-profile-form__input-container">
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
                <div className="user-profile-form__split">
                    <div className="user-profile-form__input-container">
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New Password"
                            minLength={4}
                            value={form.newPassword}
                            onChange={handleChange}
                            autoComplete="new-password"
                        />
                        <label htmlFor="newPassword">New Password</label>
                    </div>
                    <div className="user-profile-form__input-container">
                        <input
                            type="password"
                            name="confirmNewPassword"
                            placeholder="Confirm New Password"
                            minLength={4}
                            value={form.confirmNewPassword}
                            onChange={handleChange}
                            autoComplete="new-password"
                        />
                        <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    </div>
                </div>
                <div className="user-profile-form__cta">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
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
            <div className="user-profile-form__delete">
                <a href="/" className="user-profile-form__delete-link" onClick={handleDelete}>
                    Delete Account
                </a>
            </div>
        </div>
    );
};

export default UserProfileForm;
