import { Obj } from '../types';

export type Thead = {
    id: string;
    friendlyName: string;
};

export type Response<T> = {
    data: T;
    error: Obj | null;
    ok: boolean;
    status: number;
};
