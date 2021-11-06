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

export type UserUpdatePasswordFormC = {
    token: string;
};
