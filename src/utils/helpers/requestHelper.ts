import request from '../api/request';

const getData = async (url: string, throwError: boolean = false) => {
    return await request('GET', url, null, true, throwError);
};

const postData = async (url: string, data: {}, throwError: boolean = false) => {
    return await request('POST', url, data, true, throwError);
};

const updateData = async (url: string, data: {}, token: boolean = true, throwError: boolean = false) => {
    return await request('PUT', url, data, token, throwError);
};

const deleteData = async (url: string, data: {}, throwError: boolean = false) => {
    return await request('DELETE', url, data, true, throwError);
};

export { getData, postData, updateData, deleteData };
