import { ChangeEvent, MouseEvent, FormEvent } from 'react';

type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type HandleChangeFn = {
    (e: HandleChange): void;
};

export type HandleClickFn = {
    (e: MouseEvent): void;
};

export type HandleSubmitFn<T> = {
    (e: FormEvent, data?: T): void;
};

export type IsFormValidFn = {
    (): boolean;
};

export type HandleSubmitDataFn<T> = {
    (data: T): void;
};

// = Redux =====================================================================
export type ActionThunk<T> = {
    (data: T): void;
};

export type ActionPayload<T> = {
    (data?: T): { type: string; payload?: T };
};

export type Reducer<S, A> = {
    (state: S, action: A): void;
};

// = Other =====================================================================
