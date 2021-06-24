import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import FormLogin from '../components/FormLogin';
import AlertMsg from '../components/shared/AlertMsg';

const LoginPage: React.FC = () => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);

    return (
        <div className="login-page">
            <div className="login-page__form">
                <FormLogin />
                {msgs.msgs.length > 0 && <AlertMsg />}
            </div>
        </div>
    );
};

export default LoginPage;
