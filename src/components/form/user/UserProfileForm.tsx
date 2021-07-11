import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMsg } from '../../../redux/msg';
import { hidePopup, showPopup } from '../../../redux/popup';
import * as Type from '../../../utils/@types/types';
import * as requestHelper from '../../../utils/helpers/requestHelper';
import Button from '../../shared/Button';
import CTA from '../../shared/CTA';
import Input from '../../shared/Input';

const PASSWORD_LEN: number = +process.env.REACT_APP_PASSWORD_LEN!;
const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.REACT_APP_ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/users`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const UserProfileForm: React.FC = () => {
    const initialState: Type.ProfileForm = {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        telegramId: '',
        isTelegramVerified: false,
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
                        setMsg({
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
                        telegramId: response.data.telegramId,
                        isTelegramVerified: response.data.isTelegramVerified,
                    };
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
        })();

        return () => {
            dispatch(hidePopup());
        };
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
                    setMsg({
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

            dispatch(
                showPopup({
                    title: 'Profile Updated',
                    message: 'Your profile has been updated successfully',
                    children: false,
                })
            );
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

    const handleDelete: Type.HandleClickFn = (e) => {
        e.preventDefault();
        dispatch(
            showPopup({
                visible: true,
                title: 'Delete Acc',
                message: 'Are you sure you want to delete your account?',
                children: true,
            })
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
                <div className="split-2">
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
                <div className="user-profile-form__telegram-container">
                    <Input
                        placeholder="Telegram ID"
                        label="Telegram ID"
                        name="telegramId"
                        value={form.telegramId}
                        onChange={handleChange}
                        handle="user-profile-form__telegram-container__telegram"
                    />
                    <div
                        className={
                            form.isTelegramVerified
                                ? 'user-profile-form__icon user-profile-form__icon--activated tooltip'
                                : 'user-profile-form__icon tooltip'
                        }
                    >
                        <FontAwesomeIcon icon={faLocationArrow} />
                        <span className="tooltip__text">{form.isTelegramVerified ? 'Verified' : 'Not Verified'}</span>
                    </div>
                </div>
                <div className="split-2">
                    <Input
                        placeholder="New Password"
                        label="New Password"
                        name="newPassword"
                        value={form.newPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                        minLength={PASSWORD_LEN}
                    />
                    <Input
                        placeholder="Confirm New Password"
                        label="Confirm New Password"
                        name="confirmNewPassword"
                        value={form.confirmNewPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                        minLength={PASSWORD_LEN}
                    />
                </div>
                <CTA justify="right">
                    <Input
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="password"
                        required={true}
                        minLength={PASSWORD_LEN}
                        type="new-password"
                    />
                    <Button value="Update" type="submit" disabled={isFormValid()} />
                </CTA>
            </form>
            <CTA>
                <a href="/" className="user-profile-form__delete-link" onClick={handleDelete}>
                    Delete Account
                </a>
            </CTA>
        </div>
    );
};

export default UserProfileForm;
