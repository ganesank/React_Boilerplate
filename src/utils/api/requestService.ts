import requestHelper from './requestHelper';
import * as type from '../@types/types';

const getData = async (url: string) => {
    return await requestHelper('GET', url);
};

const addData = async (url: string, data: {}) => {
    return await requestHelper('POST', url, data);
};

const updateData = async (url: string, data: {}) => {
    return await requestHelper('PUT', url, data);
};

const deleteData = async (url: string, data: {}) => {
    return await requestHelper('DELETE', url, data);
};

const loginUser = async (url: string, data: type.LoginForm) => {
    return await requestHelper('POST', url, data);
};

const signUpUser = async (url: string, data: type.SignupForm) => {
    return await requestHelper('POST', url, data);
};

const deleteUser = async (url: string, data: type.LoginForm) => {
    return await requestHelper('POST', url, data);
};

export {
    getData,
    addData,
    updateData,
    deleteData,
    loginUser,
    signUpUser,
    deleteUser,
};
