import * as Type from '../@types/types';

export const msgArray: Type.MsgArrayFn = (res) => {
    const array: string[] = [];
    const response = JSON.parse(res);

    if (response.error) {
        for (const key in response.error) {
            array.push(`${key}: ${response.error[key]}`);
        }
    } else {
        for (const key in response.data) {
            array.push(response.data[key]!);
        }
    }

    return array;
};
