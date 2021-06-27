import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import UserLoginForm from '../components/form/user/UserLoginForm';
import UserResetPasswordForm from '../components/form/user/UserResetPasswordForm';
import Alert from '../components/shared/Alert';
import Popup from '../components/shared/Popup';
import { removeMsgs } from '../redux/messages';
import { hidePopup } from '../redux/popup';

const LoginPage: React.FC = () => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(hidePopup());
            dispatch(removeMsgs());
        };
    }, [dispatch]);

    return (
        <div className="login-page container">
            <h1>LOGIN</h1>
            <div className="login-page__form">
                <UserLoginForm />
                {!popup.visible && msgs.msgs.length > 0 && <Alert />}
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
    );
};

export default LoginPage;
