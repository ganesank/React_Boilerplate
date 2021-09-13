import { FC, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Alert from '../components/shared/Alert';
import UserUpdatePasswordForm from '../components/user/UserUpdatePasswordForm';
import { removeMsg } from '../redux/msg';
import * as Type from '../utils/@types/types';

const ResetPasswordPage: FC<Type.ResetPasswordPage> = ({ match }) => {
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const dispatch = useDispatch();
    const { token } = match.params;

    useEffect(() => {
        return () => {
            dispatch(removeMsg());
        };
    }, [dispatch]);

    return (
        <div className="reset-password-page">
            <div className="container">
                <h1>Reset Password</h1>
                <UserUpdatePasswordForm token={token} />
                {msg.msgs.length > 0 && <Alert />}
            </div>
        </div>
    );
};

export default ResetPasswordPage;
