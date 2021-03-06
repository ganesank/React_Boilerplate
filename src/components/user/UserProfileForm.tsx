import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMsg } from '../../redux/msg';
import { showPopup } from '../../redux/popup';
import * as Type from '../../utils/@types';
import * as Request from '../../utils/helpers/request';
import { getEnvURL, validateEmail } from '../../utils/helpers/shared';
import Button from '../shared/Button';
import CTA from '../shared/CTA';
import Input from '../shared/Input';

const PASSWORD_LEN: number = process.env.REACT_APP_PASSWORD_LEN ? +process.env.REACT_APP_PASSWORD_LEN : 7;
const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/user');

const UserProfileForm: FC = () => {
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
                const response: Type.Response<Type.ProfileForm> = await Request.getData(`${URL}/profile`);
                if (!response.ok)
                    return dispatch(
                        setMsg({
                            msgs: response.errors,
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
            } catch (error: any) {
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
    }, [dispatch, setForm]);

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();

        try {
            const response = await Request.updateData(`${URL}/profile`, form);

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
        } catch (error: any) {
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
        e!.preventDefault();
        dispatch(
            showPopup({
                visible: true,
                title: 'Delete Acc',
                message: 'Are you sure you want to delete your account?',
                children: true,
            })
        );
    };

    const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
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
            form.newPassword.trim() === form.confirmNewPassword.trim() &&
            validateEmail(form.email)
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
                <div className="user-profile-form__telegram-wrap">
                    <Input
                        placeholder="Telegram ID"
                        label="Telegram ID"
                        name="telegramId"
                        value={form.telegramId}
                        onChange={handleChange}
                        handle="user-profile-form__telegram-wrap__telegram"
                    />
                    <div
                        className={
                            form.isTelegramVerified
                                ? 'user-profile-form__icon user-profile-form__icon--activated'
                                : 'user-profile-form__icon'
                        }
                    >
                        <div className="tooltip">
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <span className="tooltip__text">
                                {form.isTelegramVerified ? 'Verified' : 'Not Verified'}
                            </span>
                        </div>
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
                        type="password"
                    />
                    <Input
                        placeholder="Confirm New Password"
                        label="Confirm New Password"
                        name="confirmNewPassword"
                        value={form.confirmNewPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                        minLength={PASSWORD_LEN}
                        type="password"
                    />
                </div>
                <CTA>
                    <Input
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required={true}
                        autoComplete="new-password"
                        minLength={PASSWORD_LEN}
                        type="password"
                    />
                    <Button value="Update" type="submit" disabled={isFormValid()} />
                </CTA>
            </form>
            <CTA justify="flex-start">
                <a href="/" className="user-profile-form__delete-link" onClick={handleDelete}>
                    Delete Account
                </a>
            </CTA>
        </div>
    );
};

export default UserProfileForm;
