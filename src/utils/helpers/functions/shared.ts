import * as Type from '../../@types';

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
