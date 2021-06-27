import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMsg } from '../../../redux/msg';
import * as Type from '../../../utils/@types/types';
import * as requestHelper from '../../../utils/helpers/requestHelper';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/users`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const UserUpdatePasswordForm: React.FC<Type.ResetPassword2FormComponent> = ({ token }) => {
    const initialState: Type.UpdatePasswordForm = {
        password: '',
        confirmPassword: '',
    };
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();
        try {
            const response = await requestHelper.updatePassword(`${URL}/password/${token}`, form);

            console.log(response);
            if (!response.ok)
                return dispatch(
                    setMsg({
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
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
        return !(form.password.trim() !== '' && form.confirmPassword.trim() !== '');
    };

    return (
        <div className="user-update-password-form">
            <form onSubmit={handleSubmit}>
                <div className="user-update-password-form__input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />
                    <label htmlFor="password">New Password</label>
                </div>
                <div className="user-update-password-form__input-container">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        value={form.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                </div>
                <div className="user-update-password-form__cta">
                    <button
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserUpdatePasswordForm;
