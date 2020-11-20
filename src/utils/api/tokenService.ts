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
