import { Popup } from '.';

export type PopupState = Popup;

export interface PopupAction {
    type: string;
    payload?: Popup;
}
