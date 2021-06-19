import * as token from '../token/tokenService';
import * as Type from '../@types/types';

const request: Type.Request = async (type, url, attrs, reqToken = false, throwError = false) => {
    const option: Type.RequestOptions = {
        method: type,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (reqToken) option.headers.Authorization = `Bearer ${token.getToken()}`;
    if (attrs && type !== 'GET') option.body = JSON.stringify(attrs);

    return await fetch(url, option).then(async (response) => {
        const data = await response.json();
        const res: Type.Response = {
            data: null,
            status: null,
            error: null,
        };

        if (throwError) {
            if (response.ok) return (res.data = data);
            res.status = response.status;
            res.error = res.data;
            return res;
        }

        if (response.ok) return { data, error: null };
        return { data: null, error: data };
    });
};

export default request;
