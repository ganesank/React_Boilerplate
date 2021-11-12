// = Types =====================================================================
export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    admin: boolean;
    exp: number;
    iat: number;
};
// = Forms =====================================================================
export type ResetPasswordForm = {
    email: string;
};

export type LoginForm = {
    email: string;
    password: string;
};

export type UpdatePasswordForm = {
    password: string;
    confirmPassword: string;
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
    telegramId: string;
    isTelegramVerified: boolean;
    password: string;
    newPassword: string;
    confirmNewPassword: string;
};

export type DeleteUserForm = {
    password: string;
};

// = Request / Response ========================================================
export type LoginUserRes = {
    token: string;
    message: string;
    verifyToken?: string;
};

export type DeleteUserRes = {
    message: string;
};

export type ResetUserPasswordRes = {
    message: string;
    verifyToken?: string;
};

export type UpdateUserPasswordRes = ResetUserPasswordRes;

export type SignUpUserRes = ResetUserPasswordRes;
