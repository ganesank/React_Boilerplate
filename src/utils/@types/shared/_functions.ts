import { Dispatch, FormEvent, MouseEvent, SetStateAction } from 'react';

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
    (callback: any, delay: number): {
        reset: () => void;
        clear: () => void;
    };
};

export type UseDebounceFn = {
    (callback: any, delay: number, dependencies: any[]): void;
};

export type UseUpdateEffectFn = {
    (callback: any, dependencies: any[]): void;
};

export type UsePlainArrayFn = {
    (initArray: any[]): {
        array: any[];
        set: Dispatch<SetStateAction<any[]>>;
        push: (newEl: any) => void;
        filter: (callback: any) => void;
        update: (idx: number, newEl: any) => void;
        remove: (idx: number) => void;
        clear: () => void;
    };
};

export type UseToggleFn = {
    (defaultValue?: boolean): [value: boolean, toggleValue: any];
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
