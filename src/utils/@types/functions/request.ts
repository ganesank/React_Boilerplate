export type ReqFn = {
    (type: string, url: string, data?: {} | null, reqToken?: boolean, throwError?: boolean): Promise<any>;
};

export type ReqHelperFn = {
    (url: string, data?: any, useToken?: boolean, throwError?: boolean): Promise<any>;
};
