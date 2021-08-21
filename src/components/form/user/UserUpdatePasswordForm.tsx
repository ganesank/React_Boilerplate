import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMsg } from '../../../redux/msg';
import * as Type from '../../../utils/@types/0_types';
import * as requestHelper from '../../../utils/helpers/requestHelper';
import Button from '../../shared/Button';
import CTA from '../../shared/CTA';
import Input from '../../shared/Input';

const PASSWORD_LEN: number = +process.env.REACT_APP_PASSWORD_LEN!;
const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.REACT_APP_ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/user`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/user`;

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
            const response = await requestHelper.updateData(`${URL}/password/${token}`, form);

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
                <Input
                    placeholder="New Password"
                    label="New Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    type="password"
                    minLength={PASSWORD_LEN}
                />
                <Input
                    placeholder="Confirm New Password"
                    label="Confirm New Password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    type="password"
                    minLength={PASSWORD_LEN}
                />
                <CTA>
                    <Button value="Reset" type="submit" disabled={isFormValid()} />
                </CTA>
            </form>
        </div>
    );
};

export default UserUpdatePasswordForm;
