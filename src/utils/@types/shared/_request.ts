export interface RequestFn {
    (type: string, url: string, data?: any, reqToken?: boolean, nTry?: number): Promise<any>;
}

export interface ReqHelperFn {
    (url: string, data?: any, useToken?: boolean): Promise<any>;
}

export interface RequestOptions {
    method: string;
    mode?: RequestMode;
    headers: {
        'Content-Type': string;
        'Access-Control-Allow-Origin'?: string;
        Authorization?: string;
    };
    body?: string;
}

export interface Response<T> {
    data: T;
    errors: string[];
    ok: boolean;
    status: number;
}
