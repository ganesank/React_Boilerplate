import { User } from '.';

export type UserState = User | null;

export interface UserAction {
    type: string;
    payload?: User;
}
