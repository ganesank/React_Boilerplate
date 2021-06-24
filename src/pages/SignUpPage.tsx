import React from 'react';

import FormSignUp from '../components/FormSignUp';

const SignUpPage: React.FC = () => {
    return (
        <div className="signup-page">
            <div className="signup-page__form">
                <FormSignUp />
            </div>
        </div>
    );
};

export default SignUpPage;
