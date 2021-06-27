import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import msgReducer from './redux/msg';
import popupReducer from './redux/popup';
import userReducer from './redux/user';

const reducers = combineReducers({
    user: userReducer,
    popup: popupReducer,
    msg: msgReducer,
});

const middlewares = [ReduxThunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
