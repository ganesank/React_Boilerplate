import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMsg } from '../../redux/msg';
import * as Type from '../../utils/@types';
import * as Request from '../../utils/helpers/request';
import { getEnvURL } from '../../utils/helpers/shared';
import Button from '../shared/Button';
import CTA from '../shared/CTA';
import Input from '../shared/Input';

const PASSWORD_LEN: number = process.env.REACT_APP_PASSWORD_LEN ? +process.env.REACT_APP_PASSWORD_LEN : 7;
const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/user');

const UserUpdatePasswordForm: FC<Type.UserUpdatePasswordFormC> = ({ token }) => {
    const initialState: Type.UpdatePasswordForm = {
        password: '',
        confirmPassword: '',
    };
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();
        const response: Type.Response<Type.UpdateUserPasswordRes> = await Request.updateData(
            `${URL}/password/${token}`,
            form,
            false
        );

        if (!response.ok)
            return dispatch(
                setMsg({
                    msgs: response.errors,
                    msgColor: 'danger',
                    icon: '⚠',
                    iconColor: 'danger',
                })
            );

        navigate('/login');
    };

    const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
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
