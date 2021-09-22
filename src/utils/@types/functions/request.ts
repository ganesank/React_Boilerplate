export type RequestFn = {
    (type: string, url: string, data?: any, reqToken?: boolean, throwError?: boolean): Promise<any>;
};

export type ReqHelperFn = {
    (url: string, data?: any, useToken?: boolean, throwError?: boolean): Promise<any>;
};
