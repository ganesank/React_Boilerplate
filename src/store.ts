import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './redux/user';
import popupReducer from './redux/popup';
import msgsReducer from './redux/messages';

const reducers = combineReducers({
    user: userReducer,
    popup: popupReducer,
    msgs: msgsReducer,
});

const middlewares = [ReduxThunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
