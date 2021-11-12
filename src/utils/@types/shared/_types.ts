import { ChangeEvent, KeyboardEvent } from 'react';

export type Obj = {
    [key: string]: any;
};

export type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type HandleKeyboard = KeyboardEvent<HTMLInputElement>;
