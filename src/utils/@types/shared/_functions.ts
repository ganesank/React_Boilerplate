import { FormEvent, MouseEvent } from 'react';

export interface SleepFn {
    (ms: number): Promise<void>;
}

export interface DownloadJsonFn {
    (response: any, outputFile: string): void;
}

export interface GetEnvURLFn {
    (param: string, path: string): string;
}

export interface ValidateEmailFn {
    (email: string): boolean;
}

export interface IsFormValidFn {
    (): boolean;
}

// = Handlers ==================================================================
export interface HandleChangeFn<T> {
    (e: T): void;
}

export interface HandleClickFn {
    (e?: MouseEvent): void;
}

export interface HandleClickDataFn<T1, T2> {
    (e?: MouseEvent, data?: T1, data2?: T2): void;
}

export interface HandleSubmitFn<T> {
    (e: FormEvent, data?: T): void;
}
