import { LoginForm, SignUpForm } from './2_types';

// = Forms =====================================================================
export type FormLoginComponent = {
    onSubmit: (data: LoginForm) => void;
};

export type FormSignUpComponent = {
    onSubmit: (data: SignUpForm) => void;
    onSuccessCleanForm: string;
};
