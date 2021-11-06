import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

// = Types =====================================================================
export type Obj = {
    [key: string]: any;
};

// = Forms =====================================================================
export type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export type HandleKeyboard = KeyboardEvent<HTMLInputElement>;

// = Request / Response ========================================================
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

// = Components ================================================================
export type Input = {
    name: string;
    value: string;
    onChange(e: HandleChange): void;
    onKeyPress?(e: HandleKeyboard): void;
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

export type Button = {
    value?: string;
    icon?: string;
    faIcon?: IconProp;
    handle?: string;
    iconDirection?: string;
    direction?: string;
    disabled?: boolean;
    noHover?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
    btnType?: string;
    btnColor?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
    href?: string;
};

export type ButtonIcon = {
    icon?: string;
    faIcon?: IconProp;
    handle?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
    btnType?: string;
    btnColor?: string;
    btnHoverColor?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
    href?: string;
};

export type CTA = {
    handle?: string;
    direction?: string;
    justify?: string;
    align?: string;
};

export type LoadingSpinner = {
    handle?: string;
    color?: string;
};

export type Thead = {
    id: string;
    friendlyName: string;
};