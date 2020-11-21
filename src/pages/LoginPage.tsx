import React, { MouseEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as type from '../utils/@types/types';

import { loginUser } from '../redux/user';

import FormLogin from '../components/FormLogin';
import ErrorMsg from '../components/ErrorMsg';

const LoginPage: React.FC = () => {
    const [error, setError] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = async (data: type.LoginForm) => {
        try {
            await dispatch(loginUser(data));
        } catch (error) {
            setError(error.message);
        }
    };

    const cleanErrorMsg = (): void => {
        setError('');
    };

    return (
        <div>
            <h1>LoginPage</h1>
            <FormLogin onSubmit={handleSubmit} />
            <ErrorMsg errorMsg={error} cleanErrorMsg={cleanErrorMsg} />
        </div>
    );
};

export default LoginPage;
