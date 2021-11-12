<h1>Last Update - 11/11/2021</h1>

---

<h1 id='contents'>Table of Contents</h1>

- [LIVE LINK](#live-link)
- [REACT BOILERPLATE](#react-boilerplate)
  - [Start New React App](#start-new-react-app)
  - [Config](#config)
    - [Packages](#packages)
      - [Deploy To Netlify](#deploy-to-netlify)
    - [Environment Variables](#environment-variables)
    - [tsconfig.json](#tsconfigjson)
    - [Redux Persist](#redux-persist)
  - [Project](#project)
    - [Public Folder](#public-folder)
      - [Index.html](#indexhtml)
      - [Manifest](#manifest)
    - [Components](#components)
      - [ApiForm](#apiform)
      - [ApiTable](#apitable)
      - [Alert](#alert)
      - [Button](#button)
      - [ButtonIcon](#buttonicon)
      - [CTA](#cta)
      - [Footer](#footer)
      - [Headers](#headers)
      - [Input](#input)
      - [LoadingSpinner](#loadingspinner)
      - [Popup](#popup)
      - [Select](#select)
      - [Textarea](#textarea)
      - [UserDeleteForm](#userdeleteform)
      - [UserLoginForm](#userloginform)
      - [UserProfileForm](#userprofileform)
      - [UseResetPasswordForm](#useresetpasswordform)
      - [UserSignUpForm](#usersignupform)
      - [UserUpdatePasswordForm](#userupdatepasswordform)
    - [Pages](#pages)
      - [AboutPage](#aboutpage)
      - [ApiPage](#apipage)
      - [HomePage](#homepage)
      - [LoginPage](#loginpage)
      - [ProfilePage](#profilepage)
      - [ResetPasswordPage](#resetpasswordpage)
      - [SignUpPage](#signuppage)
    - [Redux](#redux)
      - [Msg](#msg)
      - [Popup](#popup-1)
      - [User](#user)
    - [SASS](#sass)
      - [Base](#base)
      - [Components](#components-1)
      - [Helpers](#helpers)
      - [Pages](#pages-1)
    - [Utils](#utils)
      - [@types](#types)
      - [Helpers](#helpers-1)
    - [Store](#store)
    - [App](#app)
    - [Index](#index)

# LIVE LINK

- [https://rogertakeshita-react-boilerplate.netlify.app/](https://rogertakeshita-react-boilerplate.netlify.app/)

# REACT BOILERPLATE

## Start New React App

[Go Back to Contents](#contents)

On your `Terminal` create a new **react** app with **typescript**

```Bash
  npx create-react-app frontend --template typescript
```

## Config

### Packages

[Go Back to Contents](#contents)

Install the following dependencies

```Bash
  # npm i react-router-dom@6 redux react-redux redux-thunk redux-logger node-sass @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
  npm i react-router-dom@6

  npm i redux
  npm i react-redux
  npm i redux-thunk
  npm i redux-logger
  npm i redux-persist

  npm i node-sass

  npm i @fortawesome/free-solid-svg-icons
  npm i @fortawesome/react-fontawesome
  npm i @fortawesome/fontawesome-svg-core

  # npm i -D @types/react @types/react-dom @types/react-redux @types/react-router-dom @types/redux-logger
  npm i -D @types/react-redux
  npm i -D @types/react-router-dom
  npm i -D @types/redux-logger
```

> **For now 11/11/2021** make sure you are using typescript version `4.0.3` (Today TypeScript latest version is given some errors)

#### Deploy To Netlify

[Go Back to Contents](#contents)

In `package.json`

- Update the build script

  ```JSON
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build && echo '/* /index.html 200' | cat > build/_redirects",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
  ```

### Environment Variables

[Go Back to Contents](#contents)

In `.env.local`

- With react the variables need to start with `REACT_APP_`

  ```Bash
    REACT_APP_BACKEND_URL="http://localhost"
    REACT_APP_BACKEND_PORT=3001
    REACT_APP_PASSWORD_LEN=7
    REACT_APP_ENV=development
  ```

### tsconfig.json

[Go Back to Contents](#contents)

In `tsconfig.json`

```JSON
  {
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "importHelpers": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx",
        "removeComments": true,
        "noEmitOnError": true,
        "noImplicitAny": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": false,
        "noUncheckedIndexedAccess": true,
        "typeRoots": ["./node_modules/@types", "./src/utils/@types/*"]
    },
    "include": ["src"],
    "exclude": ["**/node_modules"]
  }
```

### Redux Persist

[Go Back to Contents](#table-of-contents)

```Bash
  npm i redux-persist
```

In `src/store.ts`

- Import `persisStore` and `persistReducer` from `redux-persist`
- Import `storage` from `redux-persist/lib/storage`
  - The `storage` function will help us write the data into our `localStorage`

1. Create a persist config, where we need to provide

   - `key` will be the name of our variable in our local `localStorage`
   - `storage` is the storage function from `redux-persist`

   ```TypeScript
     const persistConfig = {
         key: 'redux-persist-key',
         storage,
         blacklist: ['user', 'msg', 'popup'],
         whitelist: [],
     };
   ```

   - `blacklist`, removes from persist
   - `whitelist`, only allows to persist

2. Crate our persist reducer

   - first argument is the configuration
   - second argument is the reducer, in our case our `combineReducer`

     ```TypeScript
       const persistedReducer = persistReducer(persistConfig, reducers);
     ```

3. After creating our `persistedReducer` then we switch the `reducers` with `persistedReducer`

   ```TypeScript
       const store = createStore(persistedReducer, applyMiddleware(...middlewares));
   ```

4. We create our `persitor` and export as normal property

   ```TypeScript
     export const persitor = persistStore(store)
   ```

```TypeScript
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
```

In `src/index.tsx`

- We need to import our `persitor`
- We need to import `PersistGate` from `redux-persist/integration/react`
- Then we need to wrap our `<App />` with `PersistGate` just like we do with normal redux using `<Provider>` and we need to provide the a `persistor`

```TypeScript
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
```

## Project

### Public Folder

#### Index.html

[Go Back to Contents](#contents)

In `public/index.html`

- Update content and title

  ```HTML
    <!DOCTYPE html>
    <html lang="en">
    <!--
        ______                             _____         _                _      _  _
        | ___ \                           |_   _|       | |              | |    (_)| |
        | |_/ /  ___    __ _   ___  _ __    | |    __ _ | | __  ___  ___ | |__   _ | |_   __ _
        |    /  / _ \  / _` | / _ \| '__|   | |   / _` || |/ / / _ \/ __|| '_ \ | || __| / _` |
        | |\ \ | (_) || (_| ||  __/| |      | |  | (_| ||   < |  __/\__ \| | | || || |_ | (_| |
        \_| \_| \___/  \__, | \___||_|      \_/   \__,_||_|\_\ \___||___/|_| |_||_| \__| \__,_|
                        __/ |
                        |___/
    -->

    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Roger Takeshita" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>Roger Takeshita</title>
    </head>

    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </body>

    </html>
  ```

#### Manifest

[Go Back to Contents](#contents)

In `public/manifest.json`

- Remove unused logos

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

> **NOTE:** The shared components will be moved into its own npm package in the future. And they will be redesigned to handle more cases.

```Text
  .
  ├── Alert.tsx
  ├── Button.tsx
  ├── ButtonIcon.tsx
  ├── CTA.tsx
  ├── Input.tsx
  ├── LoadingSpinner.tsx
  ├── Popup.tsx
  ├── Select.tsx
  └── Textarea.tsx
```

#### ApiForm

[Go Back to Contents](#table-of-contents)

In `src/components/api/ApiForm.tsx`

```TypeScript
  import { FC, useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { setMsg } from '../../redux/msg';
  import { hidePopup } from '../../redux/popup';
  import * as Type from '../../utils/@types';
  import * as Request from '../../utils/helpers/request';
  import { getEnvURL } from '../../utils/helpers/shared';
  import Alert from '../shared/Alert';
  import Button from '../shared/Button';
  import CTA from '../shared/CTA';
  import Input from '../shared/Input';
  import Select from '../shared/Select';
  import Textarea from '../shared/Textarea';

  const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/api');

  const ApiForm: FC<Type.ApiFormC> = ({ setApis, data }) => {
      const initialState: Type.ApiForm = data
          ? {
                _id: data.api._id,
                type: data.api.type,
                name: data.api.name,
                url: data.api.url,
                key: data.api.key,
                value: data.api.value,
                description: data.api.description,
                active: data.api.active.toString(),
            }
          : {
                _id: '',
                type: 'custom',
                name: '',
                url: '',
                key: '',
                value: '',
                description: '',
                active: 'true',
            };
      const [form, setForm] = useState(initialState);
      const dispatch = useDispatch();

      const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
          e.preventDefault();

          try {
              let response: Type.Response<Type.ApiForm>;

              if (form._id === '') {
                  response = await Request.postData(`${URL}/new`, form);
              } else {
                  response = await Request.updateData(`${URL}/${form._id}`, form);
              }

              if (!response.ok) {
                  return dispatch(
                      setMsg({
                          msgs: response.errors,
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      })
                  );
              }

              if (form._id === '') {
                  const updatedForm: Type.ApiForm = {
                      ...form,
                      _id: response.data._id,
                  };
                  setApis((prev: Type.ApiForm[]) => {
                      return [...prev, updatedForm];
                  });

                  setForm({
                      type: 'custom',
                      name: '',
                      url: '',
                      key: '',
                      value: '',
                      description: '',
                      active: 'true',
                  });
              } else {
                  setApis((prev: Type.ApiForm[]) => {
                      return [...prev.slice(0, data!.idx), form, ...prev.slice(data!.idx + 1, prev.length)];
                  });
              }

              dispatch(hidePopup());
          } catch (error: any) {
              dispatch(
                  setMsg({
                      msgs: [error.message],
                      msgColor: 'danger',
                      icon: '⚠',
                      iconColor: 'danger',
                  })
              );
          }
      };

      const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
          setForm({
              ...form,
              [name]: value,
          });
      };

      const isFormValid: Type.IsFormValidFn = () => {
          return !(
              form.name.trim() !== '' &&
              form.url.trim() !== '' &&
              form.key.trim() !== '' &&
              form.value.trim() !== ''
          );
      };

      const options: Type.Obj[] = [
          { key: 'true', value: 'Enabled' },
          { key: 'false', value: 'Disabled' },
      ];

      const typeOptions: Type.Obj[] = [
          { key: 'custom', value: 'Custom' },
          { key: 'discord', value: 'Discord' },
          { key: 'telegram', value: 'Telegram' },
          { key: 'twitter', value: 'Twitter' },
      ];

      return (
          <div className="api-form">
              <form onSubmit={handleSubmit}>
                  <Select
                      name="type"
                      value={form.type}
                      label="Type"
                      handle="api-type"
                      options={typeOptions}
                      onChange={handleChange}
                  />
                  <Input
                      placeholder="Name"
                      label="Name"
                      name="name"
                      value={form.name}
                      handle="api-name"
                      onChange={handleChange}
                  />
                  <Input
                      placeholder="URL"
                      label="URL"
                      name="url"
                      value={form.url}
                      handle="api-url"
                      onChange={handleChange}
                  />
                  <Input
                      placeholder="Secret Key"
                      label="Secret Key"
                      name="key"
                      value={form.key}
                      handle="api-key"
                      onChange={handleChange}
                      autoComplete="new-password"
                  />
                  <Input
                      placeholder="Secret Value"
                      label="Secret Value"
                      name="value"
                      value={form.value}
                      handle="api-value"
                      onChange={handleChange}
                      autoComplete="new-password"
                  />
                  <Textarea
                      placeholder="Description"
                      label="Description"
                      name="description"
                      handle="api-form__description"
                      value={form.description}
                      onChange={handleChange}
                  />
                  <Select
                      name="active"
                      value={form.active}
                      label="Status"
                      handle="api-active"
                      options={options}
                      onChange={handleChange}
                  />
                  <CTA>
                      <Button value={form._id ? 'Update' : 'Create'} type="submit" disabled={isFormValid()} />
                  </CTA>
              </form>
              <Alert />
          </div>
      );
  };

  export default ApiForm;
```

#### ApiTable

[Go Back to Contents](#table-of-contents)

In `src/components/api/ApiTable.tsx`

```TypeScript
  import { faCopy, faEdit, faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';
  import { FC, useEffect, useState } from 'react';
  import * as Type from '../../utils/@types';
  import ButtonIcon from '../shared/ButtonIcon';
  import CTA from '../shared/CTA';

  const ApiTable: FC<Type.ApiTableC> = ({ thead, apis, setApis, setApi }) => {
      const [visible, setVisible] = useState<{ [key: string]: boolean }>({});

      useEffect(() => {
          apis.forEach((api) => {
              setVisible((prev) => ({ ...prev, [api._id!]: false }));
          });
      }, [apis]);

      const handleToggle: Type.HandleClickDataFn<Type.ApiForm, null> = (_, api) => {
          setVisible((prev) => ({ ...prev, [api!._id!]: !prev[api!._id!] }));
      };

      const handleCopy: Type.HandleClickDataFn<string, null> = async (_, text) => {
          await navigator.clipboard.writeText(text!);
      };

      return (
          <div className="api-table">
              <table>
                  <thead>
                      <tr>
                          {thead.map((t, idx) => {
                              return (
                                  <th className={`api-table__${t.id}`} key={`thead_${idx}`}>
                                      {t.friendlyName}
                                  </th>
                              );
                          })}
                      </tr>
                  </thead>
                  <tbody>
                      {apis.map((api, idx) => {
                          const status: string = api.active === 'true' ? 'enabled' : 'disabled';
                          const id: string = api!._id!;
                          return (
                              <tr key={`row_${idx}`}>
                                  <th className={'api-table__type'}>{api.type}</th>
                                  <th className={'api-table__name'}>
                                      <div className={'api-table__no-overflow'}>
                                          <div className="api-table__no-overflow--text">{api.name}</div>
                                      </div>
                                  </th>
                                  <th className={'api-table__url'}>
                                      <div className={'api-table__no-overflow'}>
                                          <div className="api-table__no-overflow--text">
                                              <a rel="noopener noreferrer" target="_blank" href={api.url}>
                                                  {api.url}
                                              </a>
                                          </div>
                                          <ButtonIcon
                                              handle="copy copy--right"
                                              faIcon={faCopy}
                                              btnColor="grey"
                                              btnHoverColor="grey"
                                              onClick={(e) => handleCopy(e, api.url)}
                                          />
                                      </div>
                                  </th>
                                  <th className={'api-table__key'}>
                                      <div className={'api-table__no-overflow'}>
                                          <div className="api-table__no-overflow--text">
                                              {visible[id] ? api.key : '***'}
                                          </div>
                                          {visible[id] && (
                                              <ButtonIcon
                                                  handle="copy copy--right"
                                                  faIcon={faCopy}
                                                  btnColor="grey"
                                                  btnHoverColor="grey"
                                                  onClick={(e) => handleCopy(e, api.key)}
                                              />
                                          )}
                                      </div>
                                  </th>
                                  <th className={'api-table__value'}>
                                      <div className={'api-table__no-overflow'}>
                                          <div className="api-table__no-overflow--text">
                                              {visible[id] ? api.value : '***'}
                                          </div>
                                          {visible[id] && (
                                              <ButtonIcon
                                                  handle="copy copy--right"
                                                  faIcon={faCopy}
                                                  btnColor="grey"
                                                  btnHoverColor="grey"
                                                  onClick={(e) => handleCopy(e, api.value)}
                                              />
                                          )}
                                      </div>
                                  </th>
                                  <th className={'api-table__description'}>
                                      <div className={'api-table__no-overflow'}>
                                          <div className="api-table__no-overflow--text">{api.description}</div>
                                      </div>
                                  </th>
                                  <th className={'api-table__status'}>
                                      <CTA handle="api-table__cta">
                                          <div className={`api-table__status--${status}`}>{status}</div>
                                          <ButtonIcon
                                              faIcon={visible[id] ? faEye : faEyeSlash}
                                              btnColor={visible[id] ? 'success' : 'warning'}
                                              btnHoverColor={visible[id] ? 'success' : 'warning'}
                                              onClick={(e) => handleToggle(e, api)}
                                          />
                                          <ButtonIcon
                                              faIcon={faEdit}
                                              btnColor="primary"
                                              btnHoverColor="primary"
                                              onClick={(e) => setApi(e, api, idx)}
                                          />
                                          <ButtonIcon
                                              faIcon={faTrash}
                                              btnColor="danger"
                                              btnHoverColor="danger"
                                              onClick={(e) => setApis(e, api, idx)}
                                          />
                                      </CTA>
                                  </th>
                              </tr>
                          );
                      })}
                  </tbody>
              </table>
          </div>
      );
  };

  export default ApiTable;
```

#### Alert

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Alert.tsx`

```TypeScript
  import { FC, useEffect, useRef } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import { removeMsg } from '../../redux/msg';
  import * as Type from '../../utils/@types';

  const Alert: FC = () => {
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const dispatch = useDispatch();
      const timer: any = useRef();

      useEffect(() => {
          if (msg.msgs.length > 0) {
              timer.current = setTimeout(() => {
                  dispatch(removeMsg());
              }, 10000);
          }
          return () => {
              timer.current && clearTimeout(timer.current);
          };
      }, [dispatch, msg, timer]);

      const icon = msg.icon && (
          <div className={msg.iconColor ? `alert__icon alert__icon--${msg.iconColor}` : `alert__icon`}>{msg.icon}</div>
      );

      const messages = msg.msgs.map((item, idx) => {
          return (
              <div key={`msg_${idx}`} className={`alert__msg alert__msg--${msg.msgColor}`}>
                  {item}
              </div>
          );
      });

      if (msg.msgs.length === 0) return <></>;

      return (
          <div className="alert">
              {icon}
              <div className="alert__msg-container">{messages}</div>
          </div>
      );
  };

  export default Alert;
```

#### Button

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Button.tsx`

```TypeScript
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { FC } from 'react';
  import { Link } from 'react-router-dom';
  import * as Type from '../../utils/@types';

  const Button: FC<Type.Button> = ({
      value,
      icon,
      faIcon,
      handle,
      hover = false,
      iconDirection = 'left',
      direction = 'row',
      disabled = false,
      type = 'button',
      btnType = 'btn',
      btnColor,
      onClick,
      href = '/',
  }) => {
      if (direction === 'column' && (iconDirection === 'left' || iconDirection === 'right')) iconDirection = 'top';
      if (disabled) btnColor = 'disabled';
      if (icon && faIcon) faIcon = undefined;

      const handleClass: string = handle ? `${handle}` : '';
      const hoverClass: string = hover ? '' : `btn--no-hover `;
      const directionClass: string = `btn__${direction} `;
      const btnColorClass: string = btnColor ? `btn--${btnColor} ` : '';
      const customClass: string = `btn ${hoverClass}${btnColorClass}${directionClass}${handleClass}`;

      const valueClass: string = value ? `btn__${direction}__value btn__${direction}__value--${iconDirection} ` : '';
      const iconClass: string =
          icon || faIcon ? `btn__${direction}__icon btn__${direction}__icon--${value ? iconDirection : 'center'} ` : '';

      return (
          <div className={customClass}>
              {btnType === 'btn' && (
                  <button className={customClass} disabled={disabled} type={type} onClick={onClick ? onClick : () => ''}>
                      {value && <div className={valueClass}>{value}</div>}
                      {icon && <img src={icon} className={iconClass} alt="Icon" />}
                      {faIcon && <FontAwesomeIcon icon={faIcon} className={iconClass} />}
                  </button>
              )}
              {btnType === 'link' && (
                  <Link className={customClass} to={href} onClick={onClick}>
                      {value && <div className={valueClass}>{value}</div>}
                      {icon && <img src={icon} className={iconClass} alt="Icon" />}
                      {faIcon && <FontAwesomeIcon icon={faIcon} className={iconClass} />}
                  </Link>
              )}
          </div>
      );
  };

  export default Button;
```

#### ButtonIcon

[Go Back to Contents](#table-of-contents)

In `src/components/shared/ButtonIcon.tsx`

```TypeScript
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { FC } from 'react';
  import { Link } from 'react-router-dom';
  import * as Type from '../../utils/@types';

  const ButtonIcon: FC<Type.ButtonIcon> = ({
      icon,
      faIcon,
      handle,
      disabled = false,
      type = 'button',
      btnType = 'btn',
      btnColor,
      btnHoverColor,
      onClick,
      href = '/',
  }) => {
      if (disabled) {
          btnColor = 'disabled';
          btnHoverColor = 'disabled';
      }
      if (icon && faIcon) faIcon = undefined;

      const handleClass: string = handle ? `${handle}` : '';
      const btnColorClass: string = btnColor ? `btn-icon--${btnColor} ` : '';
      const btnHoverColorClass: string = btnHoverColor ? `btn-icon--hover-${btnHoverColor} ` : '';
      const customClass: string = `btn-icon ${btnColorClass}${btnHoverColorClass}${handleClass}`;
      const iconClass: string = 'btn-icon__icon';

      return (
          <div className={customClass}>
              {btnType === 'btn' && (
                  <button className={customClass} disabled={disabled} type={type} onClick={onClick ? onClick : () => ''}>
                      {icon && <img src={icon} className={iconClass} alt="Icon" />}
                      {faIcon && <FontAwesomeIcon icon={faIcon} className={iconClass} />}
                  </button>
              )}
              {btnType === 'link' && (
                  <Link className={customClass} to={href} onClick={onClick}>
                      {icon && <img src={icon} className={iconClass} alt="Icon" />}
                      {faIcon && <FontAwesomeIcon icon={faIcon} className={iconClass} />}
                  </Link>
              )}
          </div>
      );
  };

  export default ButtonIcon;
```

#### CTA

[Go Back to Contents](#table-of-contents)

In `src/components/shared/CTA.tsx`

```TypeScript
  import { FC } from 'react';
  import * as Type from '../../utils/@types';

  const CTA: FC<Type.CTA> = ({ handle, justify = 'flex-end', align = 'center', direction = 'row', children }) => {
      const handleClass: string = handle ? `${handle}` : '';
      const directionClass: string = `cta__${direction} `;
      const justifyClass: string = `cta__${direction}--justify-${justify} `;
      const alignClass: string = `cta__${direction}--align-${align} `;
      const customClass: string = `cta ${justifyClass}${alignClass}${directionClass}${handleClass}`;

      return <div className={customClass}>{children}</div>;
  };

  export default CTA;
```

#### Footer

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Footer.tsx`

```TypeScript
  import { FC } from 'react';
  import socialMedias from '../../assets/data/socialMedias';

  const Footer: FC = () => {
      return (
          <div className="footer">
              <div className="footer__footer-container container">
                  <div className="footer__left">
                      <ul className="footer__social-media-list">
                          {socialMedias.map((media, idx) => {
                              return (
                                  <li key={`social-media_${idx}`} className="footer__social-media-item tooltip">
                                      <a
                                          href={media.url}
                                          rel="noopener noreferrer"
                                          target="_blank"
                                          className="footer__link"
                                      >
                                          <img src={media.src} alt={media.name} className={media.class} />
                                      </a>
                                      <span className="tooltip__text">{media.name}</span>
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
                  <div className="footer__middle"></div>
                  <div className="footer__right">&copy; Roger Takeshita - 2021. All rights reserved.</div>
              </div>
          </div>
      );
  };

  export default Footer;
```

#### Headers

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Header.tsx`

```TypeScript
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { FC, useState } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import { Link, useLocation, useNavigate } from 'react-router-dom';
  import { logoutUser } from '../../redux/user';
  import * as Type from '../../utils/@types';

  const Header: FC = () => {
      const user = useSelector((state: RootStateOrAny): Type.User => state.user);
      const [visible, setVisible] = useState(false);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const location = useLocation();
      const routes: string[] = ['/api'];
      let removeStyle: string = '';

      const idx: number = routes.indexOf(location.pathname);
      if (idx !== -1) removeStyle = 'remove-style';
      if (visible) removeStyle = '';

      const handleLogout: Type.HandleClickFn = (e) => {
          e!.preventDefault();
          dispatch(logoutUser());
          setVisible(false);
          navigate('/');
      };

      const handleClick: Type.HandleClickFn = () => {
          setVisible((prev) => !prev);
      };

      const menu =
          user && user.firstName ? (
              <ul className="navbar__list">
                  <li className="navbar__item">
                      <Link className="navbar__link" to="/" onClick={() => setVisible(false)}>
                          HOME
                      </Link>
                  </li>
                  <li className="navbar__item">
                      <Link className="navbar__link" to="/about" onClick={() => setVisible(false)}>
                          ABOUT
                      </Link>
                  </li>
                  <li className="navbar__item">
                      <Link className="navbar__link" to="/api" onClick={() => setVisible(false)}>
                          API
                      </Link>
                  </li>
                  <li className="navbar__item">
                      <Link className="navbar__link" to="/profile" onClick={() => setVisible(false)}>
                          PROFILE
                      </Link>
                  </li>
                  <li className="navbar__item">
                      <a className="navbar__link" href="/" onClick={handleLogout}>
                          LOG OUT
                      </a>
                  </li>
              </ul>
          ) : (
              <ul className="navbar__list">
                  <li className="navbar__item">
                      <Link className="navbar__link" to="/" onClick={() => setVisible(false)}>
                          HOME
                      </Link>
                  </li>
                  <li className="navbar__item">
                      <Link className="navbar__link" to="/about" onClick={() => setVisible(false)}>
                          ABOUT
                      </Link>
                  </li>
                  <li className="navbar__item">
                      <Link className="navbar__link" to="/login" onClick={() => setVisible(false)}>
                          LOGIN
                      </Link>
                  </li>
                  <li className="navbar__item">
                      <Link className="navbar__link" to="/signup" onClick={() => setVisible(false)}>
                          SIGN UP
                      </Link>
                  </li>
              </ul>
          );

      return (
          <header>
              <div className={`navbar${removeStyle ? ` navbar--${removeStyle}` : ''}`}>
                  <div
                      className={`navbar__navbar-container${
                          removeStyle ? ` navbar__navbar-container--${removeStyle}` : ''
                      }`}
                  >
                      <div
                          onClick={handleClick}
                          className={visible ? 'navbar__bars navbar__bars--light' : 'navbar__bars navbar__bars--dark'}
                      >
                          <FontAwesomeIcon icon={faBars} />
                      </div>
                      <div className="navbar__logo-container">
                          <Link className="navbar__logo" to="/" onClick={() => setVisible(false)}>
                              Roger Takeshita
                          </Link>
                      </div>
                      <div className={`navbar__menu-container ${visible ? 'navbar__menu-container--visible' : ''}`}>
                          {menu}
                      </div>
                  </div>
              </div>
          </header>
      );
  };

  export default Header;
```

#### Input

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Input.tsx`

```TypeScript
  import { FC } from 'react';
  import * as Type from '../../utils/@types';

  const Input: FC<Type.Input> = ({
      name,
      value,
      onChange,
      onKeyPress,
      label,
      labelPosition = 'bottom',
      handle,
      placeholder = '',
      type = 'text',
      required = false,
      disabled = false,
      autoComplete = 'off',
      minLength,
  }) => {
      const labelClass: string = label ? `input-container--${labelPosition} ` : '';
      const handleClass: string = handle ? handle : '';
      const customClass: string = `input-container ${labelClass}${handleClass}`;

      return (
          <div className={customClass}>
              {!onKeyPress && (
                  <input
                      type={type}
                      name={name}
                      value={value}
                      onChange={onChange}
                      placeholder={placeholder}
                      required={required}
                      disabled={disabled}
                      autoComplete={autoComplete}
                      minLength={minLength ? minLength : 0}
                  />
              )}
              {onKeyPress && (
                  <input
                      type={type}
                      name={name}
                      value={value}
                      onChange={onChange}
                      onKeyPress={(e) => onKeyPress(e)}
                      placeholder={placeholder}
                      required={required}
                      disabled={disabled}
                      autoComplete={autoComplete}
                      minLength={minLength ? minLength : 0}
                  />
              )}
              {label && <label htmlFor={name}>{label}</label>}
          </div>
      );
  };

  export default Input;
```

#### LoadingSpinner

[Go Back to Contents](#table-of-contents)

In `src/components/shared/LoadingSpinner.tsx`

```TypeScript
  import { FC } from 'react';
  import * as Type from '../../utils/@types';

  const LoadingSpinner: FC<Type.LoadingSpinner> = ({ handle, color }) => {
      const colorClass: string = color ? `loading-spinner--${color}` : '';
      const customClass: string = `loading-spinner ${colorClass}`;

      return (
          <div className={handle}>
              <div className={customClass}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>
      );
  };

  export default LoadingSpinner;
```

#### Popup

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Popup.tsx`

```TypeScript
  import { faTimes } from '@fortawesome/free-solid-svg-icons';
  import { FC } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import { hidePopup } from '../../redux/popup';
  import * as Type from '../../utils/@types';
  import Button from '../shared/Button';

  const Popup: FC = ({ children }) => {
      const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
      const dispatch = useDispatch();

      const handleClose: Type.HandleClickFn = (e) => {
          e!.preventDefault();
          dispatch(hidePopup());
      };

      if (!popup.visible) return <></>;

      return (
          <div className="popup" onClick={handleClose}>
              <div className="popup__container" onClick={(e) => e.stopPropagation()}>
                  <Button
                      btnType="link"
                      btnColor="danger"
                      faIcon={faTimes}
                      href="/"
                      handle="popup__close"
                      onClick={handleClose}
                  />
                  {popup.title !== '' && (
                      <div className="popup__header">
                          <h3>{popup.title}</h3>
                      </div>
                  )}
                  {popup.message !== '' && <div className="popup__body">{popup.message}</div>}
                  {popup.children && <div className="popup__custom">{children}</div>}
              </div>
          </div>
      );
  };

  export default Popup;
```

#### Select

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Select.tsx`

```TypeScript
  import { FC } from 'react';
  import * as Type from '../../utils/@types';

  const Select: FC<Type.Select> = ({
      name,
      value,
      options,
      onChange,
      label,
      labelPosition = 'bottom',
      handle,
      required = false,
      disabled = false,
  }) => {
      const labelClass: string = label ? `select-container--${labelPosition} ` : '';
      const handleClass: string = handle ? handle : '';
      const customClass: string = `select-container ${labelClass}${handleClass}`;

      return (
          <div className={customClass}>
              <select title={name} name={name} value={value} onChange={onChange} required={required} disabled={disabled}>
                  {options.map((option) => {
                      return (
                          <option key={option.key} value={option.key}>
                              {option.value}
                          </option>
                      );
                  })}
              </select>
              {label && <label htmlFor={name}>{label}</label>}
          </div>
      );
  };

  export default Select;
```

#### Textarea

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Textarea.tsx`

```TypeScript
  import { FC } from 'react';
  import * as Type from '../../utils/@types';

  const Textarea: FC<Type.Textarea> = ({
      name,
      value,
      onChange,
      label,
      labelPosition = 'bottom',
      handle,
      placeholder,
      required = false,
      disabled = false,
  }) => {
      const labelClass: string = label ? `textarea-container--${labelPosition} ` : '';
      const handleClass: string = handle ? handle : '';
      const customClass: string = `textarea-container ${labelClass}${handleClass}`;

      return (
          <div className={customClass}>
              <textarea
                  name={name}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder ? placeholder : ''}
                  required={required}
                  disabled={disabled}
              />
              {label && <label htmlFor={name}>{label}</label>}
          </div>
      );
  };

  export default Textarea;
```

#### UserDeleteForm

[Go Back to Contents](#table-of-contents)

In `src/components/user/UserDeleteForm.tsx`

```TypeScript
  import { FC, useEffect, useState } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import { useNavigate } from 'react-router-dom';
  import { removeMsg } from '../../redux/msg';
  import { hidePopup } from '../../redux/popup';
  import { deleteUser } from '../../redux/user';
  import * as Type from '../../utils/@types';
  import Alert from '../shared/Alert';
  import Button from '../shared/Button';
  import CTA from '../shared/CTA';
  import Input from '../shared/Input';

  const UserDeleteForm: FC = () => {
      const initialState: Type.DeleteUserForm = {
          password: '',
      };
      const [form, setForm] = useState(initialState);
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const user = useSelector((state: RootStateOrAny): Type.User => state.user);
      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
          if (msg.msgs.length > 0) dispatch(removeMsg());
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      const handleSubmit: Type.HandleSubmitFn<{}> = (e) => {
          e.preventDefault();
          dispatch(deleteUser(form));
          if (!user) {
              dispatch(hidePopup());
              navigate('/');
          }
      };

      const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
          setForm({
              ...form,
              [name]: value,
          });
      };

      const isFormValid: Type.IsFormValidFn = () => {
          return !(form.password !== '');
      };

      return (
          <div className="user-delete-form" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSubmit}>
                  <CTA>
                      <Input
                          placeholder="Password"
                          name="password"
                          value={form.password}
                          type="password"
                          autoComplete="password"
                          onChange={handleChange}
                          required={true}
                      />
                      <Button value="Delete" btnColor="danger" type="submit" disabled={isFormValid()} />
                  </CTA>
              </form>
              <Alert />
          </div>
      );
  };

  export default UserDeleteForm;
```

#### UserLoginForm

[Go Back to Contents](#table-of-contents)

In `src/components/user/UserLoginForm.tsx`

```TypeScript
  import { FC, useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { showPopup } from '../../redux/popup';
  import { loginUser } from '../../redux/user';
  import * as Type from '../../utils/@types';
  import { validateEmail } from '../../utils/helpers/shared';
  import Button from '../shared/Button';
  import CTA from '../shared/CTA';
  import Input from '../shared/Input';

  const PASSWORD_LEN: number = process.env.REACT_APP_PASSWORD_LEN ? +process.env.REACT_APP_PASSWORD_LEN : 7;

  const UserLoginForm: FC = () => {
      const initialState: Type.LoginForm = {
          email: '',
          password: '',
      };
      const [form, setForm] = useState(initialState);
      const dispatch = useDispatch();

      const handleSubmit: Type.HandleSubmitFn<Type.LoginForm> = (e) => {
          e.preventDefault();
          dispatch(loginUser(form));
      };

      const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
          setForm({
              ...form,
              [name]: value,
          });
      };

      const handleResetPassword: Type.HandleClickFn = (e) => {
          e!.preventDefault();
          dispatch(
              showPopup({
                  title: 'Reset Password',
                  message: 'Enter your email to reset your password.',
                  children: true,
              })
          );
      };

      const isFormValid: Type.IsFormValidFn = () => {
          return !(form.email.trim() !== '' && form.password.trim() !== '' && validateEmail(form.email));
      };

      return (
          <div className="user-login-form">
              <form onSubmit={handleSubmit}>
                  <Input
                      placeholder="Email"
                      label="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="username"
                      required={true}
                      type="email"
                  />
                  <Input
                      placeholder="Password"
                      label="Password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="password"
                      required={true}
                      minLength={PASSWORD_LEN}
                      type="password"
                  />
                  <CTA>
                      <Button value="Sign Up" btnType="link" href="/signup" btnColor="warning" />
                      <Button value="Login" btnColor="success" type="submit" disabled={isFormValid()} />
                  </CTA>
              </form>
              <CTA justify="flex-start">
                  <a href="/" className="user-login-form__reset-password-link" onClick={handleResetPassword}>
                      Forgot your password?
                  </a>
              </CTA>
          </div>
      );
  };

  export default UserLoginForm;
```

#### UserProfileForm

[Go Back to Contents](#table-of-contents)

In `src/components/user/UserProfileForm.tsx`

```TypeScript
  import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { FC, useEffect, useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { setMsg } from '../../redux/msg';
  import { showPopup } from '../../redux/popup';
  import * as Type from '../../utils/@types';
  import * as Request from '../../utils/helpers/request';
  import { getEnvURL, validateEmail } from '../../utils/helpers/shared';
  import Button from '../shared/Button';
  import CTA from '../shared/CTA';
  import Input from '../shared/Input';

  const PASSWORD_LEN: number = process.env.REACT_APP_PASSWORD_LEN ? +process.env.REACT_APP_PASSWORD_LEN : 7;
  const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/user');

  const UserProfileForm: FC = () => {
      const initialState: Type.ProfileForm = {
          _id: '',
          firstName: '',
          lastName: '',
          email: '',
          telegramId: '',
          isTelegramVerified: false,
          password: '',
          newPassword: '',
          confirmNewPassword: '',
      };
      const [form, setForm] = useState(initialState);
      const dispatch = useDispatch();

      useEffect(() => {
          (async () => {
              try {
                  const response: Type.Response<Type.ProfileForm> = await Request.getData(`${URL}/profile`);
                  if (!response.ok)
                      return dispatch(
                          setMsg({
                              msgs: response.errors,
                              msgColor: 'danger',
                              icon: '⚠',
                              iconColor: 'danger',
                          })
                      );

                  setForm((prev) => {
                      return {
                          ...prev,
                          _id: response.data._id,
                          firstName: response.data.firstName,
                          lastName: response.data.lastName,
                          email: response.data.email,
                          telegramId: response.data.telegramId,
                          isTelegramVerified: response.data.isTelegramVerified,
                      };
                  });
              } catch (error: any) {
                  dispatch(
                      setMsg({
                          msgs: [error.message],
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      })
                  );
              }
          })();
      }, [dispatch, setForm]);

      const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
          e.preventDefault();

          try {
              const response = await Request.updateData(`${URL}/profile`, form);

              if (!response.ok) {
                  const errors = Object.keys(response.error).map((key) => {
                      return response.error[key];
                  });

                  return dispatch(
                      setMsg({
                          msgs: errors,
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      })
                  );
              }

              if (response.data && response.data.verifyToken) console.log(`${URL}/email/${response.data.verifyToken}`);

              setForm((prev) => {
                  return {
                      ...prev,
                      newPassword: '',
                      confirmNewPassword: '',
                  };
              });

              dispatch(
                  showPopup({
                      title: 'Profile Updated',
                      message: 'Your profile has been updated successfully',
                      children: false,
                  })
              );
          } catch (error: any) {
              dispatch(
                  setMsg({
                      msgs: [error.message],
                      msgColor: 'danger',
                      icon: '⚠',
                      iconColor: 'danger',
                  })
              );
          }
      };

      const handleDelete: Type.HandleClickFn = (e) => {
          e!.preventDefault();
          dispatch(
              showPopup({
                  visible: true,
                  title: 'Delete Acc',
                  message: 'Are you sure you want to delete your account?',
                  children: true,
              })
          );
      };

      const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
          setForm({
              ...form,
              [name]: value,
          });
      };

      const isFormValid: Type.IsFormValidFn = () => {
          return !(
              form.firstName.trim() !== '' &&
              form.lastName.trim() !== '' &&
              form.email.trim() !== '' &&
              form.password.trim() !== '' &&
              form.newPassword.trim() === form.confirmNewPassword.trim() &&
              validateEmail(form.email)
          );
      };

      return (
          <div className="user-profile-form">
              <form onSubmit={handleSubmit}>
                  <div className="split-2">
                      <Input
                          placeholder="First Name"
                          label="First Name"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required={true}
                      />
                      <Input
                          placeholder="Last Name"
                          label="Last Name"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required={true}
                      />
                  </div>
                  <Input
                      placeholder="Email"
                      label="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="username"
                      required={true}
                  />
                  <div className="user-profile-form__telegram-container">
                      <Input
                          placeholder="Telegram ID"
                          label="Telegram ID"
                          name="telegramId"
                          value={form.telegramId}
                          onChange={handleChange}
                          handle="user-profile-form__telegram-container__telegram"
                      />
                      <div
                          className={
                              form.isTelegramVerified
                                  ? 'user-profile-form__icon user-profile-form__icon--activated'
                                  : 'user-profile-form__icon'
                          }
                      >
                          <div className="tooltip">
                              <FontAwesomeIcon icon={faLocationArrow} />
                              <span className="tooltip__text">
                                  {form.isTelegramVerified ? 'Verified' : 'Not Verified'}
                              </span>
                          </div>
                      </div>
                  </div>
                  <div className="split-2">
                      <Input
                          placeholder="New Password"
                          label="New Password"
                          name="newPassword"
                          value={form.newPassword}
                          onChange={handleChange}
                          autoComplete="new-password"
                          minLength={PASSWORD_LEN}
                          type="password"
                      />
                      <Input
                          placeholder="Confirm New Password"
                          label="Confirm New Password"
                          name="confirmNewPassword"
                          value={form.confirmNewPassword}
                          onChange={handleChange}
                          autoComplete="new-password"
                          minLength={PASSWORD_LEN}
                          type="password"
                      />
                  </div>
                  <CTA>
                      <Input
                          placeholder="Password"
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                          required={true}
                          autoComplete="new-password"
                          minLength={PASSWORD_LEN}
                          type="password"
                      />
                      <Button value="Update" type="submit" disabled={isFormValid()} />
                  </CTA>
              </form>
              <CTA justify="flex-start">
                  <a href="/" className="user-profile-form__delete-link" onClick={handleDelete}>
                      Delete Account
                  </a>
              </CTA>
          </div>
      );
  };

  export default UserProfileForm;
```

#### UseResetPasswordForm

[Go Back to Contents](#table-of-contents)

In `src/components/user/UserResetPasswordForm.tsx`

```TypeScript
  import { FC, useEffect, useState } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import { useNavigate } from 'react-router-dom';
  import { removeMsg, setMsg } from '../../redux/msg';
  import * as Type from '../../utils/@types';
  import * as Request from '../../utils/helpers/request';
  import { getEnvURL, validateEmail } from '../../utils/helpers/shared';
  import Alert from '../shared/Alert';
  import Button from '../shared/Button';
  import CTA from '../shared/CTA';
  import Input from '../shared/Input';

  const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/user');

  const UserResetPasswordForm: FC = () => {
      const initialState: Type.ResetPasswordForm = {
          email: '',
      };
      const [form, setForm] = useState(initialState);
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
          if (msg.msgs.length > 0) dispatch(removeMsg());
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
          e.preventDefault();
          try {
              const response: Type.Response<Type.ResetUserPasswordRes> = await Request.postData(`${URL}/password`, form);

              if (!response.ok)
                  return dispatch(
                      setMsg({
                          msgs: response.errors,
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      })
                  );

              dispatch(
                  setMsg({
                      msgs: [response.data.message],
                      msgColor: 'success',
                      icon: '✓',
                      iconColor: 'success',
                  })
              );
              setForm({
                  email: '',
              });

              if (response.data.verifyToken) navigate(`/reset-password/${response.data.verifyToken}`);
          } catch (error: any) {
              dispatch(
                  setMsg({
                      msgs: [error.message],
                      msgColor: 'danger',
                      icon: '⚠',
                      iconColor: 'danger',
                  })
              );
          }
      };

      const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
          setForm({
              ...form,
              [name]: value,
          });
      };

      const isFormValid: Type.IsFormValidFn = () => {
          return !(form.email !== '' && validateEmail(form.email));
      };

      return (
          <div className="user-reset-password-form" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSubmit}>
                  <Input
                      placeholder="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="username"
                      required={true}
                  />
                  <CTA handle="user-reset-password-form__cta">
                      <Button value="Reset" type="submit" disabled={isFormValid()} />
                  </CTA>
              </form>
              <Alert />
          </div>
      );
  };

  export default UserResetPasswordForm;
```

#### UserSignUpForm

[Go Back to Contents](#table-of-contents)

In `src/components/user/UserSignUpForm.tsx`

```TypeScript
  import { FC, useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { setMsg } from '../../redux/msg';
  import { showPopup } from '../../redux/popup';
  import * as Type from '../../utils/@types';
  import * as Request from '../../utils/helpers/request';
  import { getEnvURL, validateEmail } from '../../utils/helpers/shared';
  import Button from '../shared/Button';
  import CTA from '../shared/CTA';
  import Input from '../shared/Input';

  const PASSWORD_LEN: number = process.env.REACT_APP_PASSWORD_LEN ? +process.env.REACT_APP_PASSWORD_LEN : 7;
  const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/user');

  const UserSignUpForm: FC = () => {
      const initialState: Type.SignUpForm = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
      };
      const [form, setForm] = useState(initialState);
      const dispatch = useDispatch();

      const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
          e.preventDefault();
          try {
              const response: Type.Response<Type.SignUpUserRes> = await Request.postData(`${URL}/signup`, form);
              if (!response.ok)
                  return dispatch(
                      setMsg({
                          msgs: response.errors,
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      })
                  );

              if (response.data && response.data.verifyToken)
                  dispatch(
                      showPopup({
                          title: 'Verify Email',
                          custom: `${URL}/email/${response.data.verifyToken}`,
                          children: true,
                      })
                  );

              dispatch(
                  setMsg({
                      msgs: [response.data.message],
                      msgColor: 'success',
                      icon: '✓',
                      iconColor: 'success',
                  })
              );
              setForm({
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
              });
          } catch (error: any) {
              dispatch(
                  setMsg({
                      msgs: [error.message],
                      msgColor: 'danger',
                      icon: '⚠',
                      iconColor: 'danger',
                  })
              );
          }
      };

      const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
          setForm({
              ...form,
              [name]: value,
          });
      };

      const isFormValid: Type.IsFormValidFn = () => {
          return !(
              form.firstName.trim() !== '' &&
              form.lastName.trim() !== '' &&
              form.email.trim() !== '' &&
              form.password.trim() !== '' &&
              form.confirmPassword.trim() !== '' &&
              form.confirmPassword.trim() === form.password.trim() &&
              validateEmail(form.email)
          );
      };

      return (
          <div className="user-signup-form">
              <form onSubmit={handleSubmit}>
                  <div className="split-2">
                      <Input
                          placeholder="First Name"
                          label="First Name"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required={true}
                      />
                      <Input
                          placeholder="Last Name"
                          label="Last Name"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required={true}
                      />
                  </div>
                  <Input
                      placeholder="Email"
                      label="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="username"
                      required={true}
                      type="email"
                  />
                  <div className="split-2">
                      <Input
                          placeholder="Password"
                          label="Password"
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                          autoComplete="new-password"
                          minLength={PASSWORD_LEN}
                          type="password"
                      />
                      <Input
                          placeholder="New Password"
                          label="New Password"
                          name="confirmPassword"
                          value={form.confirmPassword}
                          onChange={handleChange}
                          autoComplete="new-password"
                          minLength={PASSWORD_LEN}
                          type="password"
                      />
                  </div>
                  <CTA>
                      <Button value="Login" btnType="link" href="/login" btnColor="warning" />
                      <Button value="Sign Up" btnColor="success" type="submit" disabled={isFormValid()} />
                  </CTA>
              </form>
          </div>
      );
  };

  export default UserSignUpForm;
```

#### UserUpdatePasswordForm

[Go Back to Contents](#table-of-contents)

In `src/components/user/UserUpdatePasswordForm.tsx`

```TypeScript
  import { FC, useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { useNavigate } from 'react-router-dom';
  import { setMsg } from '../../redux/msg';
  import * as Type from '../../utils/@types';
  import * as Request from '../../utils/helpers/request';
  import { getEnvURL } from '../../utils/helpers/shared';
  import Button from '../shared/Button';
  import CTA from '../shared/CTA';
  import Input from '../shared/Input';

  const PASSWORD_LEN: number = process.env.REACT_APP_PASSWORD_LEN ? +process.env.REACT_APP_PASSWORD_LEN : 7;
  const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/user');

  const UserUpdatePasswordForm: FC<Type.UserUpdatePasswordFormC> = ({ token }) => {
      const initialState: Type.UpdatePasswordForm = {
          password: '',
          confirmPassword: '',
      };
      const [form, setForm] = useState(initialState);
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
          e.preventDefault();
          const response: Type.Response<Type.UpdateUserPasswordRes> = await Request.updateData(
              `${URL}/password/${token}`,
              form,
              false
          );

          if (!response.ok)
              return dispatch(
                  setMsg({
                      msgs: response.errors,
                      msgColor: 'danger',
                      icon: '⚠',
                      iconColor: 'danger',
                  })
              );

          navigate('/login');
      };

      const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
          setForm({
              ...form,
              [name]: value,
          });
      };

      const isFormValid: Type.IsFormValidFn = () => {
          return !(form.password.trim() !== '' && form.confirmPassword.trim() !== '');
      };

      return (
          <div className="user-update-password-form">
              <form onSubmit={handleSubmit}>
                  <Input
                      placeholder="New Password"
                      label="New Password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                      type="password"
                      minLength={PASSWORD_LEN}
                  />
                  <Input
                      placeholder="Confirm New Password"
                      label="Confirm New Password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      autoComplete="new-password"
                      type="password"
                      minLength={PASSWORD_LEN}
                  />
                  <CTA>
                      <Button value="Reset" type="submit" disabled={isFormValid()} />
                  </CTA>
              </form>
          </div>
      );
  };

  export default UserUpdatePasswordForm;
```

### Pages

#### AboutPage

[Go Back to Contents](#contents)

In `src/pages/AboutPage.tsx`

```TypeScript
  import { FC } from 'react';
  import technologies from '../assets/data/technologies';
  import RogerTakeshita from '../assets/images/profile.jpeg';

  const AboutPage: FC = () => {
      return (
          <div className="about-page">
              <div className="container">
                  <h1>ABOUT ME</h1>
                  <img className="about-page__picture" src={RogerTakeshita} alt="Roger Takeshita" />
                  <h2 className="about-page__text">Roger Takeshita</h2>
                  <h4 className="about-page__text">Full-Stack Developer</h4>
                  <div className="about-page__technologies">
                      {technologies.map((tech, idx) => {
                          return (
                              <div key={`tech_${idx}`} className="about-page__tech-container">
                                  <img className={tech.class} src={tech.src} alt="Tech" />
                                  <p className="about-page__tech-label">{tech.name}</p>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>
      );
  };

  export default AboutPage;
```

#### ApiPage

[Go Back to Contents](#table-of-contents)

In `src/pages/ApiPage.tsx`

```TypeScript
  import { faPlus } from '@fortawesome/free-solid-svg-icons';
  import { FC, useEffect, useState } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import ApiForm from '../components/api/ApiForm';
  import ApiTable from '../components/api/ApiTable';
  import Alert from '../components/shared/Alert';
  import Button from '../components/shared/Button';
  import CTA from '../components/shared/CTA';
  import Popup from '../components/shared/Popup';
  import { removeMsg, setMsg } from '../redux/msg';
  import { hidePopup, showPopup } from '../redux/popup';
  import * as Type from '../utils/@types';
  import * as Request from '../utils/helpers/request';
  import { getEnvURL } from '../utils/helpers/shared';

  const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/api');

  const ApiPage: FC = () => {
      const initialState: { api: Type.ApiForm; idx: number } = {
          api: {
              _id: '',
              type: '',
              name: '',
              url: '',
              key: '',
              value: '',
              description: '',
              active: 'true',
          },
          idx: -1,
      };
      const [api, setApi] = useState(initialState);
      const [apis, setApis] = useState<Type.ApiForm[]>([]);
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
      const dispatch = useDispatch();
      const thead: Type.Thead[] = [
          { id: 'type', friendlyName: 'Type' },
          { id: 'name', friendlyName: 'Name' },
          { id: 'url', friendlyName: 'URL' },
          { id: 'key', friendlyName: 'API Secret Key' },
          { id: 'value', friendlyName: 'API Secret Value' },
          { id: 'description', friendlyName: 'Description' },
          { id: 'status', friendlyName: 'Status' },
      ];

      useEffect(() => {
          if (!popup.visible) {
              setApi({
                  api: {
                      _id: '',
                      type: '',
                      name: '',
                      url: '',
                      key: '',
                      value: '',
                      description: '',
                      active: 'true',
                  },
                  idx: -1,
              });
          }
      }, [popup]);

      useEffect(() => {
          if (popup.visible) dispatch(hidePopup());
          if (msg.msgs.length > 0) dispatch(removeMsg());
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      useEffect(() => {
          (async () => {
              try {
                  const response: Type.Response<Type.ApiForm[]> = await Request.postData(URL, {});
                  if (!response.ok)
                      return dispatch(
                          setMsg({
                              msgs: response.errors,
                              msgColor: 'danger',
                              icon: '⚠',
                              iconColor: 'danger',
                          })
                      );

                  const formatted: Type.ApiForm[] = response.data.map((api: Type.ApiForm) => ({
                      ...api,
                      active: api.active.toString(),
                  }));
                  setApis(formatted);
              } catch (error: any) {
                  dispatch(
                      setMsg({
                          msgs: [error.message],
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      })
                  );
              }
          })();
      }, [dispatch]);

      const handleAdd: Type.HandleClickFn = () => {
          dispatch(
              showPopup({
                  title: 'Add New API',
                  children: true,
              })
          );
      };

      const handleEdit: Type.HandleClickDataFn<Type.ApiForm, number> = (_, api, idx) => {
          dispatch(
              showPopup({
                  title: 'Edit API',
                  children: true,
              })
          );
          setApi({ api: api!, idx: idx! });
      };

      const handleDelete: Type.HandleClickDataFn<Type.ApiForm, number> = async (_, api, idx) => {
          try {
              const response = await Request.deleteData(`${URL}/${api!._id}`, {});
              if (!response.ok)
                  return dispatch(
                      setMsg({
                          msgs: [response.error.message],
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      })
                  );

              setApis((prev: Type.ApiForm[]) => {
                  return [...prev.slice(0, idx!), ...prev.slice(idx! + 1, prev.length)];
              });
          } catch (error: any) {
              dispatch(
                  setMsg({
                      msgs: [error.message],
                      msgColor: 'danger',
                      icon: '⚠',
                      iconColor: 'danger',
                  })
              );
          }
      };

      return (
          <div className="api-page">
              <div className="menu">
                  <CTA handle="menu__sub-menu">
                      <Button btnColor="success" onClick={handleAdd} faIcon={faPlus} />
                  </CTA>
              </div>
              <div className="container">
                  <h1>API</h1>
                  <ApiTable thead={thead} apis={apis} setApis={handleDelete} setApi={handleEdit} />
                  {!popup.visible && <Alert />}
                  <Popup>
                      <ApiForm setApis={setApis} data={api} />
                  </Popup>
              </div>
          </div>
      );
  };

  export default ApiPage;
```

#### HomePage

[Go Back to Contents](#table-of-contents)

In `src/pages/HomePage.tsx`

```TypeScript
  import { FC } from 'react';
  import { RootStateOrAny, useSelector } from 'react-redux';
  import * as Type from '../utils/@types';

  const HomePage: FC = () => {
      const user = useSelector((state: RootStateOrAny): Type.User => state.user);
      return (
          <div className="home-page">
              <div className="container">
                  <h1>HOME PAGE</h1>
                  <br />
                  <h2>Welcome {user ? `${user.firstName} ${user.lastName}` : 'Guest'}</h2>
              </div>
          </div>
      );
  };

  export default HomePage;
```

#### LoginPage

[Go Back to Contents](#table-of-contents)

In `src/pages/LoginPage.tsx`

```TypeScript
  import { FC, useEffect } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import Alert from '../components/shared/Alert';
  import Popup from '../components/shared/Popup';
  import UserLoginForm from '../components/user/UserLoginForm';
  import UserResetPasswordForm from '../components/user/UserResetPasswordForm';
  import { removeMsg } from '../redux/msg';
  import { hidePopup } from '../redux/popup';
  import * as Type from '../utils/@types';

  const LoginPage: FC = () => {
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
      const dispatch = useDispatch();

      useEffect(() => {
          if (popup.visible) dispatch(hidePopup());
          if (msg.msgs.length > 0) dispatch(removeMsg());
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      const customPopup = popup.custom && (
          <Popup>
              <div className="popup__custom__link">
                  <a href={popup.custom}>Click Here</a>
              </div>
          </Popup>
      );

      const normalPopup = !popup.custom && (
          <Popup>
              <UserResetPasswordForm />
          </Popup>
      );

      return (
          <div className="login-page">
              <div className="container">
                  <h1>LOGIN</h1>
                  <div className="login-page__form">
                      <UserLoginForm />
                      {!popup.visible && <Alert />}
                      {customPopup}
                      {normalPopup}
                  </div>
              </div>
          </div>
      );
  };

  export default LoginPage;
```

#### ProfilePage

[Go Back to Contents](#table-of-contents)

In `src/pages/ProfilePage.tsx`

```TypeScript
  import { FC, useEffect } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import Alert from '../components/shared/Alert';
  import Popup from '../components/shared/Popup';
  import UserDeleteForm from '../components/user/UserDeleteForm';
  import UserProfileForm from '../components/user/UserProfileForm';
  import { removeMsg } from '../redux/msg';
  import { hidePopup } from '../redux/popup';
  import * as Type from '../utils/@types';

  const ProfilePage: FC = () => {
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
      const dispatch = useDispatch();

      useEffect(() => {
          if (popup.visible) dispatch(hidePopup());
          if (msg.msgs.length > 0) dispatch(removeMsg());
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      return (
          <div className="profile-page">
              <div className="container">
                  <h1>PROFILE</h1>
                  <UserProfileForm />
                  {!popup.visible && <Alert />}
                  <Popup>
                      <UserDeleteForm />
                  </Popup>
              </div>
          </div>
      );
  };

  export default ProfilePage;
```

#### ResetPasswordPage

[Go Back to Contents](#table-of-contents)

In `src/pages/ResetPasswordPage.tsx`

```TypeScript
  import { FC, useEffect } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import { useParams } from 'react-router-dom';
  import Alert from '../components/shared/Alert';
  import UserUpdatePasswordForm from '../components/user/UserUpdatePasswordForm';
  import { removeMsg } from '../redux/msg';
  import * as Type from '../utils/@types';

  const ResetPasswordPage: FC = () => {
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const dispatch = useDispatch();
      const { token } = useParams();

      useEffect(() => {
          if (msg.msgs.length > 0) dispatch(removeMsg());
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      return (
          <div className="reset-password-page">
              <div className="container">
                  <h1>Reset Password</h1>
                  <UserUpdatePasswordForm token={token!} />
                  <Alert />
              </div>
          </div>
      );
  };

  export default ResetPasswordPage;
```

#### SignUpPage

[Go Back to Contents](#table-of-contents)

In `src/pages/SignUpPage.tsx`

```TypeScript
  import { FC, useEffect } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import Alert from '../components/shared/Alert';
  import Popup from '../components/shared/Popup';
  import UserSignUpForm from '../components/user/UserSignUpForm';
  import { removeMsg } from '../redux/msg';
  import { hidePopup } from '../redux/popup';
  import * as Type from '../utils/@types';

  const SignUpPage: FC = () => {
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
      const dispatch = useDispatch();

      useEffect(() => {
          if (popup.visible) dispatch(hidePopup());
          if (msg.msgs.length > 0) dispatch(removeMsg());
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      return (
          <div className="signup-page">
              <div className="container">
                  <h1>SIGN UP</h1>
                  <div className="signup-page__form">
                      <UserSignUpForm />
                      {!popup.visible && <Alert />}
                      <Popup>
                          <div className="popup__custom__link">
                              <a href={popup.custom}>Click Here</a>
                          </div>
                      </Popup>
                  </div>
              </div>
          </div>
      );
  };

  export default SignUpPage;
```

### Redux

#### Msg

[Go Back to Contents](#table-of-contents)

In `src/redux/msg.ts`

```TypeScript
  import * as Type from '../utils/@types';

  const SET_MSG: string = 'SET_MSG';
  const REMOVE_MSG: string = 'REMOVE_MSG';

  export const setMsg: Type.ActionPayload<Type.Msg> = (data) => ({
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
              return Object.assign({}, initialState);
          default:
              return state;
      }
  };

  export default msgReducer;
```

#### Popup

[Go Back to Contents](#table-of-contents)

In `src/redux/popup.ts`

```TypeScript
  import * as Type from '../utils/@types';

  const SHOW_POPUP: string = 'SHOW_POPUP';
  const HIDE_POPUP: string = 'HIDE_POPUP';

  export const showPopup: Type.ActionPayload<Type.Popup> = (data) => ({
      type: SHOW_POPUP,
      payload: data,
  });

  export const hidePopup: Type.ActionPayload<null> = () => ({
      type: HIDE_POPUP,
  });

  const initialState: Type.PopupState = {
      visible: false,
      title: '',
      message: '',
      children: true,
      custom: '',
  };

  const popupReducer: Type.Reducer<Type.PopupState, Type.PopupAction> = (state = initialState, action) => {
      switch (action.type) {
          case SHOW_POPUP:
              return {
                  visible: true,
                  title: action.payload?.title,
                  message: action.payload?.message,
                  children: action.payload?.children,
                  custom: action.payload?.custom,
              };
          case HIDE_POPUP:
              return Object.assign({}, initialState);
          default:
              return state;
      }
  };

  export default popupReducer;
```

#### User

[Go Back to Contents](#table-of-contents)

In `src/redux/user.ts`

```TypeScript
  import { AnyAction } from 'redux';
  import { ThunkDispatch } from 'redux-thunk';
  import * as Type from '../utils/@types';
  import * as Request from '../utils/helpers/request';
  import { getEnvURL } from '../utils/helpers/shared';
  import * as Token from '../utils/helpers/token';

  const URL: string = getEnvURL('REACT_APP_BACKEND_URL', '/api/user');

  const SET_MSG: string = 'SET_MSG';
  const LOGIN_USER: string = 'LOGIN_USER';
  const LOGOUT_USER: string = 'LOGOUT_USER';
  const SHOW_POPUP: string = 'SHOW_POPUP';

  export const loginUser: Type.ActionThunk<Type.LoginForm, null> = (data) => {
      return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
          try {
              const response: Type.Response<Type.LoginUserRes> = await Request.postData(`${URL}/login`, data!);

              if (!response.ok) {
                  return dispatch({
                      type: SET_MSG,
                      payload: {
                          msgs: response.errors,
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      },
                  });
              }

              if (response.data.verifyToken) {
                  dispatch({
                      type: SHOW_POPUP,
                      payload: {
                          title: 'Verify Email',
                          custom: `${URL}/email/${response.data.verifyToken}`,
                      },
                  });
              } else {
                  Token.setToken(response.data.token);
                  dispatch({ type: LOGIN_USER });
              }
          } catch (error: any) {
              dispatch({
                  type: SET_MSG,
                  payload: {
                      msgs: [error.message],
                      msgColor: 'danger',
                      icon: '⚠',
                      iconColor: 'danger',
                  },
              });
          }
      };
  };

  export const logoutUser: Type.ActionPayload<null> = () => ({
      type: LOGOUT_USER,
  });

  export const deleteUser: Type.ActionThunk<Type.DeleteUserForm, null> = (data) => {
      return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
          try {
              const response: Type.Response<Type.DeleteUserRes> = await Request.deleteData(`${URL}/profile`, data!);

              if (!response.ok) {
                  return dispatch({
                      type: SET_MSG,
                      payload: {
                          msgs: response.errors,
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      },
                  });
              }

              dispatch({
                  type: LOGOUT_USER,
              });
          } catch (error: any) {
              dispatch({
                  type: SET_MSG,
                  payload: {
                      msgs: [error.message],
                      msgColor: 'danger',
                      icon: '⚠',
                      iconColor: 'danger',
                  },
              });
          }
      };
  };

  const initialState: Type.UserState = Token.getUserFromToken();

  const userReducer: Type.Reducer<Type.UserState, Type.UserAction> = (state = initialState, action) => {
      switch (action.type) {
          case LOGIN_USER:
              return Token.getUserFromToken();
          case LOGOUT_USER:
              Token.removeToken();
              return null;
          default:
              return state;
      }
  };

  export default userReducer;
```

### SASS

#### Base

[Go Back to Contents](#table-of-contents)

- In `src/sass/base/_base-theme.sass`

  ```SCSS
    @import ./_colors

    $font-size: 1
    $page-width: 110rem
    $height: 1.8rem
    $border: 0.2rem solid rgba($cbk, 0.5)
    $shadow: 0.2rem 0.2rem 0.2rem rgba($cbk, 0.2)

    $size-none: 0rem
    $size-micro: 0.2rem
    $size-xtiny: 0.4rem
    $size-tiny: 0.8rem
    $size-xsmall: 1.2rem
    $size-small: 1.4rem
    $size-medium: 1.6rem
    $size-big: 1.8rem
    $size-xbig: 2.4rem
    $size-large: 2.8rem
    $size-xlarge: 3.6rem
    $size-huge: 4.8rem
    $size-giant: 6.4rem
    $size-massive: 7.2rem

    //= Color ======================================================================
    $color-primary: $cbl-40
    $color-primary-light: $cbl-60
    $color-primary-dark: $cbl-30

    $color-secondary: $cgy-80
    $color-secondary-light: $cgy-90
    $color-secondary-dark: $cgy-70

    $color-white: $cwt
    $color-black: $cbk

    $color-disabled: $cgy-70
    $color-disabled-light: $cgy-80
    $color-disabled-dark: $cgy-50

    $color-info: $cbl-45
    $color-info-light: $cbl-50
    $color-info-dark: $cbl-40

    $color-success: $cgn-35
    $color-success-light: $cgn-40
    $color-success-dark: $cgn-30

    $color-warning: $cog-50
    $color-warning-light: $cog-65
    $color-warning-dark: $cog-45

    $color-danger: $crd-40
    $color-danger-light: $crd-45
    $color-danger-dark: $crd-35

    //= Grid =======================================================================
    $grid-gap: 8px
    $grid-gap-small: 2px
    $grid-gap-medium: 4px
    $grid-gap-large: 16px
    $grid-gap-xlarge: 32px

    //= Font =======================================================================
    // + Font Family
    $font-family-sans: "Open Sans", helvetica, sans-serif
    $font-family-title: "Butler", serif
    $font-family-code: "Source Code Pro", monospace

    // + Font Weight
    $font-weight-normal: 400
    $font-weight-bold: 600
    $font-weight-heavy: 800

    // + Letter Spacing
    $letter-spacing-small: 0.75px
    $letter-spacing-medium: 1px
    $letter-spacing-large: 2px

    //= Border =====================================================================
    // + Border Radius
    $border-radius: 5px
    $border-radius-small: 2px
    $border-radius-medium: 3.5px
    $border-radius-large: 6.5px
    $border-radius-xlarge: 8px
    $border-radius-circle: 50%

    // = Shadow ====================================================================
    // + Form
    $form-min-width: 20rem
    $form-width: 25rem
    $form-padding: $size-xtiny
    $form-margin: $size-xtiny

    // + Button
    $button-margin: $size-xtiny
    $button-height: $height
    $button-shadow: 0.2rem 0.2rem 0.2rem rgba($cbk, 0.2)
    $button-shadow-hover: 0.5rem 0.5rem 1rem rgba($cbk, 0.4)
    $button-shadow-active: 0.35rem 0.35rem 0.3rem rgba($cbk, 0.3)

    // + Input
    $input-padding: $size-xtiny
    $input-margin: $size-xtiny
    $input-height: $height

    // + Select
    $select-padding: $size-xtiny
    $select-margin: $size-xtiny
    $select-height: $height

    // + Textarea
    $textarea-padding: $size-xtiny
    $textarea-margin: $size-xtiny
    $textarea-height: $height
  ```

- In `src/sass/base/_colors.sass`

  ```SCSS
    $cbl-90: hsl(204, 70%, 90%)
    $cbl-85: hsl(204, 70%, 85%)
    $cbl-80: hsl(204, 70%, 80%)
    $cbl-75: hsl(204, 70%, 75%)
    $cbl-70: hsl(204, 70%, 70%)
    $cbl-65: hsl(204, 70%, 65%)
    $cbl-60: hsl(204, 70%, 60%)
    $cbl-55: hsl(204, 70%, 55%)
    $cbl-50: hsl(204, 70%, 50%)
    $cbl-45: hsl(204, 70%, 45%)
    $cbl-40: hsl(204, 70%, 40%)
    $cbl-35: hsl(204, 70%, 35%)
    $cbl-30: hsl(204, 70%, 30%)
    $cbl-25: hsl(204, 70%, 25%)
    $cbl-20: hsl(204, 70%, 20%)
    $cgn-90: hsl(121, 100%, 90%)
    $cgn-85: hsl(121, 100%, 85%)
    $cgn-80: hsl(121, 100%, 80%)
    $cgn-75: hsl(121, 100%, 75%)
    $cgn-70: hsl(121, 100%, 70%)
    $cgn-65: hsl(121, 100%, 65%)
    $cgn-60: hsl(121, 100%, 60%)
    $cgn-55: hsl(121, 100%, 55%)
    $cgn-50: hsl(121, 100%, 50%)
    $cgn-45: hsl(121, 100%, 45%)
    $cgn-40: hsl(121, 100%, 40%)
    $cgn-35: hsl(121, 100%, 35%)
    $cgn-30: hsl(121, 100%, 30%)
    $cgn-25: hsl(121, 100%, 25%)
    $cgn-20: hsl(121, 100%, 20%)
    $cog-90: hsl(37, 90%, 90%)
    $cog-85: hsl(37, 90%, 85%)
    $cog-80: hsl(37, 90%, 80%)
    $cog-75: hsl(37, 90%, 75%)
    $cog-70: hsl(37, 90%, 70%)
    $cog-65: hsl(37, 90%, 65%)
    $cog-60: hsl(37, 90%, 60%)
    $cog-55: hsl(37, 90%, 55%)
    $cog-50: hsl(37, 90%, 50%)
    $cog-45: hsl(37, 90%, 45%)
    $cog-40: hsl(37, 90%, 40%)
    $cog-35: hsl(37, 90%, 35%)
    $cog-30: hsl(37, 90%, 30%)
    $cog-25: hsl(37, 90%, 25%)
    $cog-20: hsl(37, 90%, 20%)
    $crd-90: hsl(0, 100%, 90%)
    $crd-85: hsl(0, 100%, 85%)
    $crd-80: hsl(0, 100%, 80%)
    $crd-75: hsl(0, 100%, 75%)
    $crd-70: hsl(0, 100%, 70%)
    $crd-70: hsl(0, 100%, 70%)
    $crd-65: hsl(0, 100%, 65%)
    $crd-60: hsl(0, 100%, 60%)
    $crd-55: hsl(0, 100%, 55%)
    $crd-50: hsl(0, 100%, 50%)
    $crd-45: hsl(0, 100%, 45%)
    $crd-40: hsl(0, 100%, 40%)
    $crd-35: hsl(0, 100%, 35%)
    $crd-30: hsl(0, 100%, 30%)
    $crd-25: hsl(0, 100%, 25%)
    $crd-20: hsl(0, 100%, 20%)
    $cgy-95: hsl(0, 0%, 95%)
    $cgy-90: hsl(0, 0%, 90%)
    $cgy-85: hsl(0, 0%, 85%)
    $cgy-80: hsl(0, 0%, 80%)
    $cgy-75: hsl(0, 0%, 75%)
    $cgy-70: hsl(0, 0%, 70%)
    $cgy-65: hsl(0, 0%, 65%)
    $cgy-60: hsl(0, 0%, 60%)
    $cgy-55: hsl(0, 0%, 55%)
    $cgy-50: hsl(0, 0%, 50%)
    $cgy-45: hsl(0, 0%, 45%)
    $cgy-40: hsl(0, 0%, 40%)
    $cgy-35: hsl(0, 0%, 35%)
    $cgy-30: hsl(0, 0%, 30%)
    $cgy-25: hsl(0, 0%, 25%)
    $cgy-20: hsl(0, 0%, 20%)
    $cgy-15: hsl(0, 0%, 15%)
    $cgy-10: hsl(0, 0%, 10%)
    $cbk: hsl(0, 0%, 0%)
    $cwt: hsl(0 , 0%,100%)
  ```

- In `src/sass/base/_fonts.sass`

  ```SCSS
    @import ../helpers

    //! Import from url
    @include google-font("Pacifico")

    //! Import from local
    @font-face
      font-family: 'PressStart2P-Regular'
      font-weight: $font-weight-normal
      src: url('../../assets/fonts/PressStart2P-Regular.ttf') format('opentype')
  ```

- In `src/sass/base/_reset.sass`

  ```SCSS
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video
      margin: 0
      padding: 0
      border: 0
      font-size: 100%

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section
      display: block

    *,
    *::before,
    *::after
      box-sizing: border-box

    html
      height: 100%
      width: 100%
      min-width: 25rem

    body,
    #root
      height: 100%
      width: 100%
      font-family: $font-family-sans
      font-weight: $font-weight-normal
      line-height: 1
      font-size: 62.5%

    .app
      height: 100%
      width: 100%
      display: flex
      flex-direction: column
      align-items: center

    main
      display: flex
      flex-grow: 1
      width: 100%
      justify-content: center
      min-height: 100vh

    ol, ul
      list-style-type: none

    blockquote, q
      quotes: none

    table
      border-collapse: collapse
      border-spacing: 0

    blockquote, q
      quotes: none

    blockquote:before, blockquote:after,
    q:before, q:after
      content: ''
      content: none

    table
      border-collapse: collapse
      border-spacing: 0

    a
      text-decoration: none
      cursor: pointer
      color: inherit
      color: $color-info

    button
      border: none
      background: none
      cursor: pointer

    .container
      max-width: $page-width
      display: flex
      flex-direction: column
      align-items: center
      width: 100%

    .loading
      cursor: progress

    .add-loading
      position: relative

    .split-2,
    .split-3,
    .split-4
      display: grid
      column-gap: $grid-gap

    .split-2
      grid-template-columns: repeat(2, 1fr)

    .split-3
      grid-template-columns: repeat(3, 1fr)

    .split-4
      grid-template-columns: repeat(4, 1fr)
  ```

- In `src/sass/base/_typography.sass`

  ```SCSS
    h1
      font-size: resize($font-size, 1.6)

    h2
      font-size: resize($font-size, 1.4)

    h3
      font-size: resize($font-size, 1.2)

    h4
      font-size: resize($font-size, 1)

    @include mq-manager(tab-port)
      h1
        font-size: resize($font-size, 1.2)
      h2
        font-size: resize($font-size, 1)
      h3
        font-size: resize($font-size, 0.8)
      h4
        font-size: resize($font-size, 0.6)
  ```

- In `src/sass/base/index.sass`

  ```SCSS
    @import ./_base-theme
    @import ./_colors
    @import ./_fonts
    @import ./_reset
    @import ./_typography
  ```

#### Components

[Go Back to Contents](#table-of-contents)

- In `src/sass/components/api/_api-form.sass`

  ```SCSS
    .api-form
      padding: $form-padding
      min-width: $form-width

      &__description
        textarea
          min-height: 4rem

    @include mq-manager(tab-port)
      width: $form-min-width
  ```

- In `src/sass/components/api/_api-table.sass`

  ```SCSS
    .api-table
      font-size: $font-size * 1rem
      min-width: max-content

      table
        border-collapse: separate
        border-spacing: 1px

        thead
          tr
            th
              display: inline-flex
              justify-content: center
              height: 2.5rem
              flex-grow: 1
              color: $color-secondary-light
              background-color: $color-primary
        tbody
          tr
            th
              font-weight: normal
              background-color: $color-secondary-light
              padding: 0 $size-xtiny
            th:not(:last-child)
              border-right: 1px solid $cgy-75

        .cta
          & > :not(:last-child)
            margin-right: $size-xtiny
      &__type,
      &__name,
      &__url,
      &__key,
      &__value,
      &__description,
      &__status
        display: inline-flex
        align-items: center
        height: 1.8rem
      &__no-overflow
        display: flex
        justify-content: space-between
        flex: 1
        width: 100%

        &--text
          text-overflow: ellipsis
          overflow: hidden
          white-space: nowrap
          display: block
      &__type
        text-transform: capitalize
        width: 8rem
        justify-content: center
      &__name
        width: 10rem
      &__url
        width: 17rem
      &__key,
      &__value
        width: 10rem
      &__description
        width: 20rem
      &__status
        width: 12rem

        &--enabled,
        &--disabled
          text-transform: uppercase
          display: flex
          flex: 1
        &--enabled
          color: $color-success
        &--disabled
          color: $color-danger
      &__cta
        width: 100%
        margin: 0
  ```

- In `src/sass/components/api/index.sass`

  ```SCSS
    @import ./_api-form
    @import ./_api-table
  ```

---

- In `src/sass/components/shared/_alert.sass`

  ```SCSS
    .alert
      display: flex
      align-items: center
      justify-content: center
      margin: 0.5rem 0
      flex: 1

      &__icon
        font-size: 2rem
        display: inline-flex
      &__msg-container
        margin-left: 0.5rem
        font-size: 0.8rem
      &__msg
        line-height: 1.3
        text-transform: capitalize
      &__icon,
      &__msg
        &--info
          color: $color-info
        &--danger
          color: $color-danger
        &--success
          color: $color-success
        &--warning
          color: $color-warning
  ```

- In `src/sass/components/shared/_button-icon.sass`

  ```SCSS
    .btn-icon
      a,
      button
        background-color: transparent
        color: $color-white
        border: none
        text-decoration: none
        cursor: pointer
        margin: 0
        padding: 0

        img,
        svg
          transition: all 0.2s ease-in-out
      &__icon
        height: $font-size * 1rem
        min-width: $font-size * 1rem
      &--primary
        svg > path
          color: $color-primary
          fill: $color-primary
      &--danger
        svg > path
          color: $color-danger
          fill: $color-danger
      &--success
        svg > path
          color: $color-success
          fill: $color-success
      &--warning
        svg > path
          color: $color-warning
          fill: $color-warning
      &--grey
        svg > path
          color: $color-disabled-dark
          fill: $color-disabled-dark
      &--disabled
        svg > path
          cursor: not-allowed
          color: $color-disabled
          fill: $color-disabled
      &--hover-primary
        &:hover > svg > path
          color: $color-primary-light
          fill: $color-primary-light
        &:active > svg > path
          color: $color-primary-dark
          fill: $color-primary-dark
      &--hover-danger
        &:hover > svg > path
          color: $color-danger-light
          fill: $color-danger-light
        &:active > svg > path
          color: $color-danger-dark
          fill: $color-danger-dark
      &--hover-success
        &:hover > svg > path
          color: $color-success-light
          fill: $color-success-light
        &:active > svg > path
          color: $color-success-dark
          fill: $color-success-dark
      &--hover-warning
        &:hover > svg > path
          color: $color-warning-light
          fill: $color-warning-light
        &:active > svg > path
          color: $color-warning-dark
          fill: $color-warning-dark
      &--hover-grey
        &:hover > svg > path
          color: $color-disabled
          fill: $color-disabled
        &:active > svg > path
          color: $color-disabled-dark
          fill: $color-disabled-dark
      &--hover-disabled
        svg > path
          cursor: not-allowed
          color: $color-disabled
          fill: $color-disabled
        a
          cursor: not-allowed
          pointer-events: none
  ```

- In `src/sass/components/shared/_button.sass`

  ```SCSS
    .btn
      min-width: fit-content

      a,
      button
        background-color: $color-info
        color: $color-white
        min-height: $button-height
        min-width: $button-height
        font-size: resize($font-size, 0.9)
        padding: $size-xtiny $size-tiny
        border-radius: $border-radius
        transition: all 0.2s ease-in-out

        &:hover
          transform: translateZ(0.1rem) scale(1.10)
          box-shadow: $button-shadow-hover
          background-color: $color-info-light
        &:active
          transform: translateZ(0.07rem) scale(1.07)
          box-shadow: $button-shadow-active
          background-color: $color-info-dark
      &--no-hover
        a,
        button
          &:hover,
          &:active
            transform: translateZ(0) scale(1)
            box-shadow: none

      &__row
        display: grid
        grid-template-columns: repeat(2, auto)
        grid-template-rows: 1fr
        justify-content: center
        align-items: center

        &__icon
          height: resize($font-size, 0.9)
          min-width: resize($font-size, 0.9)
          max-width: resize($font-size, 0.9)

          &--left
            grid-column: 1 / span 1
            grid-row: 1 / -1
            margin-right: $size-xtiny
          &--right
            grid-column: 2 / -1
            grid-row: 1 / -1
          &--center
            margin: 0
        &__value
          white-space: nowrap

          &--left
            grid-column: 2 / -1
            grid-row: 1 / -1
          &--right
            grid-column: 1 / span 1
            grid-row: 1 / -1
            margin-right: $size-xtiny
      &__column
        display: grid
        grid-template-columns: 1fr
        grid-template-rows: repeat(2, auto)
        justify-items: center

        &__icon
          height: resize($font-size, 0.9)
          min-width: resize($font-size, 0.9)

          &--top
            grid-column: 1 / -1
            grid-row: 1 / span 1
            margin-bottom: $size-xtiny
          &--bottom
            grid-column: 1 / -1
            grid-row: 2 / -1
        &__value
          white-space: nowrap

          &--top
            grid-column: 1 / -1
            grid-row: 2 / -1
          &--bottom
            grid-column: 1 / -1
            grid-row: 1 / span 1
            margin-bottom: $size-xtiny
      &--danger
        a,
        button
          background-color: $color-danger

          &:hover
            background-color: $color-danger-light
          &:active
            background-color: $color-danger-dark
      &--success
        a,
        button
          background-color: $color-success

          &:hover
            background-color: $color-success-light
          &:active
            background-color: $color-success-dark
      &--warning
        a,
        button
          background-color: $color-warning

          &:hover
            background-color: $color-warning-light
          &:active
            background-color: $color-warning-dark
      &--disabled
        cursor: not-allowed

        a,
        button
          cursor: not-allowed
          background-color: $color-disabled

          &:hover
            transform: translateZ(0rem) scale(1)
            box-shadow: none
            background-color: $color-disabled
        a
          pointer-events: none
  ```

- In `src/sass/components/shared/_cta.sass`

  ```SCSS
    .cta
      display: flex
      width: 100%

      &__row
        flex-direction: row

        &--justify-flex-start
          justify-content: flex-start

          & > :not(:last-child)
            margin-right: $size-xtiny
        &--justify-center
          justify-content: center

          & > :not(:first-child)
            margin-left: $size-xtiny
        &--justify-flex-end
          justify-content: flex-end

          & > :not(:first-child)
            margin-left: $size-xtiny
        &--align-flex-start
          align-items: flex-start
        &--align-center
          align-items: center
        &--align-flex-end
          align-items: flex-end
      &__column
        flex-direction: column

        & > :not(:last-child)
          margin-bottom: $size-xtiny
        &--align-flex-start
          align-items: flex-start
        &--align-center
          align-items: center
        &--align-flex-end
          align-items: flex-end
  ```

- In `src/sass/components/shared/_footer.sass`

  ```SCSS
    .footer
      display: flex
      justify-content: center
      background-color: $color-black
      min-height: 10rem
      max-height: 10rem
      width: 100%
      padding: 1rem

      &__footer-container
        display: grid
        grid-template-columns: 3fr 1fr 3fr
        column-gap: $grid-gap-small
        color: $color-white
      &__left,
      &__middle,
      &__right
        display: flex
        align-items: center
        justify-content: center
        text-align: center
        height: 100%
        font-size: 0.8rem
        padding: 0.5rem
      &__repo
        height: 2rem
        display: flex
        align-items: center
        justify-content: center
      &__repo-text
        font-size: 1.3rem
        font-weight: $font-weight-bold
      &__link
        text-decoration: none
        color: $color-white

        &:hover
          color: $color-primary
      @include mq-manager(tab-port)
        min-height: 15rem
        max-height: 15rem

        &__footer-container
          grid-template-columns: 1fr
          grid-template-rows: repeat(3, 1fr)
          column-gap: 0
        &__left
          grid-column: 1 / span 1
          grid-row: 2 / 3
        &__right
          grid-column: 1 / span 1
          grid-row: 3 / 4
        &__middle
          grid-column: 1 / span 1
          grid-row: 1 / 2
  ```

- In `src/sass/components/shared/_icon.sass`

  ```SCSS
    .icon
      &__social-media
        height: 2rem
        margin: 0.3rem
      &__technology
        height: 3rem

    @include mq-manager(tab-port)
      .icon
        &__technology
          height: 1.9rem
  ```

- In `src/sass/components/shared/_input.sass`

  ```SCSS
    .input-container
      display: grid

      input
        border-radius: $border-radius
        font-size: resize($font-size, 0.8)
        height: $input-height
        padding: $input-padding+0.2rem
        border: 1px solid $color-disabled
      label
        margin: $input-margin
        text-align: left
        padding-left: $input-padding
        font-size: resize($font-size, 0.7)
        color: $color-disabled-dark
        display: flex
      &--left
        margin-bottom: $input-margin
        grid-template-columns: auto 1fr
        grid-template-rows: 1fr

        input
          grid-column: 2 / span 1
          grid-row: 1 / -1
        label
          grid-column: 1 / span 1
          grid-row: 1 / -1
          align-items: center
          font-size: $font-size * 1rem
      &--right
        margin-bottom: $input-margin
        grid-template-columns: 1fr auto
        grid-template-rows: 1fr

        input
          grid-column: 1 / span 1
          grid-row: 1 / -1
        label
          grid-column: 2 / span 1
          grid-row: 1 / -1
          align-items: center
          font-size: $font-size * 1rem
      &--top
        margin-bottom: $input-margin
        grid-template-columns: 1fr
        grid-template-rows: auto 1fr

        input
          grid-column: 1 / -1
          grid-row: 2 / span 1
        label
          grid-column: 1 / -1
          grid-row: 1 / span 1
          align-items: flex-end
      &--bottom
        margin-bottom: $input-margin
        grid-template-columns: 1fr
        grid-template-rows: 1fr auto

        input
          grid-column: 1 / -1
          grid-row: 1 / span 1
        label
          grid-column: 1 / -1
          grid-row: 2 / span 1
          align-items: flex-start
  ```

- In `src/sass/components/shared/_loading-spinner.sass`

  ```SCSS
    .loading-spinner
      display: inline-block
      position: relative
      width: 25px
      height: 25px

      div
        transform-origin: 12px 12px
        animation: loading-spinner 1.2s linear infinite
      div:after
        content: " "
        display: block
        position: absolute
        top: 2px
        left: 11.5px
        width: 2px
        height: 6px
        border-radius: 20%
        background: $cgy-60
      div:nth-child(1)
        transform: rotate(0deg)
        animation-delay: -1.1s
      div:nth-child(2)
        transform: rotate(30deg)
        animation-delay: -1s
      div:nth-child(3)
        transform: rotate(60deg)
        animation-delay: -0.9s
      div:nth-child(4)
        transform: rotate(90deg)
        animation-delay: -0.8s
      div:nth-child(5)
        transform: rotate(120deg)
        animation-delay: -0.7s
      div:nth-child(6)
        transform: rotate(150deg)
        animation-delay: -0.6s
      div:nth-child(7)
        transform: rotate(180deg)
        animation-delay: -0.5s
      div:nth-child(8)
        transform: rotate(210deg)
        animation-delay: -0.4s
      div:nth-child(9)
        transform: rotate(240deg)
        animation-delay: -0.3s
      div:nth-child(10)
        transform: rotate(270deg)
        animation-delay: -0.2s
      div:nth-child(11)
        transform: rotate(300deg)
        animation-delay: -0.1s
      div:nth-child(12)
        transform: rotate(330deg)
        animation-delay: 0s
      &--primary
        div:after
          background: $color-primary
      &--danger
        div:after
          background: $color-danger
      &--success
        div:after
          background: $color-success
      &--warning
        div:after
          background: $color-warning
      &--white
        div:after
          background: $color-white
      &--black
        div:after
          background: $color-black
  ```

- In `src/sass/components/shared/_navbar.sass`

  ```SCSS
    .navbar
      position: fixed
      top: 0
      left: 0
      min-height: 5rem
      width: 100%
      display: flex
      flex: 1
      justify-content: center
      box-shadow: 0 0.3rem 0.3rem rgba($color-black, 0.3)
      background-color: $color-primary-dark
      z-index: 2
      user-select: none

      &--remove-style
        box-shadow: none
      &__navbar-container
        max-width: $page-width
        display: flex
        flex: 1
        justify-content: space-around
      &__logo-container
        height: 5rem
        margin-left: 1rem
      &__logo
        height: 100%
        font-size: 1.5rem
        color: $color-white
        font-weight: bolder
        font-family: Pacifico, PressStart2P-Regular, sans-serif
        display: flex
        align-items: center
        margin: 0 1rem
        white-space: nowrap
        text-decoration: none
      &__menu-container
        display: flex
        flex: 1
        justify-content: flex-end
        margin: 0 1rem
      &__list
        height: 100%
        display: flex
        align-items: center
      &__item
        height: 100%
        list-style: none
        display: flex
        align-items: center
        cursor: pointer
      &__link
        height: 100%
        display: flex
        align-items: center
        text-decoration: none
        color: rgba($color-white, 0.5)
        font-size: $font-size * 1rem
        white-space: nowrap
        padding: 0 1.5rem

        &:hover
          color: $color-white
          background-color: $color-primary
      &__bars
        display: none
        visibility: hidden

    .menu
      position: fixed
      top: 5rem
      left: 0
      width: 100%
      margin-bottom: $size-big
      display: flex
      justify-content: center
      box-shadow: 0 0.3rem 0.3rem rgba($color-black, 0.3)
      background-color: $color-primary
      z-index: 1

      &__sub-menu
        max-width: $page-width
        padding: $size-xtiny $size-xbig
        background-color: $color-primary

    @include mq-manager(tab-port)
      .navbar
        &__navbar-container
          flex-direction: column
          align-items: center
          box-shadow: 0 0.2rem 0.3rem rgba($color-black, 0.3)
          &--remove-style
            box-shadow: none
        &__logo-container
          height: 5rem
        &__logo
          height: 100%
        &__menu-container
          width: 100%
          justify-content: center
          visibility: hidden
          display: none
          transition: all 0.3s ease-in-out
          margin-bottom: 1rem

          &--visible
            visibility: visible
            display: flex
        &__list
          flex-direction: column
          width: 100%
        &__item
          width: 100%
          display: flex
          justify-content: center
        &__link
          padding: $size-xsmall $size-small
          width: 100%
          text-align: center
          display: flex
          justify-content: center

          &:hover
            background-color: $color-primary-light
        &__bars
          display: flex
          visibility: visible
          position: absolute
          top: 0
          right: 0
          transform: translate(-100%, 60%)
          font-size: 2rem
          cursor: pointer
          transition: all 0.3s ease-in-out

          &:hover
            color: $color-white
          &--light
            color: $color-disabled-light
          &--dark
            color: $color-primary
  ```

- In `src/sass/components/shared/_popup.sass`

  ```SCSS
    .popup
      position: fixed
      top: 0
      left: 0
      background-color: rgba($color-black, 0.8)
      width: 100%
      height: 100%
      z-index: 10

      &__container
        @include abs-center
        top: 45%
        background-color: $color-white
        min-width: 30rem
        min-height: 5rem
        border-radius: $border-radius
        padding: 1rem
        color: $color-black
        z-index: 2
      &__close
        position: absolute
        top: $form-padding
        right: $form-padding
        font-size: $font-size * 1rem
        margin: 0 !important
        padding: 0 !important
      &__header
        margin: 0 0 1rem 0

        h3
          text-align: center
          text-transform: uppercase
      &__body
        font-size: $font-size * 1rem
        margin-bottom: 1rem

      &__custom
        &__link
          display: flex
          justify-content: center

          a
            font-size: $font-size * 1rem

    @include mq-manager(tab-port)
      .popup
        &__container
          min-width: $form-min-width
          top: 50%
  ```

- In `src/sass/components/shared/_select.sass`

  ```SCSS
    .select-container
      display: grid

      select
        border-radius: $border-radius
        width: 100%
        font-size: resize($font-size, 0.7)
        height: $select-height
        padding: $select-padding - 0.1rem $select-padding - 0.1rem $select-padding - 0.1rem $select-padding
        border: 1px solid $color-disabled
      label
        margin: $select-margin
        text-align: left
        padding-left: $select-padding - 0.1rem
        font-size: resize($font-size, 0.7)
        color: $color-disabled-dark
        display: flex
      &--left
        margin-bottom: $select-margin
        grid-template-columns: auto 1fr
        grid-template-rows: 1fr

        select
          grid-column: 2 / span 1
          grid-row: 1 / -1
        label
          grid-column: 1 / span 1
          grid-row: 1 / -1
          align-items: center
          font-size: $font-size * 1rem
      &--right
        margin-bottom: $select-margin
        grid-template-columns: 1fr auto
        grid-template-rows: 1fr

        select
          grid-column: 1 / span 1
          grid-row: 1 / -1
        label
          grid-column: 2 / span 1
          grid-row: 1 / -1
          align-items: center
          font-size: $font-size * 1rem
      &--top
        margin-bottom: $select-margin
        grid-template-columns: 1fr
        grid-template-rows: auto 1fr

        select
          grid-column: 1 / -1
          grid-row: 2 / span 1
        label
          grid-column: 1 / -1
          grid-row: 1 / span 1
          align-items: flex-end
      &--bottom
        margin-bottom: $select-margin
        grid-template-columns: 1fr
        grid-template-rows: 1fr auto

        select
          grid-column: 1 / -1
          grid-row: 1 / span 1
        label
          grid-column: 1 / -1
          grid-row: 2 / span 1
          align-items: flex-start
  ```

- In `src/sass/components/shared/_textarea.sass`

  ```SCSS
    .textarea-container
      display: grid

      textarea
        border-radius: $border-radius
        width: 100%
        font-size: resize($font-size, 0.8)
        min-height: $textarea-height
        padding: $textarea-padding $textarea-padding $textarea-padding $textarea-padding+0.2rem
        border: 1px solid $color-disabled
      label
        margin: $textarea-margin
        text-align: left
        padding-left: $textarea-padding
        font-size: resize($font-size, 0.7)
        color: $color-disabled-dark
        display: flex
      &--left
        margin-bottom: $textarea-margin
        grid-template-columns: auto 1fr
        grid-template-rows: 1fr

        textarea
          grid-column: 2 / span 1
          grid-row: 1 / -1
        label
          grid-column: 1 / span 1
          grid-row: 1 / -1
          align-items: center
          font-size: $font-size * 1rem
      &--right
        margin-bottom: $textarea-margin
        grid-template-columns: 1fr auto
        grid-template-rows: 1fr

        textarea
          grid-column: 1 / span 1
          grid-row: 1 / -1
        label
          grid-column: 2 / span 1
          grid-row: 1 / -1
          align-items: center
          font-size: $font-size * 1rem
      &--top
        margin-bottom: $textarea-margin
        grid-template-columns: 1fr
        grid-template-rows: auto 1fr

        textarea
          grid-column: 1 / -1
          grid-row: 2 / span 1
        label
          grid-column: 1 / -1
          grid-row: 1 / span 1
          align-items: flex-end
      &--bottom
        margin-bottom: $textarea-margin
        grid-template-columns: 1fr
        grid-template-rows: 1fr auto

        textarea
          grid-column: 1 / -1
          grid-row: 1 / span 1
        label
          grid-column: 1 / -1
          grid-row: 2 / span 1
          align-items: flex-start
  ```

- In `src/sass/components/shared/index.sass`

  ```SCSS
    @import ./_alert
    @import ./_button
    @import ./_button-icon
    @import ./_cta
    @import ./_footer
    @import ./_icon
    @import ./_input
    @import ./_loading-spinner
    @import ./_navbar
    @import ./_popup
    @import ./_select
    @import ./_textarea
  ```

- In `src/sass/components/user/_user-delete-form.sass`

  ```SCSS
    .user-delete-form
      min-width: $form-width

    @include mq-manager(tab-port)
      width: $form-min-width
  ```

- In `src/sass/components/user/_user-login-form.sass`

  ```SCSS
    .user-login-form
      width: $form-width

      &__reset-password-link
        color: $color-disabled-dark
        font-size: 0.6rem

        &:hover
          color: $color-danger

    @include mq-manager(tab-port)
      width: $form-min-width
  ```

- In `src/sass/components/user/_user-profile-form.sass`

  ```SCSS
    .user-profile-form
      width: $form-width

      &__telegram-container
        display: flex
        flex-grow: 1

        &__telegram
          width: 100%
      &__icon
        font-size: resize($font-size, 1.3)
        color: $color-danger-light
        display: flex
        padding: $size-xtiny

        &--activated
          font-size: resize($font-size, 1.3)
          display: flex
          padding-top: 0.3rem
          color: $color-info-light
      &__delete-link
        color: $color-disabled-dark
        font-size: 0.6rem

        &:hover
          color: $color-danger

    @include mq-manager(tab-port)
      width: $form-min-width
  ```

- In `src/sass/components/user/_user-reset-password-form.sass`

  ```SCSS
    .user-reset-password-form
      min-width: $form-width

      &__cta
        margin-top: $size-xtiny

    @include mq-manager(tab-port)
      width: $form-min-width
  ```

- In `src/sass/components/user/_user-signup-form.sass`

  ```SCSS
    .user-signup-form
      width: $form-width

    @include mq-manager(tab-port)
      width: $form-min-width
  ```

- In `src/sass/components/user/_user-update-password-form.sass`

  ```SCSS
    .user-update-password-form
      width: $form-width

    @include mq-manager(tab-port)
      width: $form-min-width
  ```

- In `src/sass/components/user/index.sass`

  ```SCSS
    @import ./_user-delete-form
    @import ./_user-login-form
    @import ./_user-profile-form
    @import ./_user-reset-password-form
    @import ./_user-signup-form
    @import ./_user-update-password-form
  ```

#### Helpers

[Go Back to Contents](#table-of-contents)

- In `src/sass/helpers/_animations.sass`

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

    @keyframes loading-spinner
      0%
        opacity: 1
      100%
        opacity: 0
  ```

- In `src/sass/helpers/_functions.sass`

  ```SCSS
    @function resize($original, $percent)
      @return $original * $percent * 1rem
  ```

- In `src/sass/helpers/_mixins.sass`

  ```SCSS
    @mixin abs-center($x: -50%, $y: -50%)
      position: absolute
      top: 50%
      left: 50%
      transform: translate($x, $y)

    @mixin mq-manager($breakpoint)
      @if $breakpoint == phone
        @media (max-width: 37.5em) // ! 600px
          @content

      @if $breakpoint == tab-port
        @media (max-width: 56.25em) // ! 900px
          @content

      @if $breakpoint == tab-land
        @media (max-width: 75rem) // ! 1200px
          @content

      @if $breakpoint == desk
        @media (max-width: 112.5rem) // ! 1800px
          @content

    @mixin google-font($family)
      @import url('https://fonts.googleapis.com/css2?family=#{$family}&display=swap')

    @mixin config-page
      margin-top: 7rem
      width: 100%
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center

      h1
        margin-bottom: $size-big
  ```

- In `src/sass/helpers/_tooltip.sass`

  ```SCSS
    .tooltip
      position: relative
      display: inline-block
      user-select: none

      &__text
        font-size: resize($font-size, 0.8)
        visibility: hidden
        background-color: $color-primary
        color: $color-white
        text-align: center
        width: 6rem
        border-radius: 0.6rem
        padding: 0.5rem 0
        position: absolute
        bottom: 125%
        left: 50%
        z-index: 1
        margin-left: -3rem
        opacity: 0
        transition: opacity 0.3s ease-in-out
        height: 1.7rem

        &::after
          content: ''
          position: absolute
          top: 100%
          left: 50%
          margin-left: -0.5rem
          border-width: 0.5rem
          border-style: solid
          border-color: $color-disabled transparent transparent transparent

        &--left
          top: -10%
          left: -300%

          &::after
            top: 18%
            left: 91%
            margin-left: 0.5rem
            border-width: 0.5rem
            border-color: transparent transparent transparent $color-disabled
        &--right
          top: -10%
          left: 380%

          &::after
            top: 18%
            left: -24%
            margin-left: 0.5rem
            border-width: 0.5rem
            border-color: transparent $color-disabled transparent transparent
        &--bottom
          top: 80%

          &::after
            top: -64%
            left: 50%
            margin-left: -0.5rem
            border-width: 0.5rem
            border-color: transparent transparent $color-disabled transparent
      &:hover &__text
        visibility: visible
        opacity: 1

    .copy
      position: relative
      display: inline-block
      cursor: pointer
      user-select: none

      &:before
        position: absolute
        display: none
        content: ''
        z-index: 100
        width: 0
        height: 0
        border-width: 5px
        border-style: solid
        top: 20px
        left: 2px
        border-color: transparent transparent $cgy-15 transparent
      &:after
        position: absolute
        display: none
        content: 'Copy to Clipboard'
        z-index: 100
        width: 115px
        height: 36px
        color: $color-white
        font-size: 10px
        line-height: 36px
        text-align: center
        background: $cgy-15
        border-radius: $border-radius
        top: 30px
        left: -50px
      &:hover
        background-color: $cgy-90

        &:before,
        &:after
          display: block
      &:focus
        &:before
          border-color: transparent transparent $cgy-15 transparent
      &:active,
      &:focus
        outline: none

        &:after
          content: 'Copied!'
          background-color: $cgy-35
      &:active
        &:before
          border-color: transparent transparent $cgy-35 transparent
      &--right
        &:before
          top: 2px
          left: 20px
          border-color: transparent $cgy-15 transparent transparent
        &:after
          top: -10px
          left: 30px
        &:focus
          &:before
            border-color: transparent $cgy-15 transparent transparent
        &:active
          &:before
            border-color: transparent $cgy-35 transparent transparent
      &--left
        &:before
          top: 2px
          left: -15px
          border-color: transparent transparent transparent $cgy-15
        &:after
          top: -10px
          left: -130px
        &:focus
          &:before
            border-color: transparent transparent transparent $cgy-15
        &:active
          &:before
            border-color: transparent transparent transparent $cgy-35
      &--top
        &:before
          top: -15px
          left: 2px
          border-color: $cgy-15 transparent transparent transparent
        &:after
          top: -51px
          left: -50px
        &:focus
          &:before
            border-color: $cgy-15 transparent transparent transparent
        &:active
          &:before
            border-color: $cgy-35 transparent transparent transparent
      &--bottom
        &:before
          top: 20px
          left: 2px
          border-color: transparent transparent $cgy-15 transparent
        &:after
          top: 30px
          left: -50px
        &:focus
          &:before
            border-color: transparent transparent $cgy-15 transparent
        &:active
          &:before
            border-color: transparent transparent $cgy-35 transparent
  ```

- In `src/sass/helpers/index.sass`

  ```SCSS
    @import ./_animations
    @import ./_functions
    @import ./_mixins
    @import ./_tooltip
  ```

#### Pages

[Go Back to Contents](#table-of-contents)

- In `src/sass/pages/_about-page.sass`

  ```SCSS
    .about-page
      @include config-page

      h2
        margin: 0.5rem 0
        white-space: nowrap
      h4
        color: $color-primary
        white-space: nowrap
      &__picture
        border-radius: 100%
        margin-top: 1rem
        width: 13rem
      &__technologies
        display: flex
        justify-content: center
        flex-wrap: wrap
        margin: 2rem 0
      &__tech-container
        display: flex
        flex-direction: column
        margin: 1rem
        align-content: center
        text-align: center
        transition: all 0.2s ease-in-out

        &:hover
          transform: scale(1.5)
          cursor: crosshair
      &__tech-label
        margin-top: 0.5rem

    @include mq-manager(tab-port)
      .about-page
        &__picture
          width: 8rem
  ```

- In `src/sass/pages/_api-page.sass`

  ```SCSS
    .api-page
      @include config-page
      margin-top: 10rem

      &__form
        padding: 0.5rem
        width: 25rem
  ```

- In `src/sass/pages/_home-page.sass`

  ```SCSS
    .home-page
      @include config-page

      h2
        color: $color-primary
        text-transform: capitalize
  ```

- In `src/sass/pages/_login-page.sass`

  ```SCSS
    .login-page
      @include config-page
  ```

- In `src/sass/pages/_profile-page.sass`

  ```SCSS
    .profile-page
      @include config-page
  ```

- In `src/sass/pages/_reset-password-page.sass`

  ```SCSS
    .reset-password-page
      @include config-page
  ```

- In `src/sass/pages/_signup-page.sass`

  ```SCSS
    .signup-page
      @include config-page
  ```

- In `src/sass/pages/index.sass`

  ```SCSS
    @import ./_about-page
    @import ./_api-page
    @import ./_home-page
    @import ./_login-page
    @import ./_profile-page
    @import ./_reset-password-page
    @import ./_signup-page
  ```

- In `src/sass/styles.sass`

  ```SCSS
    @import ./base
    @import ./helpers
    @import ./components
    @import ./pages
  ```

### Utils

#### @types

[Go Back to Contents](#table-of-contents)

- In `src/utils/@types/api/_components.ts`

  ```TypeScript
    import { MouseEvent } from 'react';
    import { ApiForm } from '.';
    import { Thead } from '..';

    export interface ApiFormC {
        setApis(prev: any): void;
        data?: {
            api: ApiForm;
            idx: number;
        };
    }

    export interface ApiTableC {
        thead: Thead[];
        apis: ApiForm[];
        setApis(e: MouseEvent, obj: any, idx: number): void;
        setApi(e: MouseEvent, obj: any, idx: number): void;
    }
  ```

- In `src/utils/@types/api/_types.ts`

  ```TypeScript
    export type ApiForm = {
        _id?: string;
        type: string;
        name: string;
        url: string;
        key: string;
        value: string;
        description: string;
        active: string;
    };
  ```

- In `src/utils/@types/api/index.ts`

  ```TypeScript
    export * from './_components';
    export * from './_types';
  ```

- In `src/utils/@types/message/_redux.ts`

  ```TypeScript
    import { Msg } from '.';

    export type MsgState = Msg;

    export interface MsgAction {
        type: string;
        payload: Msg;
    }
  ```

- In `src/utils/@types/message/_types.ts`

  ```TypeScript
    export type Msg = {
        msgs: string[];
        msgColor: string;
        icon?: string;
        iconColor?: string;
    };
  ```

- In `src/utils/@types/message/index.ts`

  ```TypeScript
    export * from './_redux';
    export * from './_types';
  ```

- In `src/utils/@types/popup/_redux.ts`

  ```TypeScript
    import { Popup } from '.';

    export type PopupState = Popup;

    export interface PopupAction {
        type: string;
        payload?: Popup;
    }
  ```

- In `src/utils/@types/popup/_types.ts`

  ```TypeScript
    export type Popup = {
        visible?: boolean;
        title?: string;
        message?: string;
        children: boolean;
        custom?: string;
    };
  ```

- In `src/utils/@types/popup/index.ts`

  ```TypeScript
    export * from './_redux';
    export * from './_types';
  ```

- In `src/utils/@types/shared/_components.ts`

  ```TypeScript
    import { IconProp } from '@fortawesome/fontawesome-svg-core';
    import { MouseEvent } from 'react';
    import { HandleChange, HandleKeyboard, Obj } from '.';

    export interface Input {
        name: string;
        value: string;
        onChange(e: HandleChange): void;
        onKeyPress?(e: HandleKeyboard): void;
        label?: string;
        handle?: string;
        placeholder?: string;
        type?: string;
        required?: boolean;
        disabled?: boolean;
        autoComplete?: string;
        labelPosition?: string;
        minLength?: number;
    }

    export interface Textarea {
        name: string;
        value: string;
        onChange(e: HandleChange): void;
        label?: string;
        handle?: string;
        placeholder?: string;
        required?: boolean;
        disabled?: boolean;
        labelPosition?: string;
    }

    export interface Select {
        name: string;
        value: string;
        options: Obj[];
        onChange(e: HandleChange): void;
        label?: string;
        handle?: string;
        required?: boolean;
        disabled?: boolean;
        labelPosition?: string;
    }

    export interface Button {
        value?: string;
        icon?: string;
        faIcon?: IconProp;
        handle?: string;
        iconDirection?: string;
        direction?: string;
        disabled?: boolean;
        hover?: boolean;
        type?: 'button' | 'submit' | 'reset' | undefined;
        btnType?: string;
        btnColor?: string;
        onClick?(e: MouseEvent<HTMLElement>): void;
        href?: string;
    }

    export interface ButtonIcon {
        icon?: string;
        faIcon?: IconProp;
        handle?: string;
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset' | undefined;
        btnType?: string;
        btnColor?: string;
        btnHoverColor?: string;
        onClick?(e: MouseEvent<HTMLElement>): void;
        href?: string;
    }

    export interface CTA {
        handle?: string;
        direction?: string;
        justify?: string;
        align?: string;
    }

    export interface LoadingSpinner {
        handle?: string;
        color?: string;
    }

    export interface Thead {
        id: string;
        friendlyName: string;
    }
  ```

- In `src/utils/@types/shared/_functions.ts`

  ```TypeScript
    import { FormEvent, MouseEvent } from 'react';

    export interface SleepFn {
        (ms: number): Promise<void>;
    }

    export interface DownloadJsonFn {
        (response: any, outputFile: string): void;
    }

    export interface GetEnvURLFn {
        (param: string, path: string): string;
    }

    export interface ValidateEmailFn {
        (email: string): boolean;
    }

    export interface IsFormValidFn {
        (): boolean;
    }

    // = Handlers ==================================================================
    export interface HandleChangeFn<T> {
        (e: T): void;
    }

    export interface HandleClickFn {
        (e?: MouseEvent): void;
    }

    export interface HandleClickDataFn<T1, T2> {
        (e?: MouseEvent, data?: T1, data2?: T2): void;
    }

    export interface HandleSubmitFn<T> {
        (e: FormEvent, data?: T): void;
    }
  ```

- In `src/utils/@types/shared/_hooks.ts`

  ```TypeScript
    import { Dispatch, SetStateAction } from 'react';

    export interface UseTimeoutFn {
        (callback: any, delay: number): {
            reset: () => void;
            clear: () => void;
        };
    }

    export interface UseDebounceFn {
        (callback: any, delay: number, dependencies: any[]): void;
    }

    export interface UseUpdateEffectFn {
        (callback: any, dependencies: any[]): void;
    }

    export interface UsePlainArrayFn {
        (initArray: any[]): {
            array: any[];
            set: Dispatch<SetStateAction<any[]>>;
            push: (newEl: any) => void;
            filter: (callback: any) => void;
            update: (idx: number, newEl: any) => void;
            remove: (idx: number) => void;
            clear: () => void;
        };
    }

    export interface UseToggleFn {
        (defaultValue?: boolean): [value: boolean, toggleValue: any];
    }
  ```

- In `src/utils/@types/shared/_redux.ts`

  ```TypeScript
    export interface ActionRedux<T> {
        (data?: T): void;
    }

    export interface ActionThunk<T1, T2> {
        (data1?: T1, data2?: T2): void;
    }

    export interface ActionPayload<T> {
        (data?: T): { type: string; payload?: T };
    }

    export interface Reducer<S, A> {
        (state: S, action: A): void;
    }
  ```

- In `src/utils/@types/shared/_request.ts`

  ```TypeScript
    export interface RequestFn {
        (type: string, url: string, data?: any, reqToken?: boolean, nTry?: number): Promise<any>;
    }

    export interface ReqHelperFn {
        (url: string, data?: any, useToken?: boolean): Promise<any>;
    }

    export interface RequestOptions {
        method: string;
        mode?: RequestMode;
        headers: {
            'Content-Type': string;
            'Access-Control-Allow-Origin'?: string;
            Authorization?: string;
        };
        body?: string;
    }

    export interface Response<T> {
        data: T;
        errors: string[];
        ok: boolean;
        status: number;
    }
  ```

- In `src/utils/@types/shared/_token.ts`

  ```TypeScript
    import { User } from '..';

    export interface GetTokenFn {
        (): string | null;
    }

    export interface GetUserFromTokenFn {
        (): User | null;
    }

    export interface SetTokenFn {
        (token: string): void;
    }

    export interface UpdateTokenFn {
        (token: string): void;
    }

    export interface RemoveTokenFn {
        (): void;
    }
  ```

- In `src/utils/@types/shared/_types.ts`

  ```TypeScript
    import { ChangeEvent, KeyboardEvent } from 'react';

    export type Obj = {
        [key: string]: any;
    };

    export type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

    export type HandleKeyboard = KeyboardEvent<HTMLInputElement>;
  ```

- In `src/utils/@types/shared/index.ts`

  ```TypeScript
    export * from './_components';
    export * from './_functions';
    export * from './_hooks';
    export * from './_redux';
    export * from './_request';
    export * from './_token';
    export * from './_types';
  ```

- In `src/utils/@types/user/_components.ts`

  ```TypeScript
    export interface UserUpdatePasswordFormC {
        token: string;
    }
  ```

- In `src/utils/@types/user/_redux.ts`

  ```TypeScript
    import { User } from '.';

    export type UserState = User | null;

    export interface UserAction {
        type: string;
        payload?: User;
    }
  ```

- In `src/utils/@types/user/_types.ts`

  ```TypeScript
    // = Types =====================================================================
    export type User = {
        _id: string;
        firstName: string;
        lastName: string;
        admin: boolean;
        exp: number;
        iat: number;
    };

    // = Forms =====================================================================
    export type ResetPasswordForm = {
        email: string;
    };

    export type LoginForm = {
        email: string;
        password: string;
    };

    export type UpdatePasswordForm = {
        password: string;
        confirmPassword: string;
    };

    export type SignUpForm = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    };

    export type ProfileForm = {
        _id?: string;
        firstName: string;
        lastName: string;
        email: string;
        telegramId: string;
        isTelegramVerified: boolean;
        password: string;
        newPassword: string;
        confirmNewPassword: string;
    };

    export type DeleteUserForm = {
        password: string;
    };

    // = Request / Response ========================================================
    export type LoginUserRes = {
        token: string;
        message: string;
        verifyToken?: string;
    };

    export type DeleteUserRes = {
        message: string;
    };

    export type ResetUserPasswordRes = {
        message: string;
        verifyToken?: string;
    };

    export type UpdateUserPasswordRes = ResetUserPasswordRes;

    export type SignUpUserRes = ResetUserPasswordRes;
  ```

- In `src/utils/@types/user/index.ts`

  ```TypeScript
    export * from './_components';
    export * from './_redux';
    export * from './_types';
  ```

- In `src/utils/@types/index.ts`

  ```TypeScript
    export * from './api';
    export * from './message';
    export * from './popup';
    export * from './shared';
    export * from './user';
  ```

#### Helpers

[Go Back to Contents](#table-of-contents)

- In `src/utils/helpers/hooks.ts`

  ```TypeScript
    import { useCallback, useEffect, useRef, useState } from 'react';
    import * as Type from '../@types';

    export const useTimeout: Type.UseTimeoutFn = (callback, delay) => {
        const callbackRef: any = useRef(callback);
        const timeoutRef: any = useRef(null);

        useEffect(() => {
            callbackRef.current = callback;
        }, [callback]);

        const set = useCallback(() => {
            timeoutRef.current = setTimeout(() => {
                callbackRef.current();
            }, delay);
        }, [delay]);

        const clear = useCallback(() => {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        }, []);

        useEffect(() => {
            set();
            return clear;
        }, [delay, set, clear]);

        const reset = useCallback(() => {
            clear();
            set();
        }, [clear, set]);

        return { reset, clear };
    };

    export const useDebounce: Type.UseDebounceFn = (callback, delay, dependencies) => {
        const { reset, clear } = useTimeout(callback, delay);

        useEffect(() => {
            reset();
        }, [...dependencies, reset]); // eslint-disable-line react-hooks/exhaustive-deps

        useEffect(() => {
            clear();
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
    };

    export const useUpdateEffect: Type.UseUpdateEffectFn = (callback, dependencies) => {
        const firstRenderRef = useRef<boolean>(true);

        useEffect(() => {
            if (firstRenderRef.current) {
                firstRenderRef.current = false;
                return;
            }
            return callback();
        }, [...dependencies]); // eslint-disable-line react-hooks/exhaustive-deps
    };

    export const usePlainArray: Type.UsePlainArrayFn = (initArray) => {
        const [array, setArray] = useState<any[]>(initArray);

        const push = (newEl: any) => {
            setArray((prev) => [...prev, newEl]);
        };

        const filter = (callback: any) => {
            setArray((prev) => prev.filter(callback));
        };

        const update = (idx: number, newEl: any) => {
            setArray((prev) => [...prev.slice(0, idx), newEl, ...prev.slice(idx + 1, prev.length)]);
        };

        const remove = (idx: number) => {
            setArray((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1, prev.length)]);
        };

        const clear = () => {
            setArray([]);
        };

        return {
            array,
            set: setArray,
            push,
            filter,
            update,
            remove,
            clear,
        };
    };

    export const useToggle: Type.UseToggleFn = (defaultValue = false) => {
        const [value, setValue] = useState<boolean>(defaultValue);

        const toggleValue = (value?: boolean) => {
            setValue((prev: boolean) => {
                return typeof value === 'boolean' ? value : !prev;
            });
        };

        return [value, toggleValue];
    };
  ```

- In `src/utils/helpers/request.ts`

  ```TypeScript
    import * as Type from '../@types';
    import { sleep } from './shared';
    import * as Token from './token';

    const REQUEST_TRY: number = process.env.REACT_APP_REQUEST_TRY ? +process.env.REACT_APP_REQUEST_TRY : 5;

    const request: Type.RequestFn = async (type, url, data, reqToken, nTry = -1) => {
        const option: Type.RequestOptions = {
            method: type,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (reqToken) option.headers.Authorization = `Bearer ${Token.getToken()}`;
        if (data && Object.keys(data).length > 0 && type !== 'GET') option.body = JSON.stringify(data);

        try {
            const res = await fetch(url, option);
            const data = await res.json();

            return {
                data: res.ok ? data : null,
                ok: res.ok,
                status: res.status,
                errors: res.ok ? null : Object.keys(data).map((err) => data[err]),
            };
        } catch (error: any) {
            if (nTry === -1 || nTry === REQUEST_TRY) {
                console.log(error);
                return {
                    data: null,
                    ok: false,
                    status: 503,
                    errors: [error.message],
                };
            }

            nTry++;
            await sleep(5000);
            return await request(type, url, data, reqToken, nTry);
        }
    };

    export const getData: Type.ReqHelperFn = async (url, useToken = true) => {
        return await request('GET', url, null, useToken);
    };

    export const postData: Type.ReqHelperFn = async (url, data = {}, useToken = true) => {
        return await request('POST', url, data, useToken);
    };

    export const updateData: Type.ReqHelperFn = async (url, data = {}, useToken = true) => {
        return await request('PUT', url, data, useToken);
    };

    export const deleteData: Type.ReqHelperFn = async (url, data = {}, useToken = true) => {
        return await request('DELETE', url, data, useToken);
    };
  ```

- In `src/utils/helpers/shared.ts`

  ```TypeScript
    import * as Type from '../@types';

    export const sleep: Type.SleepFn = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

    export const downloadJson: Type.DownloadJsonFn = (response, outputFile) => {
        const fileData: string = JSON.stringify(response, undefined, 4);
        const blob = new Blob([fileData], { type: 'text/plain' });
        const linkEl = document.createElement('a');
        linkEl.href = window.URL.createObjectURL(blob);
        linkEl.download = `${outputFile}.json`;
        linkEl.click();
        linkEl.remove();
    };

    export const getEnvURL: Type.GetEnvURLFn = (param, path) => {
        const PORT: number = process.env.REACT_APP_BACKEND_PORT ? +process.env.REACT_APP_BACKEND_PORT : 3001;
        return process.env.REACT_APP_ENV! === 'production'
            ? `${process.env[param]!}${path}`
            : `${process.env[param]!}:${PORT}${path}`;
    };

    export const validateEmail: Type.ValidateEmailFn = (email) => {
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email.trim()).toLowerCase());
    };
  ```

- In `src/utils/helpers/token.ts`

  ```TypeScript
    import * as Type from '../@types';

    export const getToken: Type.GetTokenFn = () => {
        let token: string | null = localStorage.getItem('token');

        if (token) {
            // + atob() - decoding a base-64 encoded string.
            const payload = JSON.parse(atob(token.split('.')[1]!));
            if (payload.exp < Date.now() / 1000) {
                localStorage.removeItem('token');
                token = null;
            }
        }

        return token;
    };

    export const getUserFromToken: Type.GetUserFromTokenFn = () => {
        const token = getToken();
        return token ? JSON.parse(atob(token.split('.')[1]!)) : null;
    };

    export const setToken: Type.SetTokenFn = (token) => {
        if (token && typeof token === 'string') {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    };

    export const updateToken: Type.UpdateTokenFn = (token) => {
        if (token) localStorage.setItem('token', token);
    };

    export const removeToken: Type.RemoveTokenFn = () => {
        localStorage.removeItem('token');
    };
  ```

- In `src/utils/helpers/functions/hooks.ts`

  ```TypeScript
    import { useCallback, useEffect, useRef, useState } from 'react';
    import * as Type from '../../@types';

    export const useTimeout: Type.UseTimeoutFn = (callback, delay) => {
        const callbackRef: any = useRef(callback);
        const timeoutRef: any = useRef(null);

        useEffect(() => {
            callbackRef.current = callback;
        }, [callback]);

        const set = useCallback(() => {
            timeoutRef.current = setTimeout(() => {
                callbackRef.current();
            }, delay);
        }, [delay]);

        const clear = useCallback(() => {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        }, []);

        useEffect(() => {
            set();
            return clear;
        }, [delay, set, clear]);

        const reset = useCallback(() => {
            clear();
            set();
        }, [clear, set]);

        return { reset, clear };
    };

    export const useDebounce: Type.UseDebounceFn = (callback, delay, dependencies) => {
        const { reset, clear } = useTimeout(callback, delay);

        useEffect(() => {
            reset();
        }, [...dependencies, reset]); // eslint-disable-line react-hooks/exhaustive-deps

        useEffect(() => {
            clear();
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
    };

    export const useUpdateEffect: Type.UseUpdateEffectFn = (callback, dependencies) => {
        const firstRenderRef = useRef<boolean>(true);

        useEffect(() => {
            if (firstRenderRef.current) {
                firstRenderRef.current = false;
                return;
            }
            return callback();
        }, [...dependencies]); // eslint-disable-line react-hooks/exhaustive-deps
    };

    export const usePlainArray: Type.UsePlainArrayFn = (initArray) => {
        const [array, setArray] = useState<any[]>(initArray);

        const push = (newEl: any) => {
            setArray((prev) => [...prev, newEl]);
        };

        const filter = (callback: any) => {
            setArray((prev) => prev.filter(callback));
        };

        const update = (idx: number, newEl: any) => {
            setArray((prev) => [...prev.slice(0, idx), newEl, ...prev.slice(idx + 1, prev.length)]);
        };

        const remove = (idx: number) => {
            console.log(array);
            setArray((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1, prev.length)]);
        };

        const clear = () => {
            setArray([]);
        };

        return {
            array,
            set: setArray,
            push,
            filter,
            update,
            remove,
            clear,
        };
    };

    export const useToggle: Type.UseToggleFn = (defaultValue = false) => {
        const [value, setValue] = useState<boolean>(defaultValue);

        const toggleValue = (value?: boolean) => {
            setValue((prev: boolean) => {
                return typeof value === 'boolean' ? value : !prev;
            });
        };

        return [value, toggleValue];
    };
  ```

### Store

[Go Back to Contents](#table-of-contents)

In `src/store.ts`

```TypeScript
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

  let middlewares: any = [];

  if (process.env.REACT_APP_ENV === 'development') {
      middlewares = [ReduxThunk, logger];
  } else {
      middlewares = [ReduxThunk];
  }

  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  export const persistor = persistStore(store);

  export default store;
```

### App

[Go Back to Contents](#table-of-contents)

In `src/App.tsx`

```TypeScript
  import { FC } from 'react';
  import { RootStateOrAny, useSelector } from 'react-redux';
  import { Navigate, Route, Routes } from 'react-router-dom';
  import Footer from './components/shared/Footer';
  import Header from './components/shared/Header';
  import AboutPage from './pages/AboutPage';
  import ApiPage from './pages/ApiPage';
  import HomePage from './pages/HomePage';
  import LoginPage from './pages/LoginPage';
  import ProfilePage from './pages/ProfilePage';
  import ResetPasswordPage from './pages/ResetPasswordPage';
  import SignUpPage from './pages/SignUpPage';
  import * as Type from './utils/@types';

  const App: FC = () => {
      const user = useSelector((state: RootStateOrAny): Type.User => state.user);

      const route =
          user && user.firstName ? (
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/api" element={<ApiPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/*" element={<Navigate replace to={'/'} />} />
              </Routes>
          ) : (
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
                  <Route path="/*" element={<Navigate replace to={'/'} />} />
              </Routes>
          );

      return (
          <div className="app">
              <Header />
              <main>{route}</main>
              <Footer />
          </div>
      );
  };

  export default App;
```

### Index

[Go Back to Contents](#table-of-contents)

In `src/index.tsx`

```TypeScript
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
```
