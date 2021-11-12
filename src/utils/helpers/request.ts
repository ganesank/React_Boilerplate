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
