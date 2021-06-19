import React, { useState } from 'react';
import * as requestHelper from '../utils/helpers/requestHelper';
import * as alertMsgHelper from '../utils/helpers/alertMsgHelper';
import * as Type from '../utils/@types/types';

import FormSignUp from '../components/FormSignUp';
import AlertMsg from '../components/AlertMsg';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const HTTP: string = PORT === 3001 ? 'http://' : 'https://';
const URL: string = `${HTTP}${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const SignUpPage: React.FC = () => {
    const [alertMsg, setAlertMsg] = useState<string[]>([]);
    const [alertConfig, setAlertConfig] = useState<Type.AlertMsgConfig>({
        icon: '',
        iconColor: '',
        msgColor: '',
    });

    const handleSubmitSignUp: Type.HandleSubmitDataFn<Type.SignUpForm> = async (data) => {
        try {
            const response = await requestHelper.signUpUser(URL, data);

            setAlertConfig({
                icon: !response.data ? '⚠' : '✓',
                iconColor: !response.data ? 'danger' : 'success',
                msgColor: !response.data ? 'danger' : 'success',
            });
            setAlertMsg(alertMsgHelper.msgArray(response));
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
        <div className="signup-page">
            <div className="signup-page__form">
                <FormSignUp onSubmit={handleSubmitSignUp} onSuccessCleanForm={alertConfig.msgColor} />
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
