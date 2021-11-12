import { Dispatch, SetStateAction } from 'react';

export interface UseTimeoutFn {
    (callback: any, delay: number): {
        reset: () => void;
        clear: () => void;
    };
}

export interface UseDebounceFn {
    (callback: any, delay: number, dependencies: any[]): void;
}

export interface UseUpdateEffectFn {
    (callback: any, dependencies: any[]): void;
}

export interface UsePlainArrayFn {
    (initArray: any[]): {
        array: any[];
        set: Dispatch<SetStateAction<any[]>>;
        push: (newEl: any) => void;
        filter: (callback: any) => void;
        update: (idx: number, newEl: any) => void;
        remove: (idx: number) => void;
        clear: () => void;
    };
}

export interface UseToggleFn {
    (defaultValue?: boolean): [value: boolean, toggleValue: any];
}
