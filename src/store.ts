import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import msgReducer from './redux/msg';
import popupReducer from './redux/popup';
import userReducer from './redux/user';

const reducers = combineReducers({
    user: userReducer,
    popup: popupReducer,
    msg: msgReducer,
});

const persistConfig = {
    key: 'redux-persist-key',
    storage,
    blacklist: ['user', 'msg', 'popup'],
    whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middlewares = [ReduxThunk, logger];
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default store;
