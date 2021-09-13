export type RequestOptions = {
    method: string;
    headers: {
        'Content-Type': string;
        Authorization?: string;
    };
    body?: string;
};
