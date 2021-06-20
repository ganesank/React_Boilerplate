import * as Type from '../utils/@types/types';

const SET_MODAL_MSG: string = 'SET_MODAL_MSG';

export const setModalMsg: Type.ReduxActionPayload<string> = (data) => ({
    type: SET_MODAL_MSG,
    payload: data,
});

function modalReducer(state = '', action: Type.ModalReduxAction) {
    switch (action.type) {
        case SET_MODAL_MSG:
            return action.payload;
        default:
            return state;
    }
}

export default modalReducer;
