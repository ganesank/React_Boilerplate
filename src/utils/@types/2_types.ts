// _ Request
export type Response = {
    data: object | null;
    status: number | null;
    error: object | null;
    ok: boolean;
};

export type Request = (
    type: string,
    url: string,
    data?: {} | null,
    reqToken?: boolean,
    throwError?: boolean
) => Promise<any>;

export type RequestOptions = {
    method: string;
    headers: {
        'Content-Type': string;
        Authorization?: string;
    };
    body?: string;
};

// _ Redux
// + User
export type UserReduxPayload = {
    _id: string;
    firstName: string;
    lastName: string;
};

export type UserReduxAction = {
    type: string;
    payload?: UserReduxPayload;
};

// + Modal
export type ModalReduxPayload = {
    message?: string;
};

export type ModalReduxAction = {
    type: string;
    payload?: ModalReduxPayload;
};

// + Messages
export type MsgsReduxPayload = {
    msgs: string[];
    msgColor: string;
    icon?: string;
    iconColor?: string;
};

export type MsgsReduxAction = {
    type: string;
    payload: MsgsReduxPayload;
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
