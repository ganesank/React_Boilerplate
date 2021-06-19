import request from '../api/request';
import * as Type from '../@types/types';

const getData = async (url: string) => {
    return await request('GET', url, true, true);
};

const addData = async (url: string, data: {}) => {
    return await request('POST', url, data, true, true);
};

const updateData = async (url: string, data: {}) => {
    return await request('PUT', url, data, true, true);
};

const deleteData = async (url: string, data: {}) => {
    return await request('DELETE', url, data, true, true);
};

const loginUser = async (url: string, data: Type.LoginForm) => {
    return await request('POST', url, data, false, true);
};

const signUpUser = async (url: string, data: Type.SignUpForm) => {
    return await request('POST', url, data, false, true);
};

const deleteUser = async (url: string, data: Type.DeleteUserForm) => {
    return await request('DELETE', url, data, true, true);
};

export { getData, addData, updateData, deleteData, loginUser, signUpUser, deleteUser };
