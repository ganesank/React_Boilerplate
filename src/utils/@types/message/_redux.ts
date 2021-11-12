import { Msg } from '.';

export type MsgState = Msg;

export interface MsgAction {
    type: string;
    payload: Msg;
}
