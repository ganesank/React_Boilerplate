import React, { useState } from 'react';
import * as requestService from '../utils/api/requestService';
import * as alertMsgHelper from '../utils/helpers/alertMsgHelper';
import * as type from '../utils/@types/types';

import FormSignUp from '../components/FormSignUp';
import AlertMsg from '../components/AlertMsg';

const PORT = +process.env.REACT_APP_BACKEND_PORT!;
const HTTP = PORT! === 3001 ? 'http://' : 'https://';
const URL = `${HTTP}${
    process.env.REACT_APP_BACKEND_URL!.split(':')[0]
}:${PORT}/api/users/signup`;

const SignUpPage: React.FC = () => {
    const [alertMsg, setAlertMsg] = useState<string[]>([]);
    const [alertConfig, setAlertConfig] = useState<type.AlertMsgConfig>({
        icon: '',
        iconColor: '',
        msgColor: '',
    });

    const handleSubmit = async (data: type.SignupForm) => {
        try {
            const response = await requestService.signUpUser(URL, data);
            setAlertConfig({
                icon: '¡',
                iconColor: 'success',
                msgColor: 'success',
            });
            setAlertMsg(
                alertMsgHelper.msgArray(await JSON.stringify(response))
            );
        } catch (error) {
            setAlertConfig({
                icon: '⚠',
                iconColor: 'danger',
                msgColor: 'danger',
            });
            setAlertMsg(alertMsgHelper.msgArray(await error.message));
        }
    };

    const cleanMsg = (): void => {
        setAlertMsg([]);
    };

    return (
        <div className="signup-page">
            <div className="signup-page__form">
                <FormSignUp
                    onSubmit={handleSubmit}
                    onSuccessCleanForm={alertConfig.msgColor}
                />
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

export default SignUpPage;
