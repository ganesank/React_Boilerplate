import { FC, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeMsg, setMsg } from '../../redux/msg';
import * as Type from '../../utils/@types';
import * as Request from '../../utils/helpers/request';
import { getEnvURL, validateEmail } from '../../utils/helpers/shared';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import CTA from '../shared/CTA';
import Input from '../shared/Input';

const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/user');

const UserResetPasswordForm: FC = () => {
    const initialState: Type.ResetPasswordForm = {
        email: '',
    };
    const [form, setForm] = useState(initialState);
    const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (msg.msgs.length > 0) dispatch(removeMsg());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();
        try {
            const response: Type.Response<Type.ResetUserPasswordRes> = await Request.postData(`${URL}/password`, form);

            if (!response.ok)
                return dispatch(
                    setMsg({
                        msgs: response.errors,
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

            if (response.data.verifyToken) navigate(`/reset-password/${response.data.verifyToken}`);
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
        return !(form.email !== '' && validateEmail(form.email));
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
            <Alert />
        </div>
    );
};

export default UserResetPasswordForm;
