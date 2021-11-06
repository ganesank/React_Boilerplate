// = Types =====================================================================
export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    admin: boolean;
    exp: number;
    iat: number;
};

// = Request / Response ========================================================
export type ResetPasswordRes = {
    message: string;
    verifyToken?: string;
};

export type UpdatePasswordRes = ResetPasswordRes;

export type SignUpRes = ResetPasswordRes;
