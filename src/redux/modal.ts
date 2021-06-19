import * as Type from '../utils/@types/types';

const SET_MSG: string = 'SET_MSG';
const CLEAR_MSG: string = 'CLEAR_MSG';

export const setMsg: Type.ReduxActionPayload<string> = (data) => ({
    type: SET_MSG,
    payload: data,
});

export const clearMsg: Type.ReduxActionPayload<string> = (_) => ({
    type: CLEAR_MSG,
});

function msgReducer(state = '', action: Type.ModalReduxAction) {
    switch (action.type) {
        case SET_MSG:
            return action.payload;
        case CLEAR_MSG:
            return '';
        default:
            return state;
    }
}

export default msgReducer;
