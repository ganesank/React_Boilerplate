import React, { useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import * as requestHelper from '../../utils/helpers/requestHelper';
import { setMsgs } from '../../redux/messages';
import * as Type from '../../utils/@types/types';

import Alert from '../shared/Alert';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/users`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const FormResetPassword: React.FC = () => {
    const initialState: Type.ResetPasswordForm = {
        email: '',
    };
    const [form, setForm] = useState(initialState);
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const dispatch = useDispatch();

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();
        try {
            const response = await requestHelper.resetPassword(`${URL}/password`, form);
            if (!response.ok)
                return dispatch(
                    setMsgs({
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );

            if (response.data.verifyToken) console.log(`${URL}/email/${response.data.verifyToken}`);

            dispatch(
                setMsgs({
                    msgs: [response.data.message],
                    msgColor: 'success',
                    icon: '✓',
                    iconColor: 'success',
                })
            );
            setForm({
                email: '',
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
        <div className="form-reset-password" onClick={(e) => e.stopPropagation()}>
            <form className="form-reset-password__form" onSubmit={handleSubmit}>
                <div className="form-reset-password__input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-reset-password__input"
                        required
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                </div>
                <div className="form-reset-password__cta">
                    <button
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn btn--primary'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Reset
                    </button>
                </div>
            </form>
            {msgs.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default FormResetPassword;
