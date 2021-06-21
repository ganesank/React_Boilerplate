import * as Type from '../utils/@types/types';

const SET_MODAL_MSG: string = 'SET_MODAL_MSG';

export const setModalMsg: Type.ActionPayload<string> = (data) => ({
    type: SET_MODAL_MSG,
    payload: data,
});

// const initialState: Type.ModalState = {
//     visible: false,
//     message: '',
// };

const modalReducer: Type.Reducer<string, Type.ModalAction> = (state = '', action) => {
    switch (action.type) {
        case SET_MODAL_MSG:
            return action.payload;
        default:
            return state;
    }
};

export default modalReducer;
