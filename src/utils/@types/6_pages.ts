import { LoginForm, SignUpForm } from './2_types';

export type SignUpPageProps = {
    signUpUser: (data: SignUpForm) => void;
};

export type LoginPageProps = {
    loginUser: (data: LoginForm) => void;
};

export type FormLoginProps = {
    onSubmit: (data: LoginForm) => void;
};

export type FormSignUpProps = {
    onSubmit: (data: SignUpForm) => void;
};
