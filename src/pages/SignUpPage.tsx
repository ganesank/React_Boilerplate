import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as type from '../utils/@types/types';

import { signUpUser } from '../redux/user';

import FormSignUp from '../components/FormSignUp';
import ErrorMsg from '../components/ErrorMsg';

const SignUpPage: React.FC = () => {
    const [error, setError] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = async (data: type.SignupForm) => {
        try {
            await dispatch(signUpUser(data));
        } catch (error) {
            setError(error.message);
        }
    };

    const cleanErrorMsg = (): void => {
        setError('');
    };

    return (
        <div>
            <FormSignUp onSubmit={handleSubmit} />
            <ErrorMsg errorMsg={error} cleanErrorMsg={cleanErrorMsg} />
        </div>
    );
};

export default SignUpPage;
