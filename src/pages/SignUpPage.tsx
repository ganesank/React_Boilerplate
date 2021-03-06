import { FC, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Alert from '../components/shared/Alert';
import Popup from '../components/shared/Popup';
import UserSignUpForm from '../components/user/UserSignUpForm';
import { removeMsg } from '../redux/msg';
import { hidePopup } from '../redux/popup';
import * as Type from '../utils/@types';

const SignUpPage: FC = () => {
    const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
    const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
    const dispatch = useDispatch();

    useEffect(() => {
        if (popup.visible) dispatch(hidePopup());
        if (msg.msgs.length > 0) dispatch(removeMsg());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="signup-page">
            <div className="container">
                <h1>SIGN UP</h1>
                <div className="signup-page__form">
                    <UserSignUpForm />
                    {!popup.visible && <Alert />}
                    <Popup>
                        <div className="popup__custom__link">
                            <a href={popup.custom}>Click Here</a>
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
