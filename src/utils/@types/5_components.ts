import { ChangeEvent } from 'react';
import { Obj } from './1_shared';

type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type ResetPassword2FormComponent = {
    token: string;
};

export type Input = {
    name: string;
    value: string;
    onChange(e: HandleChange): void;
    label?: string;
    handle?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
    autoComplete?: string;
    labelPosition?: string;
    minLength?: number;
};

export type Textarea = {
    name: string;
    value: string;
    onChange(e: HandleChange): void;
    label?: string;
    handle?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    labelPosition?: string;
};

export type Select = {
    name: string;
    value: string;
    options: Obj[];
    onChange(e: HandleChange): void;
    label?: string;
    handle?: string;
    required?: boolean;
    disabled?: boolean;
    labelPosition?: string;
};

export type CTA = {
    handle?: string;
    direction?: string;
    align?: string;
};
