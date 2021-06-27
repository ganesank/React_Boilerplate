import React, { useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { hidePopup } from '../redux/popup';

import FormSignUp from '../components/FormSignUp';
import Alert from '../components/shared/Alert';
import Popup from '../components/shared/Popup';

const SignUpPage: React.FC = () => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(hidePopup());
        };
    }, [dispatch]);

    return (
        <div className="signup-page container">
            <h1>SIGN UP</h1>
            <div className="signup-page__form">
                <FormSignUp />
                {!popup.visible && msgs.msgs.length > 0 && <Alert />}
                {popup.visible && popup.custom && (
                    <Popup>
                        <div className="popup__custom__link">
                            <a href={popup.custom}>Click Here</a>
                        </div>
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default SignUpPage;
