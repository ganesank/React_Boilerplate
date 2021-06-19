import { ErrorI } from './3_interfaces';

// _ Request
export type Response = { data: object | null; status: number | null; error: object | null };

export type Request = (type: string, url: string, data?: {}, reqToken?: boolean, throwError?: boolean) => Promise<any>;

export type RequestOptions = {
    method: string;
    headers: {
        'Content-Type': string;
        Authorization?: string;
    };
    body?: string;
};

// _ User Redux
export type UserReduxPayload = {
    _id: string;
    firstName: string;
    lastName: string;
};

export type UserReduxInitialState = {
    state: string | null;
    error: ErrorI;
};

export type UserReduxAction = {
    type: string;
    payload?: UserReduxPayload;
};

export type ModalReduxPayload = {
    message?: string;
};

export type ModalReduxAction = {
    type: string;
    payload?: ModalReduxPayload;
};

// _ Alert
export type AlertMsg = {
    (res: string): string[];
};

export type AlertMsgConfig = {
    icon: string;
    iconColor: string;
    msgColor: string;
};

// _ Forms
export type LoginForm = {
    email: string;
    password: string;
};

export type SignUpForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type ProfileForm = {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newPassword: string;
    confirmNewPassword: string;
};

export type DeleteUserForm = {
    password: string;
};
