import * as Type from '../@types/types';

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
        // + atob() - decoding a base-64 encoded string.
        const payload = JSON.parse(atob(token.split('.')[1]!));
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            token = null;
        }
    }

    return token;
};

const getUserFromToken = (): Type.UserState | null => {
    const token: string | null = getToken();

    return token ? JSON.parse(atob(token.split('.')[1]!)) : null;
};

const removeToken = (): void => {
    localStorage.removeItem('token');
};

export { setToken, getToken, getUserFromToken, removeToken, updateToken };
