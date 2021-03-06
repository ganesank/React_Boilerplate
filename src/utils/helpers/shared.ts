import * as Type from '../@types';

export const sleep: Type.SleepFn = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const downloadJson: Type.DownloadJsonFn = (response, outputFile) => {
    const fileData: string = JSON.stringify(response, undefined, 4);
    const blob = new Blob([fileData], { type: 'text/plain' });
    const linkEl = document.createElement('a');
    linkEl.href = window.URL.createObjectURL(blob);
    linkEl.download = `${outputFile}.json`;
    linkEl.click();
    linkEl.remove();
};

export const getEnvURL: Type.GetEnvURLFn = (param, path) => {
    const PORT: number = process.env.REACT_APP_BACKEND_PORT ? +process.env.REACT_APP_BACKEND_PORT : 3001;
    return process.env.REACT_APP_ENV! === 'production'
        ? `${process.env[param]!}${path}`
        : `${process.env[param]!}:${PORT}${path}`;
};

export const validateEmail: Type.ValidateEmailFn = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email.trim()).toLowerCase());
};
