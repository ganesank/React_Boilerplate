import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeMsg, setMsg } from '../../../redux/msg';
import * as Type from '../../../utils/@types/types';
import * as requestHelper from '../../../utils/helpers/requestHelper';
import Alert from '../../shared/Alert';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/users`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

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
            const response = await requestHelper.resetPassword(`${URL}/password`, form);
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
                <div className="user-reset-password-form__input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                </div>
                <div className="user-reset-password-form__cta">
                    <button
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn btn--primary'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Reset
                    </button>
                </div>
            </form>
            {msg.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default UserResetPasswordForm;
