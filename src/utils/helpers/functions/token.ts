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
