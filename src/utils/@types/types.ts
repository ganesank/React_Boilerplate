export type LoginForm = {
    email: string;
    password: string;
};

export type SignupForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type FormLoginComponentProps = {
    onSubmit: (data: LoginForm) => void;
};

export type FormSignUpComponentProps = {
    onSubmit: (data: SignupForm) => void;
};

export type ErrorMsgComponentProps = {
    errorMsg: string;
    cleanErrorMsg: () => void;
};

export type SignUpPageProps = {
    signUpUser: (data: SignupForm) => void;
};

export type LoginPageProps = {
    loginUser: (data: LoginForm) => void;
};

export type FormLoginProps = {
    onSubmit: (data: LoginForm) => void;
};

export type FormSignUpProps = {
    onSubmit: (data: SignupForm) => void;
};

export type UserRedux = {
    _id: string;
    firstName: string;
    lastName: string;
};

export type RequestOptions = {
    method: string;
    headers: {
        'Content-Type': string;
        Authorization: string;
    };
    body?: any;
};

export type RequestHelper = (
    type: string,
    url: string,
    data?: {}
) => Promise<any>;
