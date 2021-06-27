import * as Type from '../utils/@types/types';

const SET_MSG: string = 'SET_MSG';
const REMOVE_MSG: string = 'REMOVE_MSG';

export const setMsg: Type.ActionPayload<Type.MsgPayload> = (data) => ({
    type: SET_MSG,
    payload: data,
});

export const removeMsg: Type.ActionPayload<null> = () => ({
    type: REMOVE_MSG,
});

const initialState: Type.MsgState = {
    msgs: [],
    msgColor: '',
    icon: '',
    iconColor: '',
};

const msgReducer: Type.Reducer<Type.MsgState, Type.MsgAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_MSG:
            return {
                msgs: [...action.payload.msgs],
                msgColor: action.payload.msgColor,
                icon: action.payload.icon,
                iconColor: action.payload.iconColor,
            };
        case REMOVE_MSG:
            return Object.create(initialState);
        default:
            return state;
    }
};

export default msgReducer;
