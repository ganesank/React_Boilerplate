import { LoginForm, SignUpForm } from './2_types';

// _ Forms
export type FormLoginComponentProps = {
    onSubmit: (data: LoginForm) => void;
};

export type FormSignUpComponentProps = {
    onSubmit: (data: SignUpForm) => void;
    onSuccessCleanForm: string;
};

// _ Alert
export type AlertMsgProps = {
    msgs: string[];
    msgColor: string;
    icon?: string;
    iconColor?: string;
    cleanMsg: () => void;
};
