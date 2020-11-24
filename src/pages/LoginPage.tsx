import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/user';
import * as alertMsgHelper from '../utils/helpers/alertMsgHelper';
import * as type from '../utils/@types/types';

import FormLogin from '../components/FormLogin';
import AlertMsg from '../components/AlertMsg';

const LoginPage: React.FC = () => {
    const [alertMsg, setAlertMsg] = useState<string[]>([]);
    const dispatch = useDispatch();

    const handleSubmit = async (data: type.LoginForm) => {
        try {
            await dispatch(loginUser(data));
        } catch (error) {
            setAlertMsg(alertMsgHelper.msgArray(await error.message));
        }
    };

    const cleanMsg = (): void => {
        setAlertMsg([]);
    };

    return (
        <div className="login-page">
            <div className="login-page__form">
                <FormLogin onSubmit={handleSubmit} />
                <AlertMsg
                    msgs={alertMsg}
                    msgColor={'danger'}
                    cleanMsg={cleanMsg}
                    icon={'⚠'}
                    iconColor={'danger'}
                />
            </div>
        </div>
    );
};

export default LoginPage;
