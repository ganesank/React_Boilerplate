import * as Type from '../utils/@types/types';

const SHOW_MODAL: string = 'SHOW_MODAL';
const HIDE_MODAL: string = 'HIDE_MODAL';

export const showModal: Type.ActionPayload<null> = () => ({
    type: SHOW_MODAL,
});

export const hideModal: Type.ActionPayload<null> = () => ({
    type: HIDE_MODAL,
});

const initialState: Type.ModalState = {
    visible: false,
    title: '',
    message: '',
};

const modalReducer: Type.Reducer<Type.ModalState, Type.ModalAction> = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                visible: true,
                title: action.payload?.title,
                message: action.payload?.message,
            };
        case HIDE_MODAL:
            return {
                visible: false,
                title: '',
                message: '',
            };
        default:
            return state;
    }
};

export default modalReducer;
