import { FC, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Alert from '../components/shared/Alert';
import UserUpdatePasswordForm from '../components/user/UserUpdatePasswordForm';
import { removeMsg } from '../redux/msg';
import * as Type from '../utils/@types';

const ResetPasswordPage: FC = () => {
    const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
    const dispatch = useDispatch();
    const { token } = useParams();

    useEffect(() => {
        return () => {
            if (msg.msgs && msg.msgs.length > 0) dispatch(removeMsg());
        };
    }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="reset-password-page">
            <div className="container">
                <h1>Reset Password</h1>
                <UserUpdatePasswordForm token={token!} />
                {msg.msgs && msg.msgs.length > 0 && <Alert />}
            </div>
        </div>
    );
};

export default ResetPasswordPage;
