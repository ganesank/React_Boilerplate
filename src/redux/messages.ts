import * as Type from '../utils/@types/types';

const SET_MSGS: string = 'SET_MSGS';
const REMOVE_MSGS: string = 'REMOVE_MSGS';

export const setMsgs: Type.ActionPayload<Type.MsgsPayload> = (data) => ({
    type: SET_MSGS,
    payload: data,
});

export const removeMsgs: Type.ActionPayload<null> = () => ({
    type: REMOVE_MSGS,
});

const initialState: Type.MsgsState = {
    msgs: [],
    msgColor: '',
    icon: '',
    iconColor: '',
};

const msgsReducer: Type.Reducer<Type.MsgsState, Type.MsgsAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_MSGS:
            return {
                msgs: [...action.payload.msgs],
                msgColor: action.payload.msgColor,
                icon: action.payload.icon,
                iconColor: action.payload.iconColor,
            };
        case REMOVE_MSGS:
            return Object.create(initialState);
        default:
            return state;
    }
};

export default msgsReducer;
