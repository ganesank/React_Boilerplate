import { FC, useState } from 'react';
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

const UserSignUpForm: FC = () => {
    const initialState: Type.SignUpForm = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();
        try {
            const response: Type.Response<Type.SignUpUserRes> = await Request.postData(`${URL}/signup`, form);
            if (!response.ok)
                return dispatch(
                    setMsg({
                        msgs: response.errors,
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );

            if (response.data && response.data.verifyToken)
                dispatch(
                    showPopup({
                        title: 'Verify Email',
                        custom: `${URL}/email/${response.data.verifyToken}`,
                        children: true,
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
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
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
            form.confirmPassword.trim() !== '' &&
            form.confirmPassword.trim() === form.password.trim() &&
            validateEmail(form.email)
        );
    };

    return (
        <div className="user-signup-form">
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
                    type="email"
                />
                <div className="split-2">
                    <Input
                        placeholder="Password"
                        label="Password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        minLength={PASSWORD_LEN}
                        type="password"
                    />
                    <Input
                        placeholder="New Password"
                        label="New Password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                        minLength={PASSWORD_LEN}
                        type="password"
                    />
                </div>
                <CTA>
                    <Button value="Login" btnType="link" href="/login" btnColor="warning" />
                    <Button value="Sign Up" btnColor="success" type="submit" disabled={isFormValid()} />
                </CTA>
            </form>
        </div>
    );
};

export default UserSignUpForm;
