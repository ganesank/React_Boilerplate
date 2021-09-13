import { User } from '../types';

export type UserState = User | null;

export type UserAction = {
    type: string;
    payload?: User;
};
