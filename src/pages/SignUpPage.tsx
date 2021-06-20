import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import * as requestHelper from '../utils/helpers/requestHelper';
import * as Type from '../utils/@types/types';

import FormSignUp from '../components/FormSignUp';
import AlertMsg from '../components/AlertMsg';
import { setMsgs } from '../redux/messages';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const HTTP: string = PORT === 3001 ? 'http://' : 'https://';
const URL: string = `${HTTP}${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users/signup`;

const SignUpPage: React.FC = () => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const dispatch = useDispatch();

    const handleSubmitSignUp: Type.HandleSubmitDataFn<Type.SignUpForm> = async (data) => {
        try {
            const response = await requestHelper.signUpUser(URL, data);
            if (!response.ok)
                return dispatch(
                    setMsgs({
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );

            dispatch(
                setMsgs({
                    msgs: [response.data],
                    msgColor: 'success',
                    icon: '✓',
                    iconColor: 'success',
                })
            );
        } catch (error) {
            dispatch(
                setMsgs({
                    msgs: [error.message],
                    msgColor: 'danger',
                    icon: '⚠',
                    iconColor: 'danger',
                })
            );
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-page__form">
                <FormSignUp onSubmit={handleSubmitSignUp} onSuccessCleanForm={'success'} />
                {msgs.msgs.length > 0 && <AlertMsg />}
            </div>
        </div>
    );
};

export default SignUpPage;
