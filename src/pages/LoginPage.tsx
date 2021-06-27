import React, { useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { hidePopup } from '../redux/popup';

import FormLogin from '../components/FormLogin';
import AlertMsg from '../components/shared/AlertMsg';
import Popup from '../components/shared/Popup';

const LoginPage: React.FC = () => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(hidePopup());
        };
    }, [dispatch]);

    return (
        <div className="login-page">
            <div className="login-page__form">
                <FormLogin />
                {msgs.msgs.length > 0 && <AlertMsg />}
                {popup.visible && (
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

export default LoginPage;
