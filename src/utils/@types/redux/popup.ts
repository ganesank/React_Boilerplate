import { Popup } from '../types';

export type PopupState = Popup;

export type PopupAction = {
    type: string;
    payload?: Popup;
};
