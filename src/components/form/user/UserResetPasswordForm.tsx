import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeMsg, setMsg } from '../../../redux/msg';
import * as Type from '../../../utils/@types/0_types';
import * as requestHelper from '../../../utils/helpers/requestHelper';
import Alert from '../../shared/Alert';
import Button from '../../shared/Button';
import CTA from '../../shared/CTA';
import Input from '../../shared/Input';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.REACT_APP_ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/user`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/user`;

const UserResetPasswordForm: React.FC = () => {
    const initialState: Type.ResetPasswordForm = {
        email: '',
    };
    const [form, setForm] = useState(initialState);
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        return () => {
            dispatch(removeMsg());
        };
    }, [dispatch]);

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();
        try {
            const response = await requestHelper.postData(`${URL}/password`, form);
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
                email: '',
            });

            if (response.data.verifyToken) history.push(`/reset-password/${response.data.verifyToken}`);
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
        return !(form.email !== '');
    };

    return (
        <div className="user-reset-password-form" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="username"
                    required={true}
                />
                <CTA handle="user-reset-password-form__cta">
                    <Button value="Reset" type="submit" disabled={isFormValid()} />
                </CTA>
            </form>
            {msg.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default UserResetPasswordForm;
