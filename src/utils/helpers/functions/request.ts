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
