import { useCallback, useEffect, useRef, useState } from 'react';
import * as Type from '../../@types';

export const useTimeout: Type.UseTimeoutFn = (callback, delay) => {
    const callbackRef: any = useRef(callback);
    const timeoutRef: any = useRef(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            callbackRef.current();
        }, delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear };
};

export const useDebounce: Type.UseDebounceFn = (callback, delay, dependencies) => {
    const { reset, clear } = useTimeout(callback, delay);

    useEffect(() => {
        reset();
    }, [...dependencies, reset]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        clear();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useUpdateEffect: Type.UseUpdateEffectFn = (callback, dependencies) => {
    const firstRenderRef = useRef<boolean>(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, [...dependencies]); // eslint-disable-line react-hooks/exhaustive-deps
};

export const usePlainArray: Type.UsePlainArrayFn = (initArray) => {
    const [array, setArray] = useState<any[]>(initArray);

    const push = (newEl: any) => {
        setArray((prev) => [...prev, newEl]);
    };

    const filter = (callback: any) => {
        setArray((prev) => prev.filter(callback));
    };

    const update = (idx: number, newEl: any) => {
        setArray((prev) => [...prev.slice(0, idx), newEl, ...prev.slice(idx + 1, prev.length)]);
    };

    const remove = (idx: number) => {
        setArray((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1, prev.length)]);
    };

    const clear = () => {
        setArray([]);
    };

    return {
        array,
        set: setArray,
        push,
        filter,
        update,
        remove,
        clear,
    };
};

export const useToggle: Type.UseToggleFn = (defaultValue = false) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const toggleValue = (value?: boolean) => {
        setValue((prev: boolean) => {
            return typeof value === 'boolean' ? value : !prev;
        });
    };

    return [value, toggleValue];
};
