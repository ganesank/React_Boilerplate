import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './redux/user';
import modalReducer from './redux/modal';

const reducers = combineReducers({
    user: userReducer,
    modal: modalReducer,
});

const middlewares = [ReduxThunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
