import { User } from '.';

export type UserState = User | null;

export type UserAction = {
    type: string;
    payload?: User;
};
