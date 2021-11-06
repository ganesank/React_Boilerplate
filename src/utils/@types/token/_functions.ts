import { User } from '..';

// = Functions =================================================================
export type GetTokenFn = {
    (): string | null;
};

export type GetUserFromTokenFn = {
    (): User | null;
};

export type SetTokenFn = {
    (token: string): void;
};

export type UpdateTokenFn = {
    (token: string): void;
};

export type RemoveTokenFn = {
    (): void;
};
