import * as Type from '../@types/types';
import request from '../api/request';

const getData = async (url: string, throwError: boolean = false) => {
    return await request('GET', url, null, true, throwError);
};

const addData = async (url: string, data: {}, throwError: boolean = false) => {
    return await request('POST', url, data, true, throwError);
};

const updateData = async (url: string, data: {}, throwError: boolean = false) => {
    return await request('PUT', url, data, true, throwError);
};

const deleteData = async (url: string, data: {}, throwError: boolean = false) => {
    return await request('DELETE', url, data, true, throwError);
};

const loginUser = async (url: string, data: Type.LoginForm, throwError: boolean = false) => {
    return await request('POST', url, data, false, throwError);
};

const signUpUser = async (url: string, data: Type.SignUpForm, throwError: boolean = false) => {
    return await request('POST', url, data, false, throwError);
};

const resetPassword = async (url: string, data: Type.ResetPasswordForm, throwError: boolean = false) => {
    return await request('POST', url, data, false, throwError);
};

const updatePassword = async (url: string, data: Type.UpdatePasswordForm, throwError: boolean = false) => {
    return await request('POST', url, data, false, throwError);
};

const deleteUser = async (url: string, data: Type.DeleteUserForm, throwError: boolean = false) => {
    return await request('DELETE', url, data, true, throwError);
};

export { getData, addData, updateData, deleteData, loginUser, signUpUser, resetPassword, updatePassword, deleteUser };
