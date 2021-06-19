import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/user';
import * as alertMsgHelper from '../utils/helpers/alertMsgHelper';
import * as Type from '../utils/@types/types';

import FormLogin from '../components/FormLogin';
import AlertMsg from '../components/AlertMsg';

const LoginPage: React.FC = () => {
    const [alertMsg, setAlertMsg] = useState<string[]>([]);
    const [alertConfig, setAlertConfig] = useState<Type.AlertMsgConfig>({
        icon: '',
        iconColor: '',
        msgColor: '',
    });
    const dispatch = useDispatch();

    const handleSubmitLogin: Type.HandleSubmitDataFn<Type.LoginForm> = (data) => {
        try {
            dispatch(loginUser(data!));
        } catch (error) {
            setAlertConfig({
                icon: '⚠',
                iconColor: 'danger',
                msgColor: 'danger',
            });
            setAlertMsg(alertMsgHelper.msgArray(error.message));
        }
    };

    const cleanMsg = (): void => {
        setAlertMsg([]);
    };

    return (
        <div className="login-page">
            <div className="login-page__form">
                <FormLogin onSubmit={handleSubmitLogin} />
                <AlertMsg
                    msgs={alertMsg}
                    msgColor={alertConfig.msgColor}
                    cleanMsg={cleanMsg}
                    icon={alertConfig.icon}
                    iconColor={alertConfig.iconColor}
                />
            </div>
        </div>
    );
};

export default LoginPage;
