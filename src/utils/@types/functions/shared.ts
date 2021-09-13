import { ChangeEvent, FormEvent, KeyboardEvent, MouseEvent } from 'react';

export type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type HandleKeyboard = KeyboardEvent<HTMLInputElement>;

export type HandleChangeFn<T> = {
    (e: T): void;
};

export type HandleClickFn = {
    (e?: MouseEvent): void;
};

export type HandleClickDataFn<T1, T2> = {
    (e?: MouseEvent, data?: T1, data2?: T2): void;
};

export type HandleSubmitFn<T> = {
    (e: FormEvent, data?: T): void;
};

export type IsFormValidFn = {
    (): boolean;
};

export type CssColorFn = {
    (value: number, css?: string): string;
};

export type DelayFn = {
    (sec: number): Promise<void>;
};
