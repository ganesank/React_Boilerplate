import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as tokenService from '../utils/api/tokenService';
import * as reqService from '../utils/api/requestService';
import * as type from '../utils/@types/types';

const LOGOUT_USER: string = 'LOGOUT_USER';
const LOGIN_USER: string = 'LOGIN_USER';
const PORT = +process.env.REACT_APP_BACKEND_PORT!;
const HTTP = PORT! === 3001 ? 'http://' : 'https://';
const URL = `${HTTP}${
    process.env.REACT_APP_BACKEND_URL!.split(':')[0]
}:${PORT}/api/users`;

export const logoutUser = () => ({
    type: LOGOUT_USER,
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
        case LOGOUT_USER:
            tokenService.removeToken();
            return null;
        default:
            return state;
    }
}

export default userReducer;
