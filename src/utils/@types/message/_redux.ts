import { Msg } from '.';

export type MsgState = Msg;

export type MsgAction = {
    type: string;
    payload: Msg;
};
