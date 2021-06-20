import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { loginUser } from '../redux/user';
import * as Type from '../utils/@types/types';

import FormLogin from '../components/FormLogin';
import AlertMsg from '../components/AlertMsg';

const LoginPage: React.FC = () => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const dispatch = useDispatch();

    const handleSubmitLogin: Type.HandleSubmitDataFn<Type.LoginForm> = (data) => {
        dispatch(loginUser(data));
    };

    return (
        <div className="login-page">
            <div className="login-page__form">
                <FormLogin onSubmit={handleSubmitLogin} />
                {msgs.msgs.length > 0 && <AlertMsg />}
            </div>
        </div>
    );
};

export default LoginPage;
