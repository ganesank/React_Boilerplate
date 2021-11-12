import { FC, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Alert from '../components/shared/Alert';
import Popup from '../components/shared/Popup';
import UserLoginForm from '../components/user/UserLoginForm';
import UserResetPasswordForm from '../components/user/UserResetPasswordForm';
import { removeMsg } from '../redux/msg';
import { hidePopup } from '../redux/popup';
import * as Type from '../utils/@types';

const LoginPage: FC = () => {
    const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
    const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
    const dispatch = useDispatch();

    useEffect(() => {
        if (popup.visible) dispatch(hidePopup());
        if (msg.msgs.length > 0) dispatch(removeMsg());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const customPopup = popup.custom && (
        <Popup>
            <div className="popup__custom__link">
                <a href={popup.custom}>Click Here</a>
            </div>
        </Popup>
    );

    const normalPopup = !popup.custom && (
        <Popup>
            <UserResetPasswordForm />
        </Popup>
    );

    return (
        <div className="login-page">
            <div className="container">
                <h1>LOGIN</h1>
                <div className="login-page__form">
                    <UserLoginForm />
                    {!popup.visible && <Alert />}
                    {customPopup}
                    {normalPopup}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
