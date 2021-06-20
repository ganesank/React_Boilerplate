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
const SET_MSGS: string = 'SET_MSGS';

export const loginUser: Type.ReduxAction<Type.LoginForm> = (data) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const response = await requestHelper.loginUser(`${URL}/login`, data);

            if (!response.ok)
                return dispatch({
                    type: SET_MSGS,
                    payload: {
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    },
                });

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

export const logoutUser: Type.ReduxActionPayload<null> = () => ({
    type: LOGOUT_USER,
});

export const deleteUser: Type.ReduxAction<Type.DeleteUserForm> = (data) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        try {
            const response = await requestHelper.deleteUser(`${URL}/profile`, data);

            if (!response.ok)
                return dispatch({
                    type: SET_MSGS,
                    payload: {
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    },
                });

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

function userReducer(state = tokenService.getUserFromToken(), action: Type.UserReduxAction) {
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
