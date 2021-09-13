import { Msg } from '../types';

export type MsgState = Msg;

export type MsgAction = {
    type: string;
    payload: Msg;
};
