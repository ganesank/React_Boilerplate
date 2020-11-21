<h1 id='contents'>Table of Contents</h1>

- [REACT BOILERPLATE](#react-boilerplate)
  - [Start New React App](#start-new-react-app)
  - [Packages](#packages)
  - [Folder and Files](#folder-and-files)
  - [tsconfig.json](#tsconfigjson)
  - [Project](#project)
    - [CSS/SASS](#csssass)
    - [Index.html](#indexhtml)
      - [Manifest](#manifest)
    - [Components](#components)
      - [Navbar](#navbar)
    - [Utils](#utils)
      - [Types](#types)
      - [Requests](#requests)
        - [REQUEST HELPER](#request-helper)
        - [REQUEST SERVICE](#request-service)
        - [TOKEN SERVICE](#token-service)
    - [Redux](#redux)
      - [User's Redux](#users-redux)
      - [Store](#store)
    - [App.tsx](#apptsx)
    - [Index.tsx](#indextsx)

# REACT BOILERPLATE

## Start New React App

[Go Back to Contents](#contents)

- On `Terminal`

  - Start a new react app with typescript

    ```Bash
      npx create-react-app frontend --template typescript
    ```

## Packages

[Go Back to Contents](#contents)

- Install the following dependencies

  - **For now 11/20/2020** make sure you are using typescript version `4.0.5` (Today TypeScript latest version is given some errors)

  ```Bash
    # npm i react-router-dom redux react-redux redux-thunk redux-logger
    npm i react-router-dom
    npm i redux
    npm i react-redux
    npm i redux-thunk
    npm i redux-logger

    # npm i -D @types/react @types/react-dom @types/react-redux @types/react-router-dom @types/redux-logger @types/redux-thunk
    npm i -D @types/react
    npm i -D @types/react-dom
    npm i -D @types/react-redux
    npm i -D @types/react-router-dom
    npm i -D @types/redux-logger
    npm i -D @types/redux-thunk
  ```

## Folder and Files

[Go Back to Contents](#contents)

- Create folder and files, remove files

  ```Bash
    touch -n src/assets/fonts
    touch -n src/css/styles.sass
    touch -n src/css/1-helpers/_animations.sass
    touch -n src/css/1-helpers/_functions.sass
    touch -n src/css/1-helpers/_mixins.sass
    touch -n src/css/2-base/_base.sass
    touch -n src/css/2-base/_fonts.sass
    touch -n src/css/2-base/_variables.sass
    touch -n src/css/2-base/_typography.sass
    touch -n src/css/3-components/_navbar.sass
    touch -n src/css/3-components/_button.sass
    touch -n src/css/3-components/_error-msg.sass
    touch -n src/css/3-components/_form-login-signup.sass
    touch -n src/css/3-components/_footer.sass
    touch -n src/pages/HomePage.tsx + SignUpPage.tsx + LoginPage.tsx
    touch -n src/redux/user.tsx
    touch -n src/utils/api/apiService.ts + requestService.ts + tokenService.ts
    touch -n src/utils/@types/types.ts
    touch -n src/store.ts
    touch -n src/components/Header.tsx + FormLogin.tsx + FormSignUp.tsx + ErrorMsg.tsx + Footer.tsx
    rm src/logo.svg src/setupTests.ts src/App.test.tsx src/index.css src/App.css public/logo192.png public/logo512.png
  ```

## tsconfig.json

[Go Back to Contents](#contents)

- `tsconfig.json`

  - make sure your **jsx** is set to `react` and not `react-jsx` (using TypeScript version 4.0.5)

  ```JSON
    {
        "compilerOptions": {
            "target": "es5",
            "lib": ["dom", "dom.iterable", "esnext"],
            "allowJs": true,
            "skipLibCheck": true,
            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "strict": true,
            "forceConsistentCasingInFileNames": true,
            "noFallthroughCasesInSwitch": true,
            "module": "esnext",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "noEmit": true,
            "jsx": "react"
        },
        "include": ["src"]
    }
  ```

## Project

### CSS/SASS

[Go Back to Contents](#contents)

- in `src/css/1-helpers/_mixins.sass`

  ```SCSS
    @mixin abs-center($x: -50%, $y: -50%)
      position: absolute
      top: 50%
      left: 50%
      transform: translate($x, $y)

    @mixin mq-manager($breakpoint)
      @if $breakpoint == phone
        @media (max-width: 37.5em) //! 600px
          @content

        @if $breakpoint == tab-port
          @media (max-width: 56.25em) //! 900px
            @content

        @if $breakpoint == tab-land
          @media (max-width: 75em) //! 1200px
            @content

        @if $breakpoint == desk
          @media (max-width: 112.5em) //! 1800px
            @content

    @mixin google-font($family)
      @import url("http://fonts.googleapis.com/css?family=#{$family}")
  ```

- in `src/css/1-helpers/_functions.sass`

  ```SCSS
    @function resize($original, $percent)
      @return $original * $percent * 1rem
  ```

- in `src/css/1-helpers/_animations.sass`

  ```SCSS
    @keyframes move-in-from-left
      0%
        opacity: 0
        transform: translateX(-3rem)
      80%
        transform: translateX(1rem)
      100%
        opacity: 1
        transform: translate(0)

    @keyframes move-in-from-right
      0%
        opacity: 0
        transform: translateX(3rem)
      80%
        transform: translateX(-1rem)
      100%
        opacity: 1
        transform: translate(0)

    @keyframes move-in-from-bottom
      0%
        opacity: 0
        transform: translateY(3rem)
      100%
        opacity: 1
        transform: translate(0)

    @keyframes move-in-from-top
      0%
        opacity: 0
        transform: translateY(-3rem)
      100%
        opacity: 1
        transform: translate(0)
  ```

- in `src/css/2-base/_reset.sass`

  ```SCSS
    *,
    *::before,
    *::after
      margin: 0
      padding: 0
      box-sizing: border-box

    html
      height: 100vh
      width: 100vw

    body,
    #root
      height: 100%
      width: 100%
      font-family: sans-serif
      font-weight: 400
      line-height: 1
      font-size: 62.5%

    .app
      height: 100%
      display: flex
      flex-direction: column
      align-items: center
  ```

- in `src/css/2-base/_fonts.sass`

  ```SCSS
    //! Import from url
    @include google-font("Pacifico")

    //! Import from local
    @font-face
      font-family: 'PressStart2P-Regular'
      font-weight: 400
      src: url('../assets/fonts/PressStart2P-Regular.ttf') format('opentype')
  ```

- in `src/css/2-base/_variables.sass`

  ```SCSS
    $color-primary: rgb(55,90,128)
    $color-primary-dark: rgb(37, 61, 87)
    $color-secondary: rgb(48,48,48)
    $color-secondary-dark: rgb(41, 41, 41)

    $color-black: #0e0e0e
    $color-white: rgb(255,255,255)

    $colo-success: rgb(0,188,140)
    $color-info: rgb(52,152,219)
    $color-warning: rgb(243,156,18)
    $color-danger: rgb(231,76,59)

    $default-font-size: 1rem
    $default-page-size: 110rem
  ```

### Index.html

[Go Back to Contents](#contents)

- in `public/index.html`

  - Update content and title

  ```HTML
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Frontend"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Frontend</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
      </body>
    </html>
  ```

#### Manifest

[Go Back to Contents](#contents)

- in `public/manifest.json`

  ```JSON
    {
      "short_name": "React App",
      "name": "Create React App Sample",
      "icons": [
        {
          "src": "favicon.ico",
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/x-icon"
        }
      ],
      "start_url": ".",
      "display": "standalone",
      "theme_color": "#000000",
      "background_color": "#ffffff"
    }
  ```

### Components

#### Navbar

[Go Back to Contents](#contents)

- in `src/components/Navbar.tsx`

  ```TypeScript
    import React, { MouseEvent } from 'react';
    import { Link, useHistory } from 'react-router-dom';
    import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

    import { logoutUser } from '../redux/user';

    const Navbar: React.FC = () => {
        const user = useSelector((state: RootStateOrAny) => state.user);
        const dispatch = useDispatch();
        const history = useHistory();

        const handleLogout = (e: MouseEvent) => {
            e.preventDefault();
            dispatch(logoutUser());
            history.push('/');
        };

        const menu =
            user && user.firstName ? (
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="/" onClick={handleLogout}>
                            Log Out
                        </a>
                    </li>
                </ul>
            ) : (
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/signup">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            );

        return (
            <div className="navbar">
                <div className="navbar__logo">Roger Takeshita</div>
                <div className="navbar__menu-container">{menu}</div>
            </div>
        );
    };

    export default Navbar;
  ```

### Utils

#### Types

[Go Back to Contents](#contents)

- in `src/utils/@types/types.ts`

  ```TypeScript
    export type LoginForm = {
        email: string;
        password: string;
    };

    export type SignupForm = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    };

    export type SignUpPageProps = {
        signUpUser: (data: SignupForm) => void;
    };

    export type LoginPageProps = {
        loginUser: (data: LoginForm) => void;
    };

    export type FormLoginProps = {
        onSubmit: (data: LoginForm) => void;
    };

    export type FormSignUpProps = {
        onSubmit: (data: SignupForm) => void;
    };

    export type UserRedux = {
        _id: string;
        firstName: string;
        lastName: string;
    };

    export type RequestOptions = {
        method: string;
        headers: {
            'Content-Type': string;
            Authorization: string;
        };
        body?: any;
    };

    export type RequestHelper = (
        type: string,
        url: string,
        data?: {}
    ) => Promise<any>;
  ```

#### Requests

---

##### REQUEST HELPER

[Go Back to Contents](#contents)

- in `src/utils/api/requestHelper.ts`

  ```TypeScript
    import * as tokenService from './tokenService';
    import * as type from '../@types/types';

    const requestHelper: type.RequestHelper = async (type, url, data) => {
        const option: type.RequestOptions = {
            method: type,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + tokenService.getToken(),
            },
        };
        if (data && type !== 'GET') option.body = JSON.stringify(data);
        const response = await fetch(url, option);
        const responseJSON = await response.json();
        if (response.ok) return responseJSON;
        throw new Error(responseJSON.message);
    };

    export default requestHelper;
  ```

---

##### REQUEST SERVICE

[Go Back to Contents](#contents)

- in `src/utils/api/requestService.ts`

  ```TypeScript
    import requestHelper from './requestHelper';
    import * as type from '../@types/types';

    const getData = async (url: string) => {
        return await requestHelper('GET', url);
    };

    const addData = async (url: string, data: {}) => {
        return await requestHelper('POST', url, data);
    };

    const updateData = async (url: string, data: {}) => {
        return await requestHelper('PUT', url, data);
    };

    const deleteData = async (url: string, data: {}) => {
        return await requestHelper('DELETE', url, data);
    };

    const loginUser = async (url: string, data: type.LoginForm) => {
        return await requestHelper('POST', url, data);
    };

    const signUpUser = async (url: string, data: type.SignupForm) => {
        return await requestHelper('POST', url, data);
    };

    export { getData, addData, updateData, deleteData, loginUser, signUpUser };
  ```

---

##### TOKEN SERVICE

[Go Back to Contents](#contents)

- in `src/utils/api/tokenService.ts`

  ```TypeScript
    const setToken = (token: string): void => {
        if (token && typeof token === 'string') {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    };

    const updateToken = (token: string): void => {
        if (token) localStorage.setItem('token', token);
    };

    const getToken = (): string | null => {
        let token: string | null = localStorage.getItem('token');

        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            //! atob() - decoding a base-64 encoded string. It is used to decode a string of data which has been encoded using the btoa() method.
            //! JSON.parse - Converting back a json object(
            if (payload.exp < Date.now() / 1000) {
                localStorage.removeItem('token');
                token = null;
            }
        }

        return token;
    };

    const getUserFromToken = (): string | null => {
        const token: string | null = getToken();

        return token ? JSON.parse(atob(token.split('.')[1])) : null;
    };

    const removeToken = (): void => {
        localStorage.removeItem('token');
    };

    export { setToken, getToken, getUserFromToken, removeToken, updateToken };
  ```

---

### Redux

[Go Back to Contents](#contents)

#### User's Redux

[Go Back to Contents](#contents)

- in `src/redux/user.ts`

  ```TypeScript
    import { AnyAction } from 'redux';
    import { ThunkDispatch } from 'redux-thunk';

    import * as tokenService from '../utils/api/tokenService';
    import * as reqService from '../utils/api/requestService';
    import * as type from '../utils/@types/types';

    const LOGOUT_USER: string = 'LOGOUT_USER';
    const LOGIN_USER: string = 'LOGIN_USER';
    const URL: string = 'http://localhost:3001/api/users';

    export const logoutUser = () => ({
        type: LOGOUT_USER,
    });

    export const loginUser = (data: type.LoginForm) => {
        const url = `${URL}/login`;

        return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
            try {
                const token = await reqService.loginUser(url, data);
                tokenService.setToken(token);
                dispatch({
                    type: LOGIN_USER,
                });
            } catch (error) {
                throw new Error(error.message);
            }
        };
    };

    export const signUpUser = (data: type.SignupForm) => {
        const url = `${URL}/signup`;

        return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
            try {
                console.log(url);
                const token = await reqService.signUpUser(url, data);
                tokenService.setToken(token);
                dispatch({
                    type: LOGIN_USER,
                });
            } catch (error) {
                throw new Error(error.message);
            }
        };
    };

    function userReducer(
        state = tokenService.getUserFromToken(),
        action: { type: string; payload: type.UserRedux }
    ) {
        switch (action.type) {
            case LOGIN_USER:
                return tokenService.getUserFromToken();
            case LOGOUT_USER:
                tokenService.removeToken();
                return null;
            default:
                return state;
        }
    }

    export default userReducer;
  ```

#### Store

[Go Back to Contents](#contents)

- in `src/store.ts`

  ```TypeScript
    import { combineReducers, applyMiddleware, createStore } from 'redux';
    import ReduxThunk from 'redux-thunk';
    import logger from 'redux-logger';
    import userReducer from './redux/user';

    const reducers = combineReducers({
        user: userReducer,
    });

    const middlewares = [ReduxThunk, logger];
    const store = createStore(reducers, applyMiddleware(...middlewares));

    export default store;
  ```

### App.tsx

[Go Back to Contents](#contents)

- in `src/App.tsx`

  ```Bash
    import React from 'react';
    import { Redirect, Route, Switch } from 'react-router-dom';
    import { useSelector, RootStateOrAny } from 'react-redux';

    import Navbar from './components/Navbar';

    import HomePage from './pages/HomePage';
    import LoginPage from './pages/LoginPage';
    import SignUpPage from './pages/SignUpPage';

    const App: React.FC = () => {
        const user = useSelector((state: RootStateOrAny) => state.user);
        const route =
            user && user.firstName ? (
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route render={() => <Redirect to={{ pathname: '/' }} />} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignUpPage} />
                    <Route render={() => <Redirect to={{ pathname: '/' }} />} />
                </Switch>
            );

        return (
            <div className="app">
                <Navbar />
                {route}
            </div>
        );
    };

    export default App;
  ```

### Index.tsx

[Go Back to Contents](#contents)

- in `src/index.tsx`

  ```JavaScript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Route } from 'react-router-dom';
    import { Provider } from 'react-redux';

    import './css/styles.css';
    import store from './store';

    import App from './App';
    import reportWebVitals from './reportWebVitals';

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <Route component={App} />
                </Router>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
  ```
