import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import UserSignUpForm from '../components/form/user/UserSignUpForm';
import Alert from '../components/shared/Alert';
import Popup from '../components/shared/Popup';
import { removeMsg } from '../redux/msg';
import { hidePopup } from '../redux/popup';

const SignUpPage: React.FC = () => {
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
        <div className="signup-page">
            <div className="container">
                <h1>SIGN UP</h1>
                <div className="signup-page__form">
                    <UserSignUpForm />
                    {!popup.visible && msg.msgs.length > 0 && <Alert />}
                    {popup.visible && popup.custom && (
                        <Popup>
                            <div className="popup__custom__link">
                                <a href={popup.custom}>Click Here</a>
                            </div>
                        </Popup>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
