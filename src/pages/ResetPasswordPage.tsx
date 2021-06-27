import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import UserUpdatePasswordForm from '../components/form/user/UserUpdatePasswordForm';
import Alert from '../components/shared/Alert';
import { removeMsg } from '../redux/msg';
import * as Type from '../utils/@types/types';

const ResetPasswordPage: React.FC<Type.ResetPasswordPage> = ({ match }) => {
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const dispatch = useDispatch();
    const { token } = match.params;

    useEffect(() => {
        return () => {
            dispatch(removeMsg());
        };
    }, [dispatch]);

    return (
        <div className="reset-password-page container">
            <h1>Reset Password</h1>
            <UserUpdatePasswordForm token={token} />
            {msg.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default ResetPasswordPage;
