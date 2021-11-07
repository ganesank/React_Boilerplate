import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sass/styles.sass';
import store, { persistor } from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
