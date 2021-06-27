import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import UserUpdatePasswordForm from '../components/form/user/UserUpdatePasswordForm';
import Alert from '../components/shared/Alert';
import { removeMsgs } from '../redux/messages';
import * as Type from '../utils/@types/types';

const ResetPasswordPage: React.FC<Type.ResetPasswordPage> = ({ match }) => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const dispatch = useDispatch();
    const { token } = match.params;

    useEffect(() => {
        return () => {
            dispatch(removeMsgs());
        };
    }, [dispatch]);

    return (
        <div className="reset-password-page container">
            <h1>Reset Password</h1>
            <UserUpdatePasswordForm token={token} />
            {msgs.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default ResetPasswordPage;
