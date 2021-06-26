import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import FormLogin from '../components/FormLogin';
import AlertMsg from '../components/shared/AlertMsg';
import Popup from '../components/shared/Popup';

const LoginPage: React.FC = () => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const popup = useSelector((state: RootStateOrAny) => state.popup);

    return (
        <div className="login-page">
            <div className="login-page__form">
                <FormLogin />
                {popup.visible && <Popup />}
                {msgs.msgs.length > 0 && <AlertMsg />}
            </div>
        </div>
    );
};

export default LoginPage;
