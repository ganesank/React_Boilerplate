<h1 id='contents'>Table of Contents</h1>

- [LIVE LINK](#live-link)
- [REACT BOILERPLATE](#react-boilerplate)
  - [Start New React App](#start-new-react-app)
  - [Packages](#packages)
    - [Deploy Netlify](#deploy-netlify)
  - [Folder and Files](#folder-and-files)
  - [Environment Variables](#environment-variables)
  - [tsconfig.json](#tsconfigjson)
  - [Project](#project)
    - [Public Folder](#public-folder)
      - [Index.html](#indexhtml)
      - [Manifest](#manifest)
    - [CSS/SASS](#csssass)
      - [Helpers](#helpers)
      - [Base](#base)
      - [Components](#components)
      - [Pages](#pages)
    - [Components](#components-1)
      - [ErrorMsg](#errormsg)
      - [Footer](#footer)
      - [FormLogin](#formlogin)
      - [FormSignUp](#formsignup)
      - [Icon](#icon)
      - [Navbar](#navbar)
    - [Pages](#pages-1)
      - [HomePage](#homepage)
      - [LoginPage](#loginpage)
      - [SignUpPage](#signuppage)
    - [Redux](#redux)
      - [User's Redux](#users-redux)
    - [Utils](#utils)
      - [Types](#types)
      - [Requests](#requests)
        - [REQUEST HELPER](#request-helper)
        - [REQUEST SERVICE](#request-service)
        - [TOKEN SERVICE](#token-service)
      - [Store](#store)
    - [App.tsx](#apptsx)
    - [Index.tsx](#indextsx)

# LIVE LINK

- [https://rogertakeshita-react-boilerplate.netlify.app/](https://rogertakeshita-react-boilerplate.netlify.app/)

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

### Deploy Netlify

[Go Back to Contents](#contents)

- in `package.json`

  - Update the build script

    ```JSON
      "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build && echo '/* /index.html 200' | cat > build/_redirects",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
      },
    ```

## Folder and Files

[Go Back to Contents](#contents)

- Create folder and files, remove files

  ```Bash
    touch .env.local
    touch src/assets/fonts
    touch src/assets/data
    touch src/assets/images/logos
    touch src/css/1-helpers/_animations.sass
    touch src/css/1-helpers/_functions.sass
    touch src/css/1-helpers/_mixins.sass
    touch src/css/1-helpers/_tooltip.sass
    touch src/css/2-base/_base.sass
    touch src/css/2-base/_fonts.sass
    touch src/css/2-base/_typography.sass
    touch src/css/2-base/_variables.sass
    touch src/css/3-components/_button.sass
    touch src/css/3-components/_error-msg.sass
    touch src/css/3-components/_footer.sass
    touch src/css/3-components/_form-login-signup.sass
    touch src/css/3-components/_icon.sass
    touch src/css/3-components/_navbar.sass
    touch src/css/4-pages/_about-page.sass
    touch src/css/styles.sass
    touch src/components/ErrorMsg.tsx
    touch src/components/Footer.tsx
    touch src/components/FormLogin.tsx
    touch src/components/FormSignUp.tsx
    touch src/components/Navbar.tsx
    touch src/pages/AboutPage.tsx
    touch src/pages/HomePage.tsx
    touch src/pages/LoginPage.tsx
    touch src/pages/SignUpPage.tsx
    touch src/redux/user.tsx
    touch src/utils/@types/types.ts
    touch src/utils/api/requestHelper.ts
    touch src/utils/api/requestService.ts
    touch src/utils/api/tokenService.ts
    touch src/store.ts
    rm src/logo.svg src/setupTests.ts src/App.test.tsx src/index.css src/App.css public/logo192.png public/logo512.png
  ```

## Environment Variables

[Go Back to Contents](#contents)

- in `.env.local`

  - With react the variables need to start with `REACT_APP_`

    ```Bash
      REACT_APP_BACKEND_URL="127.0.0.1:3001"
      REACT_APP_BACKEND_PORT=3001
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

### Public Folder

#### Index.html

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
      <meta name="description" content="Roger Takeshita - Frontend Boilerplate" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>Roger Takeshita - Frontend</title>
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

### CSS/SASS

[Go Back to Contents](#contents)

- in `src/css/styles.sass`

  ```SCSS
    // = Helpers
    @import ./1-helpers/animations
    @import ./1-helpers/functions
    @import ./1-helpers/mixins
    @import ./1-helpers/tooltip

    // = Base
    @import ./2-base/variables
    @import ./2-base/base
    @import ./2-base/fonts
    @import ./2-base/typography

    // = Components
    @import ./3-components/navbar
    @import ./3-components/form-login-signup
    @import ./3-components/error-msg
    @import ./3-components/button
    @import ./3-components/icon
    @import ./3-components/footer

    // = Pages
    @import ./4-pages/about-page
  ```

#### Helpers

[Go Back to Contents](#contents)

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

- in `src/css/1-helpers/_functions.sass`

  ```SCSS
    @function resize($original, $percent)
      @return $original * $percent * 1rem
  ```

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
        @media (max-width: 75rem) //! 1200px
          @content

      @if $breakpoint == desk
        @media (max-width: 112.5rem) //! 1800px
          @content

    @mixin google-font($family)
      @import url("http://fonts.googleapis.com/css?family=#{$family}")
  ```

- in `src/css/1-helpers/_tooltip.sass`

  ```SCSS
    @import ../2-base/variables

    .tooltip
      position: relative
      display: inline-block

      &__tooltip-text
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

        &::after
          content: ''
          position: absolute
          top: 100%
          left: 50%
          margin-left: -0.5rem
          border-width: 0.5rem
          border-style: solid
          border-color: $color-grey transparent transparent transparent
      &:hover &__tooltip-text
        visibility: visible
        opacity: 1
  ```

#### Base

[Go Back to Contents](#contents)

- in `src/css/2-base/_base.sass`

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

    main
      flex-grow: 1
      width: 100%
      max-width: $default-page-size
      padding: 2rem
      display: flex
      justify-content: center

    .container
      max-width: $default-page-size
      width: 100%
      display: flex
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

- in `src/css/2-base/_typography.sass`

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

- in `src/css/2-base/_variables.sass`

  ```SCSS
    $color-primary: rgb(55,90,128)
    $color-primary-dark: rgb(37, 61, 87)
    $color-secondary: rgb(48,48,48)
    $color-secondary-dark: rgb(41, 41, 41)

    $color-black: rgb(14, 14, 14)
    $color-grey: rgb(204, 204, 204)
    $color-grey-dark: rgb(97, 97, 97)
    $color-white: rgb(255,255,255)

    $color-success: rgb(0,188,140)
    $color-info: rgb(52,152,219)
    $color-warning: rgb(243,156,18)
    $color-danger: rgb(231,76,59)

    $default-font-size: 1rem
    $default-page-size: 110rem

    $border-radius: 0.3rem
  ```

#### Components

[Go Back to Contents](#contents)

- in `src/css/3-components/_button.sass`

  ```SCSS
    .btn
    background-color: $color-info
    font-size: 0.9rem
    padding: 0 0.7rem
    height: 2rem
    border-radius: $border-radius
    border: none
    display: inline-flex
    align-items: center
    color: $color-white
    text-decoration: none
    cursor: pointer
    transition: all 0.2s ease-in-out

    &:hover
      transform: translateZ(1rem) scale(1.1)
      box-shadow: 0.3rem 0.3rem 0.3rem rgba($color-black, 0.3)
    &--warning
      background-color: $color-warning

      &:hover
        background-color: rgba($color-warning, 0.8)
    &--disabled
      cursor: not-allowed
      background-color: $color-grey
  ```

- in `src/css/3-components/_error-msg.sass`

  ```SCSS
    .error-msg
    height: 2rem
    font-size: $default-font-size
    display: flex
    justify-content: center
    align-items: center
    color: $color-info

    &__icon
      font-size: 1.7rem
      color: $color-danger
  ```

- in `src/css/3-components/_footer.sass`

  ```SCSS
    .footer
    display: flex
    justify-content: center
    background-color: $color-black
    min-height: 10rem
    width: 100%
    padding: 1rem

    &__footer-container
      display: grid
      grid-template-columns: 3fr 1fr 3fr
      grid-gap: 2rem
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
      font-weight: bold
    &__link
      text-decoration: none
      color: $color-white

      &:hover
        color: $color-primary
    @include mq-manager(tab-land)
      &__footer-container
        grid-template-columns: repeat(2, 1fr)
        grid-template-rows: repeat(2, 1fr)
        grid-gap: 0rem
      &__left
        grid-column: 1 / span 1
        grid-row: 2 / 3
      &__right
        grid-column: 2 / -1
        grid-row: 2 / 3
      &__middle
        grid-column: 1 / -1
        grid-row: 1 / 2

    @include mq-manager(tab-port)
      &__footer-container
        grid-template-columns: 1fr
        grid-template-rows: repeat(3, 1fr)
        grid-gap: 0rem
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

- in `src/css/3-components/_form-login-signup.sass`

  ```SCSS
    .form-login-signup
    &__container
      padding: 0.5rem
      width: 25rem
      text-align: center

      h2
        margin-bottom: 1rem
    &__input-container
      display: flex
      flex-direction: column
      margin-bottom: 0.3rem
    &__input
      border-radius: $border-radius
      font-size: 0.8rem
      height: 1.8rem
      padding: 0.5rem
    &__label
      margin: 0.3rem 0
      text-align: left
      padding-left: 0.3rem
      font-size: 0.7rem
    &__cta
      text-align: right
      padding: 0.5rem 0

      & > :not(:last-child)
        margin-right: 0.3rem
  ```

- in `src/css/3-components/_icon.sass`

  ```SCSS
    .icon
    &__social-media
      height: 2rem
      margin: 0.3rem
    &__technology
      height: 3rem
  ```

- in `src/css/3-components/_navbar.sass`

  ```SCSS
    .navbar
    display: flex
    justify-content: center
    background-color: $color-primary
    height: 5rem
    width: 100%
    box-shadow: 0 0.5rem 1rem rgba($color-black, 0.5)

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
    &__menu-container
      height: 100%
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
      font-size: $default-font-size
      white-space: nowrap
      padding: 0 1.5rem

      &:hover
        background-color: $color-primary-dark
        color: $color-white
  ```

#### Pages

[Go Back to Contents](#contents)

- in `src/css/4-pages/_about-page.sass`

  ```SCSS
    .about-page
      display: flex
      flex-direction: column
      align-items: center

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
    &__tech-label
      margin-top: 0.5rem
  ```

### Components

#### ErrorMsg

[Go Back to Contents](#contents)

- in `src/components/ErrorMsg.tsx`

  ```TypeScript
    import React, { useState, useEffect } from 'react';
    import * as type from '../utils/@types/types';

    const ErrorMsg: React.FC<type.ErrorMsgComponentProps> = ({
        errorMsg,
        cleanErrorMsg,
    }) => {
        const [msg, setMsg] = useState<string>('');

        useEffect(() => {
            const timer = setTimeout(() => {
                setMsg('');
                cleanErrorMsg();
            }, 5000);
            setMsg(errorMsg);

            return () => {
                clearTimeout(timer);
            };
        }, [errorMsg, cleanErrorMsg]);

        return (
            <div className="error-msg">
                {msg && (
                    <>
                        <span className="error-msg__icon">⚠</span> {msg}
                    </>
                )}
            </div>
        );
    };

    export default ErrorMsg;
  ```

#### Footer

[Go Back to Contents](#contents)

- in `src/components/Footer.tsx`

  ```TypeScript
    import React from 'react';
    import socialMedias from '../assets/data/socialMedias';

    const Footer: React.FC = () => {
        return (
            <div className="footer">
                <div className="footer__footer-container container">
                    <div className="footer__left">
                        <ul className="footer__social-media-list">
                            {socialMedias.map((media, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="footer__social-media-item tooltip"
                                    >
                                        <a
                                            href={media.url}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="footer__link"
                                        >
                                            <img
                                                src={media.src}
                                                alt={media.name}
                                                className={media.class}
                                            />
                                        </a>
                                        <span className="tooltip__tooltip-text">
                                            {media.name}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="footer__middle">
                        <a
                            href="https://github.com/Roger-Takeshita/React_Boilerplate"
                            className="footer__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="footer__repo tooltip">
                                <span className="footer__repo-text">
                                    &lt; / &gt;
                                </span>
                                <span className="tooltip__tooltip-text">Repo</span>
                            </div>
                        </a>
                    </div>
                    <div className="footer__right">
                        &copy; Roger Takeshita - 2020. All rights reserved.
                    </div>
                </div>
            </div>
        );
    };

    export default Footer;
  ```

#### FormLogin

[Go Back to Contents](#contents)

- in `src/components/FormLogin.tsx`

  ```TypeScript
    import React, { FormEvent, useState, ChangeEvent } from 'react';
    import { Link } from 'react-router-dom';
    import * as type from '../utils/@types/types';

    const FormLogin: React.FC<type.FormLoginComponentProps> = ({ onSubmit }) => {
        const initialState: type.LoginForm = {
            email: '',
            password: '',
        };
        const [form, setForm] = useState(initialState);

        const handleClick = (e: FormEvent) => {
            e.preventDefault();
            onSubmit(form);
        };

        const handleChange = ({
            target: { name, value },
        }: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >) => {
            setForm({
                ...form,
                [name]: value,
            });
        };

        const isFormValid = (): boolean => {
            return !(form.email.trim() !== '' && form.password.trim() !== '');
        };

        return (
            <div className="form-login-signup__container">
                <h2>Login</h2>
                <form onSubmit={handleClick}>
                    <div className="form-login-signup__input-container">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-login-signup__input"
                            required
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="username"
                        />
                        <label htmlFor="email" className="form-login-signup__label">
                            Email
                        </label>
                    </div>
                    <div className="form-login-signup__input-container">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-login-signup__input"
                            required
                            value={form.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        <label
                            htmlFor="password"
                            className="form-login-signup__label"
                        >
                            Password
                        </label>
                    </div>
                    <div className="form-login-signup__cta">
                        <Link className="btn btn--warning" to="/signup">
                            Sign Up
                        </Link>
                        <button
                            className={isFormValid() ? 'btn btn--disabled ' : 'btn'}
                            type="submit"
                            disabled={isFormValid()}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    };

    export default FormLogin;
  ```

#### FormSignUp

[Go Back to Contents](#contents)

- in `src/components/FormSignUp.tsx`

  ```TypeScript
    import React, { useState, FormEvent, ChangeEvent } from 'react';
    import { Link } from 'react-router-dom';
    import * as type from '../utils/@types/types';

    const FormSignUp: React.FC<type.FormSignUpComponentProps> = ({ onSubmit }) => {
        const initialState: type.SignupForm = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
        const [form, setForm] = useState(initialState);

        const handleClick = (e: FormEvent) => {
            e.preventDefault();
            onSubmit(form);
        };

        const handleChange = ({
            target: { name, value },
        }: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >) => {
            setForm({
                ...form,
                [name]: value,
            });
        };

        const isFormValid = (): boolean => {
            return !(
                form.firstName.trim() !== '' &&
                form.lastName.trim() !== '' &&
                form.email.trim() !== '' &&
                form.password.trim() !== '' &&
                form.confirmPassword.trim() !== '' &&
                form.confirmPassword.trim() === form.password.trim()
            );
        };

        return (
            <div className="form-login-signup__container">
                <h2>Sign Up</h2>
                <form onSubmit={handleClick}>
                    <div className="form-login-signup__input-container">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="form-login-signup__input"
                            required
                            value={form.firstName}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="firstName"
                            className="form-login-signup__label"
                        >
                            First Name
                        </label>
                    </div>
                    <div className="form-login-signup__input-container">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="form-login-signup__input"
                            required
                            value={form.lastName}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="lastName"
                            className="form-login-signup__label"
                        >
                            Last Name
                        </label>
                    </div>
                    <div className="form-login-signup__input-container">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-login-signup__input"
                            required
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="username"
                        />
                        <label htmlFor="email" className="form-login-signup__label">
                            Email
                        </label>
                    </div>
                    <div className="form-login-signup__input-container">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-login-signup__input"
                            required
                            value={form.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        <label
                            htmlFor="Password"
                            className="form-login-signup__label"
                        >
                            Password
                        </label>
                    </div>
                    <div className="form-login-signup__input-container">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="form-login-signup__input"
                            required
                            value={form.confirmPassword}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        <label
                            htmlFor="confirmPassword"
                            className="form-login-signup__label"
                        >
                            Confirm Password
                        </label>
                    </div>
                    <div className="form-login-signup__cta">
                        <Link className="btn btn--warning" to="/login">
                            Login
                        </Link>
                        <button
                            className={isFormValid() ? 'btn btn--disabled ' : 'btn'}
                            type="submit"
                            disabled={isFormValid()}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    };

    export default FormSignUp;
  ```

#### Icon

[Go Back to Contents](#contents)

- in `src/css/3-components/_icon.sass`

  ```SCSS
    .icon
    &__social-media
      height: 2rem
      margin: 0.3rem
    &__technology
      height: 3rem
  ```

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
                        <Link className="navbar__link" to="/about">
                            About
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
                        <Link className="navbar__link" to="/about">
                            About
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
                <div className="container">
                    <div className="navbar__logo">Roger Takeshita</div>
                    <div className="navbar__menu-container">{menu}</div>
                </div>
            </div>
        );
    };

    export default Navbar;
  ```

### Pages

#### HomePage

[Go Back to Contents](#contents)

- in `src/pages/HomePage.tsx`

  ```TypeScript
    import React from 'react';

    const HomePage: React.FC = () => {
        return (
            <div>
                <h1>HOME</h1>
            </div>
        );
    };

    export default HomePage;
  ```

#### LoginPage

[Go Back to Contents](#contents)

- in `src/pages/LoginPage.tsx`

  ```TypeScript
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import * as type from '../utils/@types/types';

    import { loginUser } from '../redux/user';

    import FormLogin from '../components/FormLogin';
    import ErrorMsg from '../components/ErrorMsg';

    const LoginPage: React.FC = () => {
        const [error, setError] = useState<string>('');
        const dispatch = useDispatch();

        const handleSubmit = async (data: type.LoginForm) => {
            try {
                await dispatch(loginUser(data));
            } catch (error) {
                setError(error.message);
            }
        };

        const cleanErrorMsg = (): void => {
            setError('');
        };

        return (
            <div>
                <FormLogin onSubmit={handleSubmit} />
                <ErrorMsg errorMsg={error} cleanErrorMsg={cleanErrorMsg} />
            </div>
        );
    };

    export default LoginPage;
  ```

#### SignUpPage

[Go Back to Contents](#contents)

- in `src/pages/SignUpPage.tsx`

  ```TypeScript
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import * as type from '../utils/@types/types';

    import { signUpUser } from '../redux/user';

    import FormSignUp from '../components/FormSignUp';
    import ErrorMsg from '../components/ErrorMsg';

    const SignUpPage: React.FC = () => {
        const [error, setError] = useState<string>('');
        const dispatch = useDispatch();

        const handleSubmit = async (data: type.SignupForm) => {
            try {
                const response = await dispatch(signUpUser(data));
                console.log(response);
            } catch (error) {
                setError(error.message);
            }
        };

        const cleanErrorMsg = (): void => {
            setError('');
        };

        return (
            <div>
                <FormSignUp onSubmit={handleSubmit} />
                <ErrorMsg errorMsg={error} cleanErrorMsg={cleanErrorMsg} />
            </div>
        );
    };

    export default SignUpPage;
  ```

### Redux

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
    const PORT = +process.env.REACT_APP_BACKEND_PORT!;
    const HTTP = PORT! === 3001 ? 'http://' : 'https://';
    const URL = `${HTTP}${
        process.env.REACT_APP_BACKEND_URL!.split(':')[0]
    }:${PORT}/api/users`;

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

    export type FormLoginComponentProps = {
        onSubmit: (data: LoginForm) => void;
    };

    export type FormSignUpComponentProps = {
        onSubmit: (data: SignupForm) => void;
    };

    export type ErrorMsgComponentProps = {
        errorMsg: string;
        cleanErrorMsg: () => void;
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
    import Footer from './components/Footer';

    import HomePage from './pages/HomePage';
    import LoginPage from './pages/LoginPage';
    import SignUpPage from './pages/SignUpPage';
    import AboutPage from './pages/AboutPage';

    const App: React.FC = () => {
        const user = useSelector((state: RootStateOrAny) => state.user);

        const route =
            user && user.firstName ? (
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route exact path="/about" render={() => <AboutPage />} />
                    <Route render={() => <Redirect to={{ pathname: '/' }} />} />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route exact path="/about" render={() => <AboutPage />} />
                    <Route exact path="/login" render={() => <LoginPage />} />
                    <Route exact path="/signup" render={() => <SignUpPage />} />
                    <Route render={() => <Redirect to={{ pathname: '/' }} />} />
                </Switch>
            );

        return (
            <div className="app">
                <Navbar />
                <main>{route}</main>
                <Footer />
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
