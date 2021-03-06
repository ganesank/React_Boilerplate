import * as Type from '../utils/@types';

const SHOW_POPUP: string = 'SHOW_POPUP';
const HIDE_POPUP: string = 'HIDE_POPUP';

export const showPopup: Type.ActionPayload<Type.Popup> = (data) => ({
    type: SHOW_POPUP,
    payload: data,
});

export const hidePopup: Type.ActionPayload<null> = () => ({
    type: HIDE_POPUP,
});

const initialState: Type.PopupState = {
    visible: false,
    title: '',
    message: '',
    children: true,
    custom: '',
};

const popupReducer: Type.Reducer<Type.PopupState, Type.PopupAction> = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_POPUP:
            return {
                visible: true,
                title: action.payload?.title,
                message: action.payload?.message,
                children: action.payload?.children,
                custom: action.payload?.custom,
            };
        case HIDE_POPUP:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

export default popupReducer;
