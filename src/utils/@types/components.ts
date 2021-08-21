import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ChangeEvent, MouseEvent } from 'react';
import { Obj } from './shared';
import { ApiForm, Thead } from './types';

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

export type Button = {
    value?: string;
    icon?: string;
    faIcon?: IconProp;
    handle?: string;
    iconDirection?: string;
    direction?: string;
    disabled?: boolean;
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

export type Table = {
    handle: string;
    thead: Thead[];
    data: any;
    handleEdit?(e: MouseEvent, obj: any, idx: number): void;
    handleDelete?(e: MouseEvent, obj: any, idx: number): void;
    cta?: boolean;
};

// = Forms =====================================================================

export type ApiFormC = {
    setApis(prev: any): void;
    data?: {
        api: ApiForm;
        idx: number;
    };
};

// = Tables ====================================================================

export type ApiTableC = {
    apis: ApiForm[];
    setApis(prev: any): void;
    setApi(prev: any): void;
};
