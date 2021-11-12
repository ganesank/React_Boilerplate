import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEvent } from 'react';
import { HandleChange, HandleKeyboard, Obj } from '.';

export interface Input {
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
}

export interface Textarea {
    name: string;
    value: string;
    onChange(e: HandleChange): void;
    label?: string;
    handle?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    labelPosition?: string;
}

export interface Select {
    name: string;
    value: string;
    options: Obj[];
    onChange(e: HandleChange): void;
    label?: string;
    handle?: string;
    required?: boolean;
    disabled?: boolean;
    labelPosition?: string;
}

export interface Button {
    value?: string;
    icon?: string;
    faIcon?: IconProp;
    handle?: string;
    iconDirection?: string;
    direction?: string;
    disabled?: boolean;
    hover?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
    btnType?: string;
    btnColor?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
    href?: string;
}

export interface ButtonIcon {
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
}

export interface CTA {
    handle?: string;
    direction?: string;
    justify?: string;
    align?: string;
}

export interface LoadingSpinner {
    handle?: string;
    color?: string;
}

export interface Thead {
    id: string;
    friendlyName: string;
}
