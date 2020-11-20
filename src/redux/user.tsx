import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as tokenService from '../utils/api/tokenService';
import * as reqService from '../utils/api/requestService';
import * as type from '../utils/@types/types';

const REMOVE_USER: string = 'REMOVE_USER';
const LOGIN_USER: string = 'LOGIN_USER';
const URL: string = 'http://localhost:3001/api/users';

export const removeUser = () => ({
    type: REMOVE_USER,
});

export const loginUser = (data: type.LoginForm) => {
    const url = `${URL}/login`;

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const token = await reqService.loginUser(url, data);
            tokenService.setToken(token);
            dispatch({
                type: LOGIN_USER,
            });
        } catch (error) {
            throw new Error(error.message);
        }
    };
};

export const signUpUser = (data: type.SignupForm) => {
    const url = `${URL}/signup`;

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            console.log(url);
            const token = await reqService.signUpUser(url, data);
            tokenService.setToken(token);
            dispatch({
                type: LOGIN_USER,
            });
        } catch (error) {
            throw new Error(error.message);
        }
    };
};

function userReducer(
    state = tokenService.getUserFromToken(),
    action: { type: string; payload: type.UserRedux }
) {
    switch (action.type) {
        case LOGIN_USER:
            return tokenService.getUserFromToken();
        case REMOVE_USER:
            tokenService.removeToken();
            return null;
        default:
            return state;
    }
}

export default userReducer;
