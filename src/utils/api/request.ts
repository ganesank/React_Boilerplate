import * as token from '../token/tokenService';
import * as Type from '../@types/types';

const request: Type.Request = async (type, url, attrs, reqToken = false, throwError) => {
    const option: Type.RequestOptions = {
        method: type,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (reqToken) option.headers.Authorization = `Bearer ${token.getToken()}`;
    if (attrs && type !== 'GET') option.body = JSON.stringify(attrs);

    try {
        const response = await fetch(url, option);
        const data = await response.json();
        const res: Type.Response = {
            data: response.ok ? data : null,
            ok: response.ok,
            status: response.status,
            error: response.ok ? null : data,
        };

        if (throwError) {
            if (response.ok) return data;
            throw new Error(JSON.stringify(data));
        }

        return res;
    } catch (error) {
        if (throwError) {
            throw new Error(error);
        }

        return {
            data: null,
            ok: false,
            status: 503,
            error,
        };
    }
};

export default request;
