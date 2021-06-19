import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as tokenService from '../utils/token/tokenService';
import * as requestHelper from '../utils/helpers/requestHelper';
import * as Type from '../utils/@types/types';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const HTTP: string = PORT === 3001 ? 'http://' : 'https://';
const URL: string = `${HTTP}${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const LOGOUT_USER: string = 'LOGOUT_USER';
const LOGIN_USER: string = 'LOGIN_USER';
const LOGIN_ERROR: string = 'LOGIN_ERROR';

export const loginUser: Type.ReduxAction<Type.LoginForm> = (data) => {
    const url = `${URL}/login`;

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const response = await requestHelper.loginUser(url, data);
            console.log(response);
            tokenService.setToken(response);

            dispatch({
                type: LOGIN_USER,
            });
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message);
        }
    };
};

export const loginError: Type.ReduxActionPayload<Type.ErrorI> = (data) => ({
    type: LOGIN_ERROR,
    payload: data,
});

export const logoutUser: Type.ReduxActionPayload<null> = () => ({
    type: LOGOUT_USER,
});

export const deleteUser: Type.ReduxAction<Type.DeleteUserForm> = (data) => {
    const url = `${URL}/profile`;

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            await requestHelper.deleteUser(url, data);

            dispatch({
                type: LOGOUT_USER,
            });
        } catch (error) {
            throw new Error(error.message);
        }
    };
};

const initialState: Type.UserReduxInitialState = {
    state: tokenService.getUserFromToken(),
    error: {},
};

function userReducer(state = initialState, action: Type.UserReduxAction) {
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
