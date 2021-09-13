import * as Type from '../../@types/types';
import * as Token from './token';

const req: Type.ReqFn = async (type, url, data, reqToken, throwError) => {
    const option: Type.RequestOptions = {
        method: type,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (reqToken) option.headers.Authorization = `Bearer ${Token.getToken()}`;
    if (data && Object.keys(data).length > 0 && type !== 'GET') option.body = JSON.stringify(data);

    try {
        const response = await fetch(url, option);
        const dataRes = await response.json();
        const formattedRes = {
            data: response.ok ? dataRes : null,
            ok: response.ok,
            status: response.status,
            error: response.ok ? null : dataRes,
        };

        if (throwError) {
            if (response.ok) return dataRes;
            throw new Error(JSON.stringify(dataRes));
        }

        return formattedRes;
    } catch (error: any) {
        if (throwError) throw new Error(error);
        return { data: null, ok: false, status: 503, error };
    }
};

export const getData: Type.ReqHelperFn = async (url, _, useToken = true, throwError = false) => {
    return await req('GET', url, useToken, true, throwError);
};

export const postData: Type.ReqHelperFn = async (url, data = {}, useToken = true, throwError = false) => {
    return await req('POST', url, data, useToken, throwError);
};

export const updateData: Type.ReqHelperFn = async (url, data = {}, useToken = true, throwError = false) => {
    return await req('PUT', url, data, useToken, throwError);
};

export const deleteData: Type.ReqHelperFn = async (url, data = {}, useToken = true, throwError = false) => {
    return await req('DELETE', url, data, useToken, throwError);
};
