<h1>Last Update - 11/06/2021</h1>

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
  - [Project](#project)
    - [Public Folder](#public-folder)
      - [Index.html](#indexhtml)
      - [Manifest](#manifest)
    - [Components](#components)
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
      - [Functions](#functions)
    - [Store](#store)
    - [App](#app)
    - [Index](#index)
    - [.env.local](#envlocal)

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
  # npm i react-router-dom@6 redux react-redux redux-thunk redux-logger node-sass @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
  npm i react-router-dom@6

  npm i redux
  npm i react-redux
  npm i redux-thunk
  npm i redux-logger

  npm i node-sass

  npm i @fortawesome/free-solid-svg-icons
  npm i @fortawesome/react-fontawesome

  # npm i -D @types/react @types/react-dom @types/react-redux @types/react-router-dom @types/redux-logger
  npm i -D @types/react-redux
  npm i -D @types/react-router-dom
  npm i -D @types/redux-logger
```

> **For now 11/06/2021** make sure you are using typescript version `4.0.3` (Today TypeScript latest version is given some errors)

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

## Environment Variables

[Go Back to Contents](#contents)

In `.env.local`

- With react the variables need to start with `REACT_APP_`

  ```Bash
    REACT_APP_BACKEND_URL="127.0.0.1:3001"
    REACT_APP_BACKEND_PORT=3001
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

#### Alert

[Go Back to Contents](#table-of-contents)

In `src/components/shared/Alert.tsx`

```TypeScript
  import { FC, useEffect } from 'react';
  import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
  import { removeMsg } from '../../redux/msg';
  import * as Type from '../../utils/@types';

  const Alert: FC = () => {
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const dispatch = useDispatch();

      useEffect(() => {
          const timer = setTimeout(() => {
              dispatch(removeMsg());
          }, 10000);
          return () => {
              clearTimeout(timer);
              dispatch(removeMsg());
          };
      }, [dispatch]);

      const icon = (
          <div className={msg.iconColor ? `alert__icon alert__icon--${msg.iconColor}` : `alert__icon`}>{msg.icon}</div>
      );

      const messages = msg.msgs.map((item, idx) => {
          return (
              <div key={`msg_${idx}`} className={`alert__msg alert__msg--${msg.msgColor}`}>
                  {item}
              </div>
          );
      });

      return (
          <div className="alert">
              {msg.msgs.length > 0 && msg.icon && icon}
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
      noHover = false,
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
      const noHoverClass: string = noHover ? `btn--no-hover ` : '';
      const directionClass: string = `btn__${direction} `;
      const btnColorClass: string = btnColor ? `btn--${btnColor} ` : '';
      const customClass: string = `btn ${noHoverClass}${btnColorClass}${directionClass}${handleClass}`;

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

      return (
          <div className="popup" onClick={handleClose}>
              <div className="popup__container" onClick={(e) => e.stopPropagation()}>
                  <Button
                      btnType="link"
                      btnColor="danger"
                      faIcon={faTimes}
                      noHover={true}
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
  import { setMsg } from '../redux/msg';
  import { showPopup } from '../redux/popup';
  import * as Type from '../utils/@types';
  import * as Request from '../utils/helpers/functions/request';

  const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
  const URL: string =
      process.env.REACT_APP_ENV! === 'production'
          ? `${process.env.REACT_APP_BACKEND_URL!}/api/api`
          : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/api`;

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
          (async () => {
              try {
                  const response: Type.Response<Type.ApiForm[]> = await Request.postData(`${URL}`, {});
                  if (!response.ok)
                      return dispatch(
                          setMsg({
                              msgs: [response.error.message],
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
                  {!popup.visible && msg.msgs.length > 0 && <Alert />}

                  {popup.visible && !popup.custom && (
                      <Popup>
                          <ApiForm setApis={setApis} data={api} />
                      </Popup>
                  )}
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
          return () => {
              dispatch(hidePopup());
              dispatch(removeMsg());
          };
      }, [dispatch]);

      return (
          <div className="login-page">
              <div className="container">
                  <h1>LOGIN</h1>
                  <div className="login-page__form">
                      <UserLoginForm />
                      {!popup.visible && msg.msgs.length > 0 && <Alert />}
                      {popup.visible && popup.custom && (
                          <Popup>
                              <div className="popup__custom__link">
                                  <a href={popup.custom}>Click Here</a>
                              </div>
                          </Popup>
                      )}
                      {popup.visible && !popup.custom && (
                          <Popup>
                              <UserResetPasswordForm />
                          </Popup>
                      )}
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
  import * as Type from '../utils/@types';

  const ProfilePage: FC = () => {
      const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
      const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
      const dispatch = useDispatch();

      useEffect(() => {
          return () => {
              dispatch(removeMsg());
          };
      }, [dispatch]);

      return (
          <div className="profile-page">
              <div className="container">
                  <h1>PROFILE</h1>
                  <UserProfileForm />
                  {!popup.visible && msg.msgs.length > 0 && <Alert />}
                  {popup.visible && (
                      <Popup>
                          <UserDeleteForm />
                      </Popup>
                  )}
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
          return () => {
              dispatch(removeMsg());
          };
      }, [dispatch]);

      return (
          <div className="reset-password-page">
              <div className="container">
                  <h1>Reset Password</h1>
                  <UserUpdatePasswordForm token={token!} />
                  {msg.msgs.length > 0 && <Alert />}
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
          return () => {
              dispatch(hidePopup());
              dispatch(removeMsg());
          };
      }, [dispatch]);

      return (
          <div className="signup-page">
              <div className="container">
                  <h1>SIGN UP</h1>
                  <div className="signup-page__form">
                      <UserSignUpForm />
                      {!popup.visible && msg.msgs.length > 0 && <Alert />}
                      {popup.visible && popup.custom && (
                          <Popup>
                              <div className="popup__custom__link">
                                  <a href={popup.custom}>Click Here</a>
                              </div>
                          </Popup>
                      )}
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
              return Object.create(initialState);
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
              return {
                  visible: false,
                  title: '',
                  message: '',
                  children: true,
                  custom: '',
              };
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
  import * as Request from '../utils/helpers/functions/request';
  import * as Token from '../utils/helpers/functions/token';

  const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
  const URL: string =
      process.env.REACT_APP_ENV! === 'production'
          ? `${process.env.REACT_APP_BACKEND_URL!}/api/user`
          : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/user`;

  const SET_MSG: string = 'SET_MSG';
  const LOGIN_USER: string = 'LOGIN_USER';
  const LOGOUT_USER: string = 'LOGOUT_USER';
  const SHOW_POPUP: string = 'SHOW_POPUP';

  export const loginUser: Type.ActionThunk<Type.LoginForm, null> = (data) => {
      return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
          try {
              const response: Type.Response<string> = await Request.postData(`${URL}/login`, data!);

              if (!response.ok) {
                  if (response.error.verifyToken) {
                      dispatch({
                          type: SHOW_POPUP,
                          payload: {
                              title: 'Verify Email',
                              custom: `${URL}/email/${response.error.verifyToken}`,
                          },
                      });
                  }
                  return dispatch({
                      type: SET_MSG,
                      payload: {
                          msgs: [response.error.message],
                          msgColor: 'danger',
                          icon: '⚠',
                          iconColor: 'danger',
                      },
                  });
              }

              Token.setToken(response.data);
              dispatch({ type: LOGIN_USER });
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
              const response = await Request.deleteData(`${URL}/profile`, data!);

              if (!response.ok) {
                  const errors: string[] = [];
                  Object.keys(response.error).forEach((key) => {
                      errors.push(response.error[key]);
                  });
                  return dispatch({
                      type: SET_MSG,
                      payload: {
                          msgs: errors,
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

- In `src/sass/base/_base-variables.sass`

```SCSS
  // = General ===================================================================
  $font-size: 1
  $page-width: 110rem
  $border-radius: 0.3rem
  $grid-gap: 0.3rem

  // + Form
  $form-min-width: 20rem
  $form-width: 25rem
  $form-padding: 0.5rem
  $form-margin: 0.5rem

  // + Margin
  $margin-20: 2rem
  $margin-15: 1.5rem
  $margin-10: 1rem
  $margin-9: 0.9rem
  $margin-8: 0.8rem
  $margin-7: 0.7rem
  $margin-6: 0.6rem
  $margin-5: 0.5rem
  $margin-4: 0.4rem
  $margin-3: 0.3rem
  $margin-2: 0.2rem
  $margin-1: 0.1rem

  // + Padding
  $padding-30: 3rem
  $padding-25: 2.5rem
  $padding-20: 2rem
  $padding-15: 1.5rem
  $padding-10: 1rem
  $padding-9: 0.9rem
  $padding-8: 0.8rem
  $padding-7: 0.7rem
  $padding-6: 0.6rem
  $padding-5: 0.5rem
  $padding-4: 0.4rem
  $padding-3: 0.3rem
  $padding-2: 0.2rem
  $padding-1: 0.1rem

  // + Button
  $button-margin: 0.5rem
  $button-height: 1.8rem
  $button-padding-tb: 0.3rem
  $button-padding-lr: 0.6rem

  // + Input
  $input-padding: 0.3rem
  $input-margin: 0.3rem
  $input-height: 1.8rem

  // + Select
  $select-padding: 0.3rem
  $select-margin: 0.3rem
  $select-height: 1.8rem

  // + Textarea
  $textarea-padding: 0.3rem
  $textarea-margin: 0.3rem
  $textarea-height: 1.8rem

  // = Colors ====================================================================
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

  $color-success: $cgn-30
  $color-info: $cbl-50
  $color-warning: $cog-50
  $color-danger: $crd-60

  $color-primary: $cbl-30
  $color-primary-dark: $cbl-40
  $color-secondary: $cgy-25
  $color-secondary-dark: $cgy-15
```

- In `src/sass/base/_fonts.sass`

```SCSS
  @import ../helpers

  //! Import from url
  @include google-font("Pacifico")

  //! Import from local
  @font-face
    font-family: 'PressStart2P-Regular'
    font-weight: 400
    src: url('../../assets/fonts/PressStart2P-Regular.ttf') format('opentype')
```

- In `src/sass/base/_reset.sass`

  ```SCSS
    *,
    *::before,
    *::after
      margin: 0
      padding: 0
      box-sizing: border-box

    html
      height: 100%
      width: 100%
      min-width: 25rem

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
      width: 100%
      display: flex
      flex-direction: column
      align-items: center

    main
      display: flex
      flex-grow: 1
      width: 100%
      justify-content: center

    .container
      max-width: $page-width
      display: flex
      flex-direction: column
      align-items: center
      width: 100%

    li,
    ul
      list-style-type: none
      margin: 0
      padding: 0
      font-size: $font-size * 1.3rem

    a
      color: $cbl-50

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

    .loading
      cursor: progress
  ```

- In `src/sass/base/_typography.sass`

  ```SCSS
    h1
      font-size: 1.6rem

    h2
      font-size: 1.4rem

    h3
      font-size: 1.2rem

    h4
      font-size: 1rem
  ```

- In `src/sass/base/index.sass`

  ```SCSS
    @import ./_base-variables
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
              background-color: $cbl-65
        tbody
          tr
            th
              font-weight: normal
              background-color: $cgy-90
              padding: 0 $padding-10
            th:not(:last-child)
              border-right: 1px solid $cgy-75
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
          color: $cgn-30
        &--disabled
          color: $crd-40
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
        color: $cwt
        border: none
        text-decoration: none
        cursor: pointer

        img,
        svg
          transition: all 0.2s ease-in-out
      &__icon
        height: $font-size * 1rem
        min-width: $font-size * 1rem
      &--primary
        svg > path
          color: $cbl-45
          fill: $cbl-45
      &--danger
        svg > path
          color: $crd-40
          fill: $crd-40
      &--success
        svg > path
          color: $cgn-30
          fill: $cgn-30
      &--warning
        svg > path
          color: $cog-45
          fill: $cog-45
      &--grey
        svg > path
          color: $cgy-50
          fill: $cgy-50
      &--disabled
        svg > path
          cursor: not-allowed
          color: $cgy-70
          fill: $cgy-70
      &--hover-primary
        &:hover > svg > path
          color: $cbl-60
          fill: $cbl-60
        &:active > svg > path
          color: $cbl-40
          fill: $cbl-40
      &--hover-danger
        &:hover > svg > path
          color: $crd-50
          fill: $crd-50
        &:active > svg > path
          color: $crd-35
          fill: $crd-35
      &--hover-success
        &:hover > svg > path
          color: $cgn-40
          fill: $cgn-40
        &:active > svg > path
          color: $cgn-25
          fill: $cgn-25
      &--hover-warning
        &:hover > svg > path
          color: $cog-60
          fill: $cog-60
        &:active > svg > path
          color: $cog-40
          fill: $cog-40
      &--hover-grey
        &:hover > svg > path
          color: $cgy-65
          fill: $cgy-65
        &:active > svg > path
          color: $cgy-45
          fill: $cgy-45
      &--hover-disabled
        svg > path
          cursor: not-allowed
          color: $cgy-70
          fill: $cgy-70
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
        background-color: $cbl-45
        color: $cwt
        min-height: $button-height
        min-width: $button-height
        font-size: resize($font-size, 0.9)
        padding: $button-padding-tb $button-padding-lr
        border-radius: $border-radius
        border: none
        text-decoration: none
        cursor: pointer
        transition: all 0.2s ease-in-out

        &:hover
          transform: translateZ(0.1rem) scale(1.10)
          box-shadow: 0.25rem 0.25rem 0.25rem rgba($cbk, 0.2)
          background-color: $cbl-50
        &:active
          transform: translateZ(0.07rem) scale(1.07)
          box-shadow: 0.15rem 0.15rem 0.15rem rgba($cbk, 0.4)
          background-color: $cbl-40
      &--no-hover
        a,
        button
          &:hover,
          &:active
            transform: translateZ(0) scale(1)
            box-shadow: 0 0 0

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
            margin-right: $margin-3
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
            margin-right: $margin-3
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
            margin-bottom: $margin-3
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
            margin-bottom: $margin-3
      &--danger
        a,
        button
          background-color: $crd-40

          &:hover
            background-color: $crd-45
          &:active
            background-color: $crd-35
      &--success
        a,
        button
          background-color: $cgn-30

          &:hover
            background-color: $cgn-35
          &:active
            background-color: $cgn-25
      &--warning
        a,
        button
          background-color: $cog-45

          &:hover
            background-color: $cog-50
          &:active
            background-color: $cog-40
      &--disabled
        cursor: not-allowed

        a,
        button
          cursor: not-allowed
          background-color: $cgy-70

          &:hover
            transform: translateZ(0rem) scale(1)
            box-shadow: none
            background-color: $cgy-70
        a
          pointer-events: none
  ```

- In `src/sass/components/shared/_CTA.sass`

  ```SCSS
    .cta
      display: flex
      margin-bottom: $margin-3
      width: 100%

      &__row
        flex-direction: row

        &--justify-flex-start
          justify-content: flex-start

          & > :not(:last-child)
            margin-right: $margin-5
        &--justify-center
          justify-content: center

          & > :not(:first-child)
            margin-left: $margin-5
        &--justify-flex-end
          justify-content: flex-end

          & > :not(:first-child)
            margin-left: $margin-5
        &--align-flex-start
          align-items: flex-start
        &--align-center
          align-items: center
        &--align-flex-end
          align-items: flex-end
      &__column
        flex-direction: column

        & > :not(:last-child)
          margin-bottom: $margin-5
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
      background-color: $cbk
      min-height: 10rem
      max-height: 10rem
      width: 100%
      padding: 1rem

      &__footer-container
        display: grid
        grid-template-columns: 3fr 1fr 3fr
        column-gap: 2rem
        color: $cwt
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
        font-weight: bold
      &__link
        text-decoration: none
        color: $cwt

        &:hover
          color: $color-primary
      @include mq-manager(tab-port)
        min-height: 15rem
        max-height: 15rem

        &__footer-container
          grid-template-columns: 1fr
          grid-template-rows: repeat(3, 1fr)
          column-gap: 0rem
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
        border: 1px solid $cgy-70
      label
        margin: $input-margin
        text-align: left
        padding-left: $input-padding
        font-size: resize($font-size, 0.7)
        color: $cgy-40
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
          background: $cbl-45
      &--danger
        div:after
          background: $crd-40
      &--success
        div:after
          background: $cgn-30
      &--warning
        div:after
          background: $cog-45
      &--white
        div:after
          background: $cwt
      &--black
        div:after
          background: $cbk
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
      box-shadow: 0 0.3rem 0.3rem rgba($cbk, 0.3)
      background-color: $color-primary
      z-index: 1

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
        color: $cwt
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
        color: rgba($cwt, 0.5)
        font-size: $font-size * 1rem
        white-space: nowrap
        padding: 0 1.5rem

        &:hover
          background-color: $cbl-35
          color: $cwt
      &__bars
        display: none
        visibility: hidden

    .menu
      position: fixed
      top: 5rem
      left: 0
      width: 100%
      margin-bottom: $margin-20
      display: flex
      justify-content: center
      box-shadow: 0 0.3rem 0.3rem rgba($cbk, 0.3)
      background-color: $cbl-35
      z-index: 10

      &__sub-menu
        max-width: $page-width
        padding: $padding-5 $padding-25 $padding-1 $padding-25

    @include mq-manager(tab-port)
      .navbar
        &__navbar-container
          flex-direction: column
          align-items: center
          box-shadow: 0 0.2rem 0.3rem rgba($cbk, 0.3)
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
          padding: $margin-10 1.5rem
          width: 100%
          text-align: center
          display: flex
          justify-content: center
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

          &--light
            color: $cwt
          &--dark
            color: $cbl-20
  ```

- In `src/sass/components/shared/_popup.sass`

  ```SCSS
    .popup
      position: fixed
      top: 0
      left: 0
      background-color: rgba($cbk, 0.8)
      width: 100%
      height: 100%
      z-index: 10

      &__container
        @include abs-center
        top: 45%
        background-color: $cwt
        min-width: 30rem
        min-height: 5rem
        border-radius: $border-radius
        padding: 1rem
        color: $cbk
        z-index: 2
      &__close
        position: absolute
        top: $form-padding
        right: $form-padding
        font-size: $font-size * 1rem
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
        border: 1px solid $cgy-70
      label
        margin: $select-margin
        text-align: left
        padding-left: $select-padding - 0.1rem
        font-size: resize($font-size, 0.7)
        color: $cgy-40
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
        border: 1px solid $cgy-70
      label
        margin: $textarea-margin
        text-align: left
        padding-left: $textarea-padding
        font-size: resize($font-size, 0.7)
        color: $cgy-40
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
        color: $cgy-30
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
        color: $crd-70
        display: flex
        padding: $padding-3

        &--activated
          font-size: resize($font-size, 1.3)
          display: flex
          padding-top: 0.3rem
          color: $cbl-70
      &__delete-link
        color: $cgy-30
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
        margin-top: $margin-5

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
  ```

- In `src/sass/helpers/_tooltip.sass`

  ```SCSS
    .tooltip
      position: relative
      display: inline-block

      &__text
        font-size: resize($font-size, 0.8)
        visibility: hidden
        background-color: $color-primary
        color: $cwt
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
          border-color: $cgy-70 transparent transparent transparent

        &--left
          top: -10%
          left: -300%

          &::after
            top: 18%
            left: 91%
            margin-left: 0.5rem
            border-width: 0.5rem
            border-color: transparent transparent transparent $cgy-70
        &--right
          top: -10%
          left: 380%

          &::after
            top: 18%
            left: -24%
            margin-left: 0.5rem
            border-width: 0.5rem
            border-color: transparent $cgy-70 transparent transparent
        &--bottom
          top: 80%

          &::after
            top: -64%
            left: 50%
            margin-left: -0.5rem
            border-width: 0.5rem
            border-color: transparent transparent $cgy-70 transparent
      &:hover &__text
        visibility: visible
        opacity: 1

    .copy
      position: relative
      display: inline-block
      cursor: pointer

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
        color: $cwt
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
      margin-top: 7rem
      width: 100%
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center

      h1
        margin-bottom: $margin-20
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
        h1
          font-size: resize($font-size, 1.2)
        h2
          font-size: $font-size * 1rem
        h4
          font-size: $font-size * 0.8rem
        &__picture
          width: 8rem
  ```

- In `src/sass/pages/_api-page.sass`

  ```SCSS
    .api-page
      margin-top: 10rem
      width: 100%
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center

      h1
        margin-bottom: $margin-20
      &__form
        padding: 0.5rem
        width: 25rem

    @include mq-manager(tab-port)
      .api-page
        h1
          font-size: resize($font-size, 1.2)
        &__sub-menu
          padding: $padding-5 1.75rem
  ```

- In `src/sass/pages/_home-page.sass`

  ```SCSS
    .home-page
      margin-top: 7rem
      width: 100%
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center

      h1
        margin-bottom: $margin-20
      h2
        color: $color-primary

    @include mq-manager(tab-port)
      .home-page
        h1
          font-size: resize($font-size, 1.2)
        h2
          font-size: $font-size * 1rem
  ```

- In `src/sass/pages/_login-page.sass`

  ```SCSS
    .login-page
      margin-top: 7rem
      width: 100%
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center

      h1
        margin-bottom: $margin-20

    @include mq-manager(tab-port)
      .login-page
        h1
          font-size: resize($font-size, 1.2)
  ```

- In `src/sass/pages/_profile-page.sass`

  ```SCSS
    .profile-page
      margin-top: 7rem
      width: 100%
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center

      h1
        margin-bottom: $margin-20

    @include mq-manager(tab-port)
      .profile-page
        h1
          font-size: resize($font-size, 1.2)
  ```

- In `src/sass/pages/_reset-password-page.sass`

  ```SCSS
    .reset-password-page
      margin-top: 7rem
      width: 100%
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center

      h1
        margin-bottom: $margin-20

    @include mq-manager(tab-port)
      .reset-password-page
        h1
          font-size: resize($font-size, 1.2)
  ```

- In `src/sass/pages/_signup-page.sass`

  ```SCSS
    .signup-page
      margin-top: 7rem
      width: 100%
      display: flex
      flex-grow: 1
      flex-direction: column
      align-items: center

      h1
        margin-bottom: $margin-20

    @include mq-manager(tab-port)
      .signup-page
        h1
          font-size: resize($font-size, 1.2)
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

    export type ApiFormC = {
        setApis(prev: any): void;
        data?: {
            api: ApiForm;
            idx: number;
        };
    };

    export type ApiTableC = {
        thead: Thead[];
        apis: ApiForm[];
        setApis(e: MouseEvent, obj: any, idx: number): void;
        setApi(e: MouseEvent, obj: any, idx: number): void;
    };
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

    export type MsgAction = {
        type: string;
        payload: Msg;
    };
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

    export type PopupAction = {
        type: string;
        payload?: Popup;
    };
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

- In `src/utils/@types/shared/_functions.ts`

  ```TypeScript
    import { FormEvent, MouseEvent } from 'react';

    // = Generic ===================================================================
    export type SleepFn = {
        (ms: number): Promise<void>;
    };

    export type DownloadJsonFn = {
        (response: any, outputFile: string): void;
    };

    // = Forms =====================================================================
    export type HandleChangeFn<T> = {
        (e: T): void;
    };

    export type HandleClickFn = {
        (e?: MouseEvent): void;
    };

    export type HandleClickDataFn<T1, T2> = {
        (e?: MouseEvent, data?: T1, data2?: T2): void;
    };

    export type HandleSubmitFn<T> = {
        (e: FormEvent, data?: T): void;
    };

    export type IsFormValidFn = {
        (): boolean;
    };

    // = Request / Response ========================================================
    export type RequestFn = {
        (type: string, url: string, attrs?: any, reqToken?: boolean, throwError?: boolean, nTry?: number): Promise<any>;
    };

    export type ReqHelperFn = {
        (url: string, data?: any, useToken?: boolean, throwError?: boolean): Promise<any>;
    };
  ```

- In `src/utils/@types/shared/_redux.ts`

  ```TypeScript
    export type ActionRedux<T> = {
        (data?: T): void;
    };

    export type ActionThunk<T1, T2> = {
        (data1?: T1, data2?: T2): void;
    };

    export type ActionPayload<T> = {
        (data?: T): { type: string; payload?: T };
    };

    export type Reducer<S, A> = {
        (state: S, action: A): void;
    };
  ```

- In `src/utils/@types/shared/_types.ts`

  ```TypeScript
    import { IconProp } from '@fortawesome/fontawesome-svg-core';
    import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

    // = Types =====================================================================
    export type Obj = {
        [key: string]: any;
    };

    // = Forms =====================================================================
    export type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

    export type HandleKeyboard = KeyboardEvent<HTMLInputElement>;

    // = Request / Response ========================================================
    export type RequestOptions = {
        method: string;
        mode?: RequestMode;
        headers: {
            'Content-Type': string;
            'Access-Control-Allow-Origin'?: string;
            Authorization?: string;
        };
        body?: string;
    };

    export type Response<T> = {
        data: T;
        error: Obj;
        ok: boolean;
        status: number;
    };

    // = Components ================================================================
    export type Input = {
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
    };

    export type Textarea = {
        name: string;
        value: string;
        onChange(e: HandleChange): void;
        label?: string;
        handle?: string;
        placeholder?: string;
        required?: boolean;
        disabled?: boolean;
        labelPosition?: string;
    };

    export type Select = {
        name: string;
        value: string;
        options: Obj[];
        onChange(e: HandleChange): void;
        label?: string;
        handle?: string;
        required?: boolean;
        disabled?: boolean;
        labelPosition?: string;
    };

    export type Button = {
        value?: string;
        icon?: string;
        faIcon?: IconProp;
        handle?: string;
        iconDirection?: string;
        direction?: string;
        disabled?: boolean;
        noHover?: boolean;
        type?: 'button' | 'submit' | 'reset' | undefined;
        btnType?: string;
        btnColor?: string;
        onClick?(e: MouseEvent<HTMLElement>): void;
        href?: string;
    };

    export type ButtonIcon = {
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
    };

    export type CTA = {
        handle?: string;
        direction?: string;
        justify?: string;
        align?: string;
    };

    export type LoadingSpinner = {
        handle?: string;
        color?: string;
    };

    export type Thead = {
        id: string;
        friendlyName: string;
    };
  ```

- In `src/utils/@types/shared/index.ts`

  ```TypeScript
    export * from './_functions';
    export * from './_redux';
    export * from './_types';
  ```

- In `src/utils/@types/token/_functions.ts`

  ```TypeScript
    import { User } from '..';

    // = Functions =================================================================
    export type GetTokenFn = {
        (): string | null;
    };

    export type GetUserFromTokenFn = {
        (): User | null;
    };

    export type SetTokenFn = {
        (token: string): void;
    };

    export type UpdateTokenFn = {
        (token: string): void;
    };

    export type RemoveTokenFn = {
        (): void;
    };
  ```

- In `src/utils/@types/token/index.ts`

  ```TypeScript
    export * from './_functions';
  ```

- In `src/utils/@types/user/_forms.ts`

  ```TypeScript
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

    export type UserUpdatePasswordFormC = {
        token: string;
    };
  ```

- In `src/utils/@types/user/_redux.ts`

  ```TypeScript
    import { User } from '.';

    export type UserState = User | null;

    export type UserAction = {
        type: string;
        payload?: User;
    };
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

    // = Request / Response ========================================================
    export type ResetPasswordRes = {
        message: string;
        verifyToken?: string;
    };

    export type UpdatePasswordRes = ResetPasswordRes;

    export type SignUpRes = ResetPasswordRes;
  ```

- In `src/utils/@types/user/index.ts`

  ```TypeScript
    export * from './_forms';
    export * from './_redux';
    export * from './_types';
  ```

- In `src/utils/@types/index.ts`

  ```TypeScript
    export * from './api';
    export * from './message';
    export * from './popup';
    export * from './shared';
    export * from './token';
    export * from './user';
  ```

#### Functions

[Go Back to Contents](#table-of-contents)

- In `src/utils/helpers/functions/request.ts`

  ```TypeScript
    import * as Type from '../../@types';
    import { sleep } from './shared';
    import * as Token from './token';

    const REQUEST_TRY: number = +process.env.REACT_APP_REQUEST_TRY! || 5;

    const request: Type.RequestFn = async (type, url, attrs, reqToken, throwError, nTry = 0) => {
        const option: Type.RequestOptions = {
            method: type,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (reqToken) option.headers.Authorization = `Bearer ${Token.getToken()}`;
        if (attrs && Object.keys(attrs).length > 0 && type !== 'GET') option.body = JSON.stringify(attrs);

        try {
            const res = await fetch(url, option);
            const data = await res.json();
            const formattedRes = {
                data: res.ok ? data : null,
                ok: res.ok,
                status: res.status,
                error: res.ok ? null : data,
            };

            if (throwError) {
                if (res.ok) return { data, error: null };
                throw new Error(JSON.stringify(data));
            }

            return formattedRes;
        } catch (error: any) {
            if (nTry === REQUEST_TRY) {
                if (throwError) throw new Error(error);
                return { data: null, ok: false, status: 503, error };
            }

            nTry++;
            await sleep(5000);
            return await request(type, url, attrs, reqToken, throwError, nTry);
        }
    };

    export const getData: Type.ReqHelperFn = async (url, useToken = true, throwError = false) => {
        return await request('GET', url, null, useToken, throwError);
    };

    export const postData: Type.ReqHelperFn = async (url, data = {}, useToken = true, throwError = false) => {
        return await request('POST', url, data, useToken, throwError);
    };

    export const updateData: Type.ReqHelperFn = async (url, data = {}, useToken = true, throwError = false) => {
        return await request('PUT', url, data, useToken, throwError);
    };

    export const deleteData: Type.ReqHelperFn = async (url, data = {}, useToken = true, throwError = false) => {
        return await request('DELETE', url, data, useToken, throwError);
    };
  ```

- In `src/utils/helpers/functions/shared.ts`

  ```TypeScript
    import * as Type from '../../@types';

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
  ```

- In `src/utils/helpers/functions/token.ts`

  ```TypeScript
    import * as Type from '../../@types';

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

### Store

[Go Back to Contents](#table-of-contents)

In `src/store.ts`

```TypeScript
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
  import App from './App';
  import reportWebVitals from './reportWebVitals';
  import './sass/styles.sass';
  import store from './store';

  ReactDOM.render(
      <React.StrictMode>
          <Provider store={store}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </Provider>
      </React.StrictMode>,
      document.getElementById('root')
  );

  reportWebVitals();
```

### .env.local

[Go Back to Contents](#table-of-contents)

In `.env.local`

```Bash
  REACT_APP_BACKEND_URL="http://localhost"
  REACT_APP_BACKEND_PORT=3001
  REACT_APP_PASSWORD_LEN=7
  REACT_APP_ENV=development
```
