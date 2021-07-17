import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import UserLoginForm from '../components/form/user/UserLoginForm';
import UserResetPasswordForm from '../components/form/user/UserResetPasswordForm';
import Alert from '../components/shared/Alert';
import Popup from '../components/shared/Popup';
import { removeMsg } from '../redux/msg';
import { hidePopup } from '../redux/popup';

const LoginPage: React.FC = () => {
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(hidePopup());
            dispatch(removeMsg());
        };
    }, [dispatch]);

    return (
        <div className="login-page">
            <div className="container">
                <h1>LOGIN</h1>
                <div className="login-page__form">
                    <UserLoginForm />
                    {!popup.visible && msg.msgs.length > 0 && <Alert />}
                    {popup.visible && popup.custom && (
                        <Popup>
                            <div className="popup__custom__link">
                                <a href={popup.custom}>Click Here</a>
                            </div>
                        </Popup>
                    )}
                    {popup.visible && !popup.custom && (
                        <Popup>
                            <UserResetPasswordForm />
                        </Popup>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
