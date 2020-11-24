import * as type from '../@types/types';

export const msgArray: type.AlertMsg = (data) => {
    if (data === 'Failed to fetch') {
        return [data];
    } else {
        const array: string[] = [];
        const dataObj = JSON.parse(data);
        if (data.includes('message')) {
            for (const key in dataObj) {
                array.push(dataObj[key]);
            }
        } else {
            for (const key in dataObj) {
                array.push(`${key}: ${dataObj[key]}`);
            }
        }

        return array;
    }
};
