import { Popup } from '.';

export type PopupState = Popup;

export type PopupAction = {
    type: string;
    payload?: Popup;
};
