import { Obj } from '../types';

export type RequestOptions = {
    method: string;
    mode?: RequestMode;
    headers: {
        'Content-Type': string;
        'Access-Control-Allow-Origin'?: string;
        Authorization?: string;
    };
    body?: string;
};

export type Response<T> = {
    data: T;
    error: Obj;
    ok: boolean;
    status: number;
};

export type ResetPasswordRes = {
    message: string;
    verifyToken?: string;
};

export type UpdatePasswordRes = ResetPasswordRes;

export type SignUpRes = ResetPasswordRes;
