import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as tokenService from '../utils/token/tokenService';
import * as requestHelper from '../utils/helpers/requestHelper';
import * as Type from '../utils/@types/types';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/users`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/users`;

const LOGOUT_USER: string = 'LOGOUT_USER';
const LOGIN_USER: string = 'LOGIN_USER';
const SET_MSGS: string = 'SET_MSGS';

export const loginUser: Type.ActionThunk<Type.LoginForm> = (data) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const response = await requestHelper.loginUser(`${URL}/login`, data);

            if (!response.ok) {
                console.log(`${URL}/email/${response.error.verifyToken}`);
                return dispatch({
                    type: SET_MSGS,
                    payload: {
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    },
                });
            }

            tokenService.setToken(response.data);
            dispatch({ type: LOGIN_USER });
        } catch (error) {
            dispatch({
                type: SET_MSGS,
                payload: {
                    msgs: [error.message],
                    msgColor: 'danger',
                    icon: '⚠',
                    iconColor: 'danger',
                },
            });
        }
    };
};

export const logoutUser: Type.ActionPayload<null> = () => ({
    type: LOGOUT_USER,
});

export const deleteUser: Type.ActionThunk<Type.DeleteUserForm> = (data) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const response = await requestHelper.deleteUser(`${URL}/profile`, data);

            if (!response.ok) {
                const errors: string[] = [];
                Object.keys(response.error).forEach((key) => {
                    errors.push(response.error[key]);
                });
                return dispatch({
                    type: SET_MSGS,
                    payload: {
                        msgs: errors,
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    },
                });
            }

            dispatch({
                type: LOGOUT_USER,
            });
        } catch (error) {
            dispatch({
                type: SET_MSGS,
                payload: {
                    msgs: [error.message],
                    msgColor: 'danger',
                    icon: '⚠',
                    iconColor: 'danger',
                },
            });
        }
    };
};

const initialState: Type.UserState = tokenService.getUserFromToken();

const userReducer: Type.Reducer<Type.UserState, Type.UserAction> = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return tokenService.getUserFromToken();
        case LOGOUT_USER:
            tokenService.removeToken();
            return null;
        default:
            return state;
    }
};

export default userReducer;
