import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import msgsReducer from './redux/messages';
import popupReducer from './redux/popup';
import userReducer from './redux/user';

const reducers = combineReducers({
    user: userReducer,
    popup: popupReducer,
    msgs: msgsReducer,
});

const middlewares = [ReduxThunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
