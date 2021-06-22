// = Request ===================================================================
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

// = Redux =====================================================================
// _ Payload
// + User
export type UserPayload = {
    _id: string;
    firstName: string;
    lastName: string;
    exp: number;
    iat: number;
};

export type UserState = UserPayload | null;

// + Modal
export type ModalPayload = {
    visible?: boolean;
    title?: string;
    message?: string;
};

export type ModalState = ModalPayload;

// + Messages
export type MsgsPayload = {
    msgs: string[];
    msgColor: string;
    icon?: string;
    iconColor?: string;
};

export type MsgsState = MsgsPayload;

// _ Action
// + User
export type UserAction = {
    type: string;
    payload?: UserPayload;
};

// + Modal
export type ModalAction = {
    type: string;
    payload?: ModalPayload;
};

// + Messages
export type MsgsAction = {
    type: string;
    payload: MsgsPayload;
};

// = Forms =====================================================================
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

// = Other =====================================================================
