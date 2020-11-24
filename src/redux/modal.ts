const SET_MSG = 'SET_MSG';
const CLEAR_MSG = 'CLEAR_MSG';

export const setMsg = (data: string) => ({
    type: SET_MSG,
    payload: data,
});

export const clearMsg = () => ({
    type: CLEAR_MSG,
});

function msgReducer(state = '', action: { type: string; payload: string }) {
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
