import { User } from '..';

export interface GetTokenFn {
    (): string | null;
}

export interface GetUserFromTokenFn {
    (): User | null;
}

export interface SetTokenFn {
    (token: string): void;
}

export interface UpdateTokenFn {
    (token: string): void;
}

export interface RemoveTokenFn {
    (): void;
}
