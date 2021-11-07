import { FormEvent, MouseEvent } from 'react';

// = Generic ===================================================================
export type SleepFn = {
    (ms: number): Promise<void>;
};

export type DownloadJsonFn = {
    (response: any, outputFile: string): void;
};

export type GetEnvURLFn = {
    (param: string): string;
};

export type ValidateEmailFn = {
    (email: string): boolean;
};

// = Hooks =====================================================================
export type UseTimeoutFn = {
    (callback: () => void, delay: number): {
        clear: () => void;
    };
};

// = Forms =====================================================================
export type HandleChangeFn<T> = {
    (e: T): void;
};

export type HandleClickFn = {
    (e?: MouseEvent): void;
};

export type HandleClickDataFn<T1, T2> = {
    (e?: MouseEvent, data?: T1, data2?: T2): void;
};

export type HandleSubmitFn<T> = {
    (e: FormEvent, data?: T): void;
};

export type IsFormValidFn = {
    (): boolean;
};

// = Request / Response ========================================================
export type RequestFn = {
    (type: string, url: string, attrs?: any, reqToken?: boolean, throwError?: boolean, nTry?: number): Promise<any>;
};

export type ReqHelperFn = {
    (url: string, data?: any, useToken?: boolean, throwError?: boolean): Promise<any>;
};
